Feature: Recommend the best performing content

Scenario: There is a best option
  Given there are three content options
  And option three is the best performing one
  When a user visits the content
  Then option three should be the content
