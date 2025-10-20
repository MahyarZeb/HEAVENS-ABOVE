const fs = require('fs');
test('run.js exists', () => {
  expect(fs.existsSync('run.js')).toBe(true);
});