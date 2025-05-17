import { exec } from 'child_process';

const url = 'http://localhost:5173';
const delay = 5000; // 5 seconds

setTimeout(() => {
  if (process.platform === 'win32') {
    // Windows
    exec(`start ${url}`, (err) => {
      if (err) {
        console.error('Failed to open browser on Windows:', err);
      }
    });
  } else if (process.platform === 'darwin') {
    // macOS
    exec(`open ${url}`, (err) => {
      if (err) {
        console.error('Failed to open browser on macOS:', err);
      }
    });
  } else {
    console.error('Unsupported platform. Please open the browser manually:', url);
  }
}, delay);