const path = require('path');
const glob = require('glob');

module.exports = {
    moduleAliases: {
        "react-recommender": path.resolve(__dirname, "src")
    },
  title: 'React-Recommender',
  components: function () {
    return glob.sync(path.resolve(__dirname, 'src/**/*.{js, jsx,ts,tsx}'))
      .filter(function (module) {
        const result = /\/[A-Z]\w*\.tsx$/.test(module);
        //console.log(module, "-->", result);
        return result;
      });
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: false } }).parse,
  styleguideDir: "docs",
  serverPort: 3003

};
