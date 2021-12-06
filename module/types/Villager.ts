export interface Villager {
    sourceSheet:               SourceSheet;
    name:                      string;
    iconImage:                 string;
    photoImage:                string;
    houseImage:                null | string;
    species:                   string;
    gender:                    Gender;
    personality:               Personality;
    subtype:                   Subtype;
    hobby:                     Hobby;
    birthday:                  string;
    catchphrase:               string;
    favoriteSong:              string;
    favoriteSaying:            string;
    defaultClothing:           string;
    defaultUmbrella:           string;
    wallpaper:                 string;
    flooring:                  string;
    furnitureList:             number[];
    furnitureNameList:         string[];
    diyWorkbench:              string;
    kitchenEquipment:          number | string;
    versionAdded:              VersionAdded;
    nameColor:                 string;
    bubbleColor:               string;
    filename:                  string;
    uniqueEntryId:             string;
    catchphrases:              Catchphrases;
    translations:              Catchphrases;
    styles:                    Style[];
    colors:                    Color[];
    defaultClothingInternalId: number;
}

export interface Catchphrases {
    sourceSheet: SourceSheet;
    id:          string;
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

export enum SourceSheet {
    VillagerCatchphrases = "Villager Catchphrases",
    Villagers = "Villagers",
}

export enum Color {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow",
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export enum Hobby {
    Education = "Education",
    Fashion = "Fashion",
    Fitness = "Fitness",
    Music = "Music",
    Nature = "Nature",
    Play = "Play",
}

export enum Personality {
    BigSister = "Big Sister",
    Cranky = "Cranky",
    Jock = "Jock",
    Lazy = "Lazy",
    Normal = "Normal",
    Peppy = "Peppy",
    Smug = "Smug",
    Snooty = "Snooty",
}

export enum Style {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    Gorgeous = "Gorgeous",
    Simple = "Simple",
}

export enum Subtype {
    A = "A",
    B = "B",
}

export enum VersionAdded {
    The100 = "1.0.0",
    The190 = "1.9.0",
    The200 = "2.0.0",
}
