const fs = require('fs').promises;
const path = require('path');

class Write{
    constructor(pathName, dataFile){
        this.pathFile = path.resolve('databases',pathName);
        this.dataFile = JSON.stringify(dataFile,' ',2);
    }

    async Writing(){
        await fs.writeFile(this.pathFile, this.dataFile, {flag: 'w', encoding: 'utf-8'});
    }
}

module.exports = Write;