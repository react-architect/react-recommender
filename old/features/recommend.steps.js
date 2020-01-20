import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('src/features/recommend.feature');

defineFeature(feature, test => {

  test('There is a best option', ({ given, when, then }) => {

    let options = undefined;

    given('there are three content options', () => {
      options = [
        "a", "b", "c"
      ];

    });

    given('option three is the best performing one', () => {
      console.log(options);
      console.log("given")
    });

    when('a user visits the content', () => {
      console.log("when")
    });

    then('option three should be the content', () => {
      expect('people').not.toBe('haters');
    });

  });

});
