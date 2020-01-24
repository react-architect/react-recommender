# react-recommender

> A recommender system for React

[![NPM](https://img.shields.io/npm/v/react-recommender.svg)](https://www.npmjs.com/package/react-recommender)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub license](https://img.shields.io/github/license/msaracevic/react-embed-gist.svg)](https://github.com/msaracevic/react-embed-gist/blob/master/LICENSE)


Building a self-improving React app is not as hard as you think.
We can build one with a few lines of code.

## Install

```bash
npm install --save react-recommender
```

## Usage

The following listing is a complete example. Each render, it displays the
option ("Hello World" or "Hello You") that has the best chance to achieve
the purpose:  Make the user click the button.


```tsx
import react from 'react';
import ReactDOM from 'react-dom'

import Recommender, { Recommend, Option, withObjective } from 'react-recommender';

const Objective = withObjective(({onAchieved, ...props}) => <button onClick={(evt)=> onAchieved("OptimizeClicks")}>Click Me</button>);

ReactDOM.render(
  <Recommender accountId="mail@react-architect.com">
      <div>
          <Recommend
              mode="egreedy"
              epsilon={0.1}
              objectiveId="OptimizeClicks"
              options={[
                <Option id="helloWorld">
                  <div>Hello World</div>
                </Option>,
                <Option id="helloYou">
                  <div>Hello You</div>
                </Option>
              ]}>{
                  ({loading, recommendation, error, renderOption}) => {
                      return (loading && <div>Loading</div>) ||
                          (recommendation ? renderOption(recommendation) : <div>Error</div>)
                  }
              }</Recommend>

          <Objective />
      </div>
  </Recommender>,
  document.getElementById('root')
);

```

## Learn More

The [documentation](https://react-recommender.readthedocs.io/en/latest/) contains
a description of the components and a implementation guide.

Do you prefer a tutorial? No problem:
[How To Build A Self-Improving React App--It is easier than you might think](https://www.react-architect.com/page?ref=medium_howselfimprove&dest=/)

## License

MIT © [react-architect](https://github.com/react-architect)


