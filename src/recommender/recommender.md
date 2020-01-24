### Example

```js
import Recommender, { Recommend, Option, withObjective } from 'react-recommender';

const Objective = withObjective(({onAchieved, ...props}) => <button onClick={(evt)=> onAchieved("OptimizeClicks")}>Click Me</button>);

<Recommender accountId="mail@react-architect.com">
    <div>
        <Recommend
            mode="egreedy"
            epsilon={0.1}
            objectiveId="OptimizeClicks"
            origin="example_A"
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
</Recommender>
```
