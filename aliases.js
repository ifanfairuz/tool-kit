const jsconfig = require('./jsconfig.json');
const paths = jsconfig.compilerOptions.paths;
const process = path => path.replace('/*', '');

let aliases = {};
Object.keys(paths).forEach(path => {
    const p = process(path);
    aliases[p] = process(paths[path][0]);
});

module.exports = {
    ...aliases
}