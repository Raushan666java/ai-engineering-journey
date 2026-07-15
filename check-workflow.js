const fs = require('fs');
const path = require('path');

function check(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      check(full);
    } else if (item === 'handwritten-notes.svg') {
      const content = fs.readFileSync(full, 'utf-8');
      const matches = content.match(/fill="#059669" font-weight="bold">(\d+)\./g);
      if (matches && matches[0].includes('1.')) {
        console.log('OK: ' + full);
      } else if (matches) {
        console.log('WRONG START: ' + full + ' -> ' + matches[0]);
      }
    }
  }
}

check('docs/assets/images/lessons');