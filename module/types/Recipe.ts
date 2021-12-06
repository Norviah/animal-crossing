export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    image:                 string;
    imageSh:               null | string;
    buy:                   number;
    sell:                  number | null;
    exchangePrice:         number | null;
    exchangeCurrency:      ExchangeCurrency | null;
    source:                string[];
    sourceNotes:           string[] | null;
    seasonEvent:           null | string;
    seasonEventExclusive:  boolean | null;
    versionAdded:          VersionAdded;
    unlocked:              boolean;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             null | string;
    diyIconFilename:       string;
    diyIconFilenameSh:     null | string;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          Translations;
    materials:             { [key: string]: number };
    materialsTranslations: { [key: string]: Translations | null };
}

export enum Category {
    CeilingDecor = "Ceiling Decor",
    Equipment = "Equipment",
    Floors = "Floors",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Savory = "Savory",
    Sweet = "Sweet",
    Tools = "Tools",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}

export enum ExchangeCurrency {
    NookMiles = "Nook Miles",
}

export interface Translations {
    sourceSheet: TranslationsSourceSheet;
    id:          number;
    eUde:        string;
    eUen:        string;
    eUit:        string;
    eUnl:        string;
    eUru:        string;
    eUfr:        string;
    eUes:        string;
    uSen:        string;
    uSfr:        string;
    uSes:        string;
    jPja:        string;
    kRko:        string;
    tWzh:        string;
    cNzh:        string;
    plural:      boolean;
}

export enum TranslationsSourceSheet {
    AccessoriesVariants = "Accessories Variants",
    BagsVariants = "Bags Variants",
    BottomsVariants = "Bottoms Variants",
    CapsVariants = "Caps Variants",
    Dishes = "Dishes",
    DoorDeco = "Door Deco",
    DressUpVariants = "Dress-Up Variants",
    Etc = "Etc",
    EventItems = "Event Items",
    Fencing = "Fencing",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    HelmetsVariants = "Helmets Variants",
    Plants = "Plants",
    Rugs = "Rugs",
    Shells = "Shells",
    ShoesVariants = "Shoes Variants",
    Tools = "Tools",
    TopsVariants = "Tops Variants",
    Umbrellas = "Umbrellas",
    Wallpaper = "Wallpaper",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export enum VersionAdded {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The1110 = "1.11.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
    The170 = "1.7.0",
    The180 = "1.8.0",
    The200 = "2.0.0",
}
