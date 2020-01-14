Feature: Optimize the rendered content

Scenario: Select the best performing content
  Given There are three options of a content
  And Option three is the best performing option
  When A user visits the content
  Then The content should be the best performing option
