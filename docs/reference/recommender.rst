.. _Recommender:

******
Recommender
******

The ``<Recommender/>``-component is the higher-order-component you need to integrate into your app.


Properties
==========
.. csv-table:: Properties
    :header: "Prop name", "Type", "Default", "Description"
    :widths: 20, 20, 20, 40

    "accountId", "string", "Required", "The accountId is the unique email address
    assigned to the React app. The owner of the email address has access
    to the stats of all objectives."
    "serverUrl", "string", "Optional", "Specify the URL of your custom
    backend implementation. Leave undefined to use the default server."


Children
=========

Wrap your React app into this component at a high level.
