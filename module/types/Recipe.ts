export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    image:                 string;
    buy:                   number;
    sell:                  number | null;
    exchangePrice:         number | null;
    exchangeCurrency:      ExchangeCurrency | null;
    source:                string[];
    sourceNotes:           string[] | null;
    seasonEvent:           null | string;
    versionAdded:          Version;
    unlocked:              boolean;
    unlockNotes:           Array<Date | UnlockNoteEnum> | null;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColor | null;
    diyIconFilename:       string;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          Translations;
    materials:             { [key: string]: number };
    materialsTranslations: { [key: string]: Translations | null };
}

export enum CardColor {
    Beige = "beige",
    Blue = "blue",
    Brick = "brick",
    Brown = "brown",
    Cream = "cream",
    DarkGray = "dark gray",
    Gold = "gold",
    Green = "green",
    LightGray = "light gray",
    Orange = "orange",
    Pink = "pink",
    Purple = "purple",
    Red = "red",
    Silver = "silver",
    White = "white",
    Yellow = "yellow",
}

export enum Category {
    Equipment = "Equipment",
    Floors = "Floors",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Tools = "Tools",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}

export enum ExchangeCurrency {
    NookMiles = "Nook Miles",
}

export interface Translations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number;
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
}

export enum TranslationsSourceSheet {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Caps = "Caps",
    Craft = "Craft",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    EventItems = "Event Items",
    Fence = "Fence",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    Masks = "Masks",
    Plants = "Plants",
    Rugs = "Rugs",
    Shells = "Shells",
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
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export enum UnlockNoteEnum {
    Bcat = "BCAT",
    The110A = "1.1.0a",
    The121C = "1.2.1c",
    The160A = "1.6.0a",
}
