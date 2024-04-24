const fs = require('fs');
const path = require('path');

const sourceDirPath = path.resolve(__dirname, './node_modules/@springbokagency/bridgestone-web-components');
const destinationDirPath = path.resolve(__dirname, './scripts/dependencies/springbok-web-components');
const excludeFolders = ['assets'];

fs.cpSync(sourceDirPath, destinationDirPath, {
  recursive: true,
  filter: (srcPath) => {
    if (excludeFolders.includes(path.basename(srcPath))) {
      return false;
    }
    return true;
  },
});

fs.cpSync(path.resolve(__dirname, './node_modules/@springbokagency/bridgestone-web-components/dist/bridgestone-web-components/assets'), path.resolve(__dirname, './assets'), { recursive: true });
