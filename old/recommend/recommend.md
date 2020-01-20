### Recommend-Component

```js
import { Option } from 'react-recommender';
<div>
  <Recommend
    account="mail@react-architect.com"
    mode="egreedy"
    epsilon={0}
    recommendId="test"
    options={[
      <Option id="helloWorld">
        <div>Hello World</div>
      </Option>,
      <Option id="helloYou">
        <div>Hello You</div>
      </Option>
    ]}>{({loading, recommended, error, onSuccess, renderOption}) => {
      return <div>{
        (loading && <div>Loading</div>) ||
        (recommended ? renderOption(recommended) : <div>Error</div>)
      }
        <button onClick={(evt)=> onSuccess(recommended)}>Click Me</button>
      </div>
    }
  }</Recommend>

</div>
```
