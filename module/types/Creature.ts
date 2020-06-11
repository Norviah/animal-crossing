export interface Creature {
    sourceSheet:          CreatureSourceSheet;
    num:                  number;
    name:                 string;
    iconImage:            string;
    critterpediaImage:    string;
    furnitureImage:       string;
    size:                 Size;
    sell:                 number;
    whereHow:             string;
    shadow?:              string;
    totalCatchesToUnlock: number;
    spawnRates:           string;
    rainSnowCatchUp?:     boolean;
    lightingType?:        LightingType | null;
    iconFilename:         string;
    critterpediaFilename: string;
    furnitureFilename:    string;
    internalId:           number;
    uniqueEntryId:        string;
    translations:         Translations;
    hemipsheres:          Hemipsheres;
    colors:               Color[];
    weather?:             Weather;
}

export enum Color {
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Gray = "Gray",
    Green = "Green",
    LightBlue = "Light blue",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow",
}

export interface Hemipsheres {
    north: North;
    south: North;
}

export interface North {
    months: string[];
    time:   string[];
}

export enum LightingType {
    Emission = "Emission",
    Fluorescent = "Fluorescent",
}

export enum Size {
    The1X1 = "1x1",
    The2X1 = "2x1",
    The2X2 = "2x2",
    The3X2 = "3x2",
}

export enum CreatureSourceSheet {
    Fish = "Fish",
    Insects = "Insects",
}

export interface Translations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number | string;
    version:            Version;
    english:            string;
    englishEurope:      string;
    german:             string;
    spanish:            string;
    spanishUs:          string;
    french:             string;
    frenchUs:           string;
    italian:            string;
    dutch:              string;
    chinese:            string;
    chineseTraditional: string;
    japanese:           string;
    korean:             string;
    russian:            string;
    plural:             boolean;
    internalIds:        number[];
}

export enum TranslationsSourceSheet {
    Bags = "Bags",
    Bottoms = "Bottoms",
    Bugs = "Bugs",
    Fish = "Fish",
}

export enum Version {
    The100 = "1.0.0",
}

export enum Weather {
    AnyExceptRain = "Any except rain",
    AnyWeather = "Any weather",
    RainOnly = "Rain only",
}
