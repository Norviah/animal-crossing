export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    buy:                   number;
    sell:                  number;
    milesPrice:            number | null;
    sourceNotes:           null | string;
    versionAdded:          Version;
    versionUnlocked:       VersionUnlocked;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColor | null;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          Translations;
    materials:             { [key: string]: number };
    sources:               string[];
}

export enum CardColor {
    Beige = "beige",
    Blue = "blue",
    Brick = "brick",
    Brown = "brown",
    DarkGray = "dark gray",
    Gold = "gold",
    Green = "green",
    LightGray = "light gray",
    Orange = "orange",
    Pink = "pink",
    Red = "red",
    Silver = "silver",
    White = "white",
    Yellow = "yellow",
}

export enum Category {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    DressUp = "Dress-Up",
    Fencing = "Fencing",
    Floors = "Floors",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
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
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Caps = "Caps",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    Fence = "Fence",
    Floors = "Floors",
    Furniture = "Furniture",
    Masks = "Masks",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Tools = "Tools",
    Tops = "Tops",
    Umbrella = "Umbrella",
    Walls = "Walls",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
}

export enum VersionUnlocked {
    The100 = "1.0.0",
    The110A = "1.1.0a",
    The120 = "1.2.0",
    The121C = "1.2.1c",
}
