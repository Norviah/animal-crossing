// ---
// TYPES
// ---

import { Achievement as IAchievement } from './types/Achievement';
import { Construction as IConstruction } from './types/Construction';
import { Creature as ICreature } from './types/Creature';
import { Event as IEvent } from './types/Event';
import { ID as IID } from './types/ID';
import { Item as IItem } from './types/Item';
import { Hemisphere as IHemisphere } from './types/Hemisphere';
import { Reaction as IReaction } from './types/Reaction';
import { Recipe as IRecipe } from './types/Recipe';
import { Translation as ITranslation } from './types/Translation';
import { Villager as IVillager } from './types/Villager';

// ---
// SOURCE FILES
// ---

import Achievements from './combined/Achievements.json';
import Construction from './combined/Construction.json';
import Creatures from './combined/Creatures.json';
import Events from './combined/Events.json';
import IDs from './combined/IDs.json';
import Items from './combined/Items.json';
import NorthenHemisphere from './combined/NorthernHemisphere.json';
import SouthernHemisphere from './combined/SouthernHemisphere.json';
import Reactions from './combined/Reactions.json';
import Recipes from './combined/Recipes.json';
import Translations from './combined/Translations.json';
import Villagers from './combined/Villagers.json';

// ---
// EXPORTS
// ---

export const achievements: IAchievement[] = Achievements as IAchievement[];
export const construction: IConstruction[] = Construction as IConstruction[];
export const creatures: ICreature[] = Creatures as ICreature[];
export const events: IEvent[] = Events as IEvent[];
export const ids: IID[] = IDs as IID[];
export const items: IItem[] = Items as IItem[];
export const northenHemisphere: IHemisphere[] = NorthenHemisphere as IHemisphere[];
export const southernHemisphere: IHemisphere[] = SouthernHemisphere as IHemisphere[];
export const reactions: IReaction[] = Reactions as IReaction[];
export const recipes: IRecipe[] = (<unknown>Recipes) as IRecipe[];
export const translations: ITranslation[] = Translations as ITranslation[];
export const villagers: IVillager[] = Villagers as IVillager[];

// ---
// TYPES
// ---

export {
  IAchievement,
  IConstruction,
  ICreature,
  IEvent,
  IID,
  IItem,
  IHemisphere,
  IReaction,
  IRecipe,
  ITranslation,
  IVillager,
};
