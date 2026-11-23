/**
 * Generate the PWA icons as PNG, with no image dependencies.
 *
 * There is no sharp / canvas / resvg in this project, and an SVG icon in a
 * manifest is still uneven across Android launchers, so this writes the PNG
 * bytes directly: a rounded-square canvas with three text bars on it.
 *
 * Each pixel is sampled 4x4 and averaged, which is what stops the rounded
 * corners and the bar ends looking chewed off at 192px.
 *
 *   node scripts/make-icons.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const ACCENT = [0x44, 0x46, 0xe8]; // #4446e8, the site accent
const PAPER = [0xff, 0xff, 0xff];

/** Rounded rectangle test, in unit space. */
function inRoundRect(x, y, x0, y0, x1, y1, r) {
  if (x < x0 || x > x1 || y < y0 || y > y1) return false;
  const cx = Math.min(Math.max(x, x0 + r), x1 - r);
  const cy = Math.min(Math.max(y, y0 + r), y1 - r);
  return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
}

/**
 * The mark: three left-aligned bars of decreasing width. It reads as a page of
 * text at any size, which is the whole product.
 *
 * `scale` shrinks the mark toward the canvas centre so the same drawing can be
 * reused for the maskable icon, where Android crops to a circle and anything in
 * the outer 20% may be cut off.
 */
function mark(x, y, scale) {
  // Map the canvas into mark space, centred.
  const mx = (x - 0.5) / scale + 0.5;
  const my = (y - 0.5) / scale + 0.5;

  const bars = [
    {y0: 0.315, y1: 0.385, x1: 0.735},
    {y0: 0.465, y1: 0.535, x1: 0.665},
    {y0: 0.615, y1: 0.685, x1: 0.575},
  ];

  for (const b of bars) {
    if (inRoundRect(mx, my, 0.265, b.y0, b.x1, b.y1, 0.035)) return true;
  }
  return false;
}

function render(size, {maskable = false} = {}) {
  const SS = 4; // supersampling factor per axis
  const pixels = Buffer.alloc(size * size * 4);
  const scale = maskable ? 0.78 : 1;
  // Maskable icons are cropped to a circle; a square canvas with the mark well
  // inside the safe zone survives both the circle and the squircle.
  const radius = maskable ? 0.5 : 0.22;

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let aSum = 0;

      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = (px + (sx + 0.5) / SS) / size;
          const y = (py + (sy + 0.5) / SS) / size;

          const inShape = inRoundRect(x, y, 0, 0, 1, 1, radius);
          const inMark = inShape && mark(x, y, scale);

          const colour = inMark ? PAPER : ACCENT;
          rSum += colour[0];
          gSum += colour[1];
          bSum += colour[2];
          aSum += inShape ? 255 : 0;
        }
      }

      const n = SS * SS;
      const i = (py * size + px) * 4;
      // Premultiplied average, so the transparent corners do not bleed accent
      // colour into the edge pixels.
      const alpha = aSum / n;
      const cover = alpha / 255 || 1;
      pixels[i] = Math.round(rSum / n / cover);
      pixels[i + 1] = Math.round(gSum / n / cover);
      pixels[i + 2] = Math.round(bSum / n / cover);
      pixels[i + 3] = Math.round(alpha);
    }
  }

  return encodePng(size, size, pixels);
}

// --- minimal PNG encoder -------------------------------------------------

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

function encodePng(width, height, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // colour type: RGBA
  ihdr[10] = 0; // deflate
  ihdr[11] = 0; // adaptive filtering
  ihdr[12] = 0; // no interlace

  // Each scanline is prefixed with filter type 0 (none).
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, {level: 9})),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

// --- write -----------------------------------------------------------------

const OUT = path.join('static', 'icons');
fs.mkdirSync(OUT, {recursive: true});

const targets = [
  {file: 'icon-192.png', size: 192, opts: {}},
  {file: 'icon-512.png', size: 512, opts: {}},
  {file: 'icon-maskable-512.png', size: 512, opts: {maskable: true}},
  {file: 'apple-touch-icon.png', size: 180, opts: {}},
  // 1024 is what the Play Store and the Android launcher want for the app icon;
  // it is the same drawing, so it is generated here rather than kept as a
  // separate asset that can drift.
  {file: 'icon-1024.png', size: 1024, opts: {}},
];

for (const t of targets) {
  const png = render(t.size, t.opts);
  const dest = path.join(OUT, t.file);
  fs.writeFileSync(dest, png);
  console.log(`${dest}  ${t.size}x${t.size}  ${(png.length / 1024).toFixed(1)} KB`);
}
