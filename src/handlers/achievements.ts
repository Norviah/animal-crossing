import { join } from 'path';
import { writeFileSync } from 'fs';

import { directories } from '../util/directories';
import { category } from '../util/category';

// An achievement in Animal Crossing may have up to 6 tiers, with each tier
// having an amount of Nook Miles to award the player and a modifier/noun for
// the player to use on their passport. Similar to other categories, the
// spreadsheet has an entry for each tier's reward, modifier, noun, and the
// required amount that one needs to earn that tier, regardless if the
// achievement uses all 6 tiers.

// This script combines every tier into and object and removes the tiers that
// aren't used.

// Represents the max amount of tiers an achievement can have.
const amount: number[] = [1, 2, 3, 4, 5, 6];

// Contains the keys that reference the requirements for each tier.
const tierKeys: string[] = amount.map((number: number) => `tier${number}`);

// Contains the keys that reference the rewards for each tier.
const rewardKeys: string[] = amount.map((number: number) => `tier${number}Reward`);

// Contains the keys that reference the nouns that's given for each tier.
const nounKeys: string[] = amount.map((number: number) => `tier${number}Noun`);

// Contains the keys that reference the modifiers that's given for each tier.
const modifierKeys: string[] = amount.map((number: number) => `tier${number}Modifier`);

const achievements: obj[] = category('Achievements', directories.sanitized);

for (const achievement of achievements) {
  // Initialize an object within the achievement to hold reference of the
  // available teirs for the achievement and the rewards/requirements.
  const container: obj = (achievement.tiers = {});

  // Grab the required amount to reach each tier of the achievement.
  const tiers: string[] = tierKeys.map((key: string) => achievement[key]).filter((value) => value !== null);

  // Grab the rewards for each tier.
  const rewards: string[] = rewardKeys.map((key: string) => achievement[key]).filter((value) => value !== null);

  // Grab the nouns given for each tier.
  const nouns: string[] = nounKeys.map((key: string) => achievement[key]).filter((value) => value !== null);

  // Grab the modifiers given for each tier.
  const modifiers: string[] = modifierKeys.map((key: string) => achievement[key]).filter((value) => value !== null);

  // Once we have the values we need, we know that each array has the same
  // length and each index for each array is about the same tier, for example,
  // the first element in 'tiers' is the requirement for the first tier, the
  // first element in 'rewards' the reward given for the first tier, and so on
  // for the rest of the arrays and indexes. We initialize an object with these
  // values and add it into the achievement, with the key as the tier's number.
  for (const i in tiers) {
    container[Number(i) + 1] = { required: tiers[i], reward: rewards[i], nouns: nouns[i], modifiers: modifiers[i] };
  }

  for (const key of [...tierKeys, ...rewardKeys, ...nounKeys, ...modifierKeys]) {
    delete achievement[key];
  }
}

writeFileSync(join(directories.sanitized, `Achievements.json`), JSON.stringify(achievements, null, 2));
