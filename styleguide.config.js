const path = require('path');
const glob = require('glob');

const mapOrder = {
    Recommender: 1,
    Recommend: 3,
    recommendation: 4,
    Option: 5,
};

mapOrder["with-objective"] = 2;

const toModuleName = name => name.substring(name.lastIndexOf("/")+1, name.lastIndexOf("."));
const toOrderValue = val => val ? val : -999;

module.exports = {
    moduleAliases: {
        "react-recommender": path.resolve(__dirname, "src")
    },
    title: 'React-Recommender',
    components: function () {
        return glob.sync(path.resolve(__dirname, 'src/**/*.tsx')) //js, jsx,ts,
            .sort((a,b )=> {
                //console.log(a, toModuleName(a), mapOrder[toModuleName(a)])
                //console.log(b, toModuleName(b), mapOrder[toModuleName(b)])
                return toOrderValue(mapOrder[toModuleName(a)]) - toOrderValue(mapOrder[toModuleName(b)])
            })

          /*.filter(function (module) {
            const result = /\/[A-Z]\w*\.tsx$/.test(module);
            console.log(module, "-->", result);
            return result;
          });*/
    },
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: false } }).parse,
    styleguideDir: "docs",
    serverPort: 3003,
    usageMode: "expand",
    ribbon: {
        url: 'https://github.com/react-architect/react-recommender/',
        text: 'Fork me on GitHub'
    }


};
