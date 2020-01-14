import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('src/features/optimize.feature');

defineFeature(feature, test => {
  console.log("feature: ", feature);

  test('Select the best performing content', ({ given, when, then }) => {

    given('There are three options of a content', () => {
      console.log("given")
    });

    given('Option three is the best performing option', () => {
      console.log("given")
    });

    when('A user visits the content', () => {
      console.log("when")
    });

    then('The content should be the best performing option', () => {
      expect('people').not.toBe('haters');
    });

  });
});
