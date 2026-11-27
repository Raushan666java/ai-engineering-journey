import { randomBytes, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const configDir = join(homedir(), '.phonebridge');
const tokenFile = join(configDir, 'token');

/**
 * The dashboard token is generated once and reused, so the URL stays stable
 * across restarts. It lives outside the project so it never lands in git.
 */
export function getOrCreateToken(): string {
  if (existsSync(tokenFile)) {
    const existing = readFileSync(tokenFile, 'utf8').trim();
    if (existing) return existing;
  }

  const token = randomBytes(24).toString('base64url');
  mkdirSync(configDir, { recursive: true });
  writeFileSync(tokenFile, token, { mode: 0o600 });
  return token;
}

export function tokenPath(): string {
  return tokenFile;
}

export function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}
