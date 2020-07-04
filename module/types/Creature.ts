export interface Creature {
    sourceSheet:          CreatureSourceSheet;
    num:                  number;
    name:                 string;
    iconImage:            null | string;
    critterpediaImage:    null | string;
    furnitureImage:       null | string;
    sell:                 number;
    whereHow?:            string;
    shadow?:              Shadow;
    totalCatchesToUnlock: number;
    spawnRates:           string;
    rainSnowCatchUp?:     boolean;
    size:                 Size;
    surface:              boolean;
    hhaBasePoints:        number | null;
    lightingType?:        LightingType | null;
    iconFilename:         null | string;
    critterpediaFilename: string;
    furnitureFilename:    string;
    internalId:           number;
    uniqueEntryId:        string;
    translations:         Translations;
    hemipsheres:          Hemipsheres;
    colors:               Color[];
    weather?:             Weather;
    movementSpeed?:       MovementSpeed;
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
    time:        string[];
    timeArray:   Array<number[] | number>;
    months:      string[];
    monthsArray: number[];
}

export enum LightingType {
    Emission = "Emission",
    Fluorescent = "Fluorescent",
}

export enum MovementSpeed {
    Fast = "Fast",
    Medium = "Medium",
    Slow = "Slow",
    Stationary = "Stationary",
    VeryFast = "Very fast",
    VerySlow = "Very slow",
}

export enum Shadow {
    Large = "Large",
    LargeWFin = "Large w/Fin",
    Long = "Long",
    Medium = "Medium",
    MediumWFin = "Medium w/Fin",
    Small = "Small",
    XLarge = "X-Large",
    XSmall = "X-Small",
    XXLarge = "XX-Large",
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
    SeaCreatures = "Sea Creatures",
}

export interface Translations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 string;
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
    Bugs = "Bugs",
    Fish = "Fish",
    SeaCreatures = "Sea Creatures",
}

export enum Version {
    The100 = "1.0.0",
    The130 = "1.3.0",
}

export enum Weather {
    AnyExceptRain = "Any except rain",
    AnyWeather = "Any weather",
    RainOnly = "Rain only",
}
