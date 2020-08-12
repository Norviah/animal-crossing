export interface Creature {
    sourceSheet:          CreatureSourceSheet;
    num:                  number;
    name:                 string;
    iconImage:            string;
    critterpediaImage:    string;
    furnitureImage:       string;
    sell:                 number;
    whereHow?:            string;
    weather?:             Weather;
    totalCatchesToUnlock: number;
    spawnRates:           string;
    size:                 Size;
    surface:              boolean;
    description:          string[];
    catchPhrase:          string[];
    hhaBasePoints:        number;
    hhaCategory:          HhaCategory | null;
    iconFilename:         string;
    critterpediaFilename: string;
    furnitureFilename:    string;
    internalId:           number;
    uniqueEntryId:        string;
    translations:         Translations;
    hemipsheres:          Hemipsheres;
    colors:               Color[];
    shadow?:              Shadow;
    movementSpeed?:       MovementSpeed;
    lightingType?:        LightingType | null;
    versionAdded?:        Version;
    versionUnlocked?:     Version;
    catchDifficulty?:     CatchDifficulty;
    vision?:              Vision;
}

export enum CatchDifficulty {
    Easy = "Easy",
    Hard = "Hard",
    Medium = "Medium",
    VeryEasy = "Very Easy",
    VeryHard = "Very Hard",
}

export enum Color {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Gray = "Gray",
    Green = "Green",
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

export enum HhaCategory {
    Pet = "Pet",
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
    Long = "Long",
    Medium = "Medium",
    Small = "Small",
    XLarge = "X-Large",
    XLargeWFin = "X-Large w/Fin",
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
    id:                 number | string;
    version?:           Version;
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
    variantId?:         number;
    clothName?:         string;
}

export enum TranslationsSourceSheet {
    Bugs = "Bugs",
    Fish = "Fish",
    SeaCreatures = "Sea Creatures",
    TopsVariants = "Tops Variants",
}

export enum Version {
    The100 = "1.0.0",
    The130 = "1.3.0",
}

export enum Vision {
    Medium = "Medium",
    Narrow = "Narrow",
    VeryNarrow = "Very Narrow",
    VeryWide = "Very Wide",
    Wide = "Wide",
}

export enum Weather {
    AnyExceptRain = "Any except rain",
    AnyWeather = "Any weather",
    RainOnly = "Rain only",
}
