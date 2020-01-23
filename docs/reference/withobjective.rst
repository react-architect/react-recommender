.. _withObjective:

******
withObjective
******

``withObjective`` is a higher-order function that adds the ``onAchieved``-callback function to the properties of the
wrapped component.


``function onAchieved(objectiveId: string): void``: call this function with the id of the achieved objective.



Properties
==========
.. csv-table:: Properties
   :header: "Prop name", "Type", "Default", "Description"
   :widths: 20, 20, 20, 40

   "Component", "React.ReactType", "Required", "The wrapped React component.
   his componend receives ``onAchieved`` as a property"
