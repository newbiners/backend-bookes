const fs = require('fs')

const deleteUploadedFiles = (files) => {
    console.log(files)
    // console.log(Object.values(files), "files object")
    if (files) {
        // Object.values(files).forEach(fileArray => {
        //     console.log(fileArray, "file aray")
        //     fileArray.forEach(file => {
        //         fs.unlinkSync(file.path);
        //     });
        // });
        fs.unlinkSync(files);
    }
}

module.exports = deleteUploadedFiles
