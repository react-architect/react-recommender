Feature: Optimize the rendered content

Scenario: Select the best performing content
  Given There are three options of a content
  When A user visits the content
  Then The content should be the best performing option
