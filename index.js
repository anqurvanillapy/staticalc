'use strict';

var _electron = require('electron');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var win = void 0;

function createWindow() {
  win = new _electron.BrowserWindow({ width: 800, height: 600 });

  win.loadURL(_url2.default.format({
    pathname: _path2.default.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', function (_) {
    win = null;
  });
}

_electron.app.on('ready', createWindow);

_electron.app.on('window-all-closed', function (_) {
  // Applications and their menu bar may stay active on macOS.
  if (process.platform !== 'darwin') _electron.app.quit();
});

_electron.app.on('activate', function (_) {
  // Re-create a window in the app when the dock icon is clicked and there are
  // no other windows open for macOS.
  if (win === null) createWindow();
});

// Rest of the app's main code.
