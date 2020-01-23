*****************
React-Recommender
*****************

Quick Start
===========

Install the `react-recommender <https://github.com/react-architect/react-recommender>`_ library.

.. code-block:: bash

    npm install --save react-recommender

This is a full example. It optimizes the displayed message ("Hello World" or "Hello You") based on which option better
achieves the objective: making the user click the button.

.. code-block:: javascript

    import Recommender, { Recommend, Option, withObjective } from 'react-recommender';

    const Objective = withObjective(({onAchieved, ...props}) => <button onClick={(evt)=> onAchieved("OptimizeClicks")}>Click Me</button>);

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
    </Recommender>


Resources
=========

- `How To Build A Self-Improving React App--It is easier than you might think <https://www.react-architect.com/page?ref=medium_howselfimprove&dest=/>`_


.. toctree::
   :caption: Contents
   :maxdepth: 2

   getstarted
   reference

