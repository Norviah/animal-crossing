// ---
// TYPES
// ---

import { Achievement as IAchievement } from './types/Achievement';
import { Construction as IConstruction } from './types/Construction';
import { Creature as ICreature } from './types/Creature';
import { Item as IItem } from './types/Item';
import { Reaction as IReaction } from './types/Reaction';
import { Recipe as IRecipe } from './types/Recipe';
import { SeasonsAndEvents as ISeasonsAndEvents } from './types/SeasonsAndEvents';
import { Translation as ITranslation } from './types/Translation';
import { Villager as IVillager } from './types/Villager';
import { Npc as INPC } from './types/NPC';

// ---
// SOURCE FILES
// ---

import Achievements from './data/Achievements.json';
import Construction from './data/Construction.json';
import Creatures from './data/Creatures.json';
import Items from './data/Items.json';
import Reactions from './data/Reactions.json';
import Recipes from './data/Recipes.json';
import SeasonsAndEvents from './data/SeasonsAndEvents.json';
import Translations from './data/Translations.json';
import Villagers from './data/Villagers.json';
import NPCs from './data/NPCs.json';

// ---
// EXPORTS
// ---

export const achievements: IAchievement[] = Achievements as IAchievement[];
export const construction: IConstruction[] = Construction as IConstruction[];
export const creatures: ICreature[] = Creatures as ICreature[];
export const items: IItem[] = Items as IItem[];
export const reactions: IReaction[] = Reactions as IReaction[];
export const seasonsAndEvents: ISeasonsAndEvents[] = SeasonsAndEvents as ISeasonsAndEvents[];
export const recipes: IRecipe[] = (<unknown>Recipes) as IRecipe[];
export const translations: ITranslation[] = Translations as ITranslation[];
export const villagers: IVillager[] = Villagers as IVillager[];
export const npcs: INPC[] = NPCs as INPC[];

// ---
// TYPES
// ---

export {
  IAchievement,
  IConstruction,
  ICreature,
  IItem,
  IReaction,
  IRecipe,
  ITranslation,
  IVillager,
  INPC,
  ISeasonsAndEvents,
};
