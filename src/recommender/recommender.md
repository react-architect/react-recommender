### Recommend-Component

```js
import Recommender, { Recommend, Option, withObjective } from 'react-recommender';

const Objective = withObjective(({onAchieved, ...props}) => <button onClick={(evt)=> onAchieved("test")}>Click Me</button>);

<Recommender accountId="success@test.de">
    <div>
        <Recommend
            mode="egreedy"
            epsilon={0.1}
            objectiveId="newtest"
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
