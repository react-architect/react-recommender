const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'React Style Guide Example',
  components: function () {
    return glob.sync(path.resolve(__dirname, 'src/**/*.{js, jsx,ts,tsx}'))
      .filter(function (module) {
        return /\/[A-Z]\w*\.tsx$/.test(module);
      });
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: false } }).parse,
  styleguideDir: "docs",
  serverPort: 3000
};
