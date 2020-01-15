### Basic use example:

 ```js
 <Co text="🍕" />
 ```


### Feature: Optimize the rendered content

> Scenario**: Select the best performing content

  >> **Given** There are three options of a content

  And Option three is the best performing option

  When A user visits the content

  Then The content should be the best performing option


```js

import { runTest }  from './Co';
runTest('Select the best performing content', ({ given, when, then }) => {

  var options = undefined;
  given('There are three options of a content', () => {
    options = <Co text="Option Three" another={5} />
  });

  given('Option three is the best performing option', () => {
    console.log("given");
  });

  when('A user visits the content', () => {
    console.log("when");
  });

  then('The content should be the best performing option', () => {
    expect('people').not.toBe('haters');
  });
});



```
