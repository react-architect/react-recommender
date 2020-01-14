import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./features/optimize.feature');

defineFeature(feature, test => {
  console.log("feature: ", feature);

  test('Select the best performing content', ({ given, when, then }) => {

    console.log("given: ", given);

    /*
    given('I am Elon Musk attempting to launch a rocket into space', () => {
      rocket = new Rocket();
    });

    when('I launch the rocket', () => {
      rocket.launch();
    });

    then('the rocket should end up in space', () => {
      expect(rocket.isInSpace).toBe(true);
    });

    then('the booster(s) should land back on the launch pad', () => {
      expect(rocket.boostersLanded).toBe(true);
    });

    then('nobody should doubt me ever again', () => {
      expect('people').not.toBe('haters');
    });*/
  });
});
