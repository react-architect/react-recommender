.. _Recommend:

******
Recommend
******

The ``<Recommend/>``-component is the optimizer. It selects and recommends the best of the provided options.


Properties
==========
.. csv-table:: Properties
    :header: "Prop name", "Type", "Default", "Description"
    :widths: 20, 20, 20, 40

    "mode", "string|number", "Required", "The mode specifies the optimizing algorithm. Use "egreedy" for epsilon greedy, "random" for no optimization, or a number to fix the resulting recommendation to the specified index of the options array."
    "objectiveId", "string", "Required", "Specify the id of the objective to be achieved."
    "options", "IOption[]", "Required", "Array of <Option/>-components. <Recommend/> chooses the best options in order to achieve the specified objective"
    "epsilon", "number", "Optional", "If you use "egreedy"-mode, you can specify the epsilon (float between 0.0 and 1.0). Epsilon is the probability with which <Recommend/> recommends an option randomly."


Children
=========

The `<Recommend/>`-component provide a function as a child. This function has the following signature:

.. csv-table:: Properties
    :header: "Prop name", "Type", "Default", "Description"
    :widths: 20, 20, 20, 40

    "loading", "Boolean", "Required", "Indicates whether the Recommend-component
    is loading the recommendation ``true`` or not ``false``"
    "recommendation", "string", "Optional", "The id of the recommended option.
    Only defined if loading is done ``false`` and there is no ``error``"
    "error", "string", "Optional", "Error during loading the recommendation.
    If loading is complete ({false}), then either the error or the recommendation is defined."
    "epsilon", "number", "Optional", "If you use "egreedy"-mode, you can specify the
    epsilon (float between 0.0 and 1.0). Epsilon is the probability with which
    <Recommend/> recommends an option randomly."
    "renderOption", "(optionId: string) => React.ReactNode", "Required", "Callback-function
    to render the option with the specified Id. Should be the recommended one. But
    it is up to the app to render a different option. @param optionId
    specifies the id of the option to be rendered"
