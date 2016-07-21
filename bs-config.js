
var rootDir = process.argv[2];
console.info(rootDir);
var BaseDir = "./"+rootDir;
console.log(BaseDir);
module.exports = {
    "files" : "./**/*.{js, html, css}",
    "server" : {
        "baseDir" : BaseDir
    },
  //  "browser" : ["google-chrome", "firefox"]
}
