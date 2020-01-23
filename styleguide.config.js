const glob = require("glob");
const path = require("path");
const fs   = require("fs");

module.exports = {
    title: 'React-Recommender',
    moduleAliases: {
        "react-recommender": path.resolve(__dirname, "src")
    },
    components: () => {
        return glob.sync(path.resolve(__dirname, 'src/**/*.tsx')).filter(file => {
            // Take only connect component if exists, ignore others.
            if (file.match(/connect.tsx$/)) {
                return true
            } else {
                const pathObject = path.parse(file);
                pathObject.ext = `.connect${pathObject.ext}`
                const { root, dir, ext, name } = pathObject;
                return !fs.existsSync(path.format({ root, dir, ext, name }));
            }
        });
    },
    propsParser: require("react-docgen-typescript").withDefaultConfig({
        savePropValueAsString: true,
    }).parse,
    webpackConfig: Object.assign({}, require("./webpack.config"), {}),
    usageMode: "expand",
    styleguideDir: "styledguide",
    serverPort: 3003
};