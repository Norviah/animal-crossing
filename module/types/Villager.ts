export interface Villager {
    sourceSheet:       SourceSheet;
    name:              string;
    iconImage:         string;
    photoImage:        string;
    houseImage:        string;
    species:           string;
    gender:            Gender;
    personality:       Personality;
    subtype:           Subtype;
    hobby:             Hobby;
    birthday:          string;
    catchphrase:       string;
    favoriteSong:      string;
    favoriteSaying:    string;
    defaultClothing:   string;
    wallpaper:         string;
    flooring:          string;
    furnitureList:     string[];
    furnitureNameList: string[];
    filename:          string;
    uniqueEntryId:     string;
    catchphrases:      Catchphrases;
    translations:      Catchphrases;
    styles:            Style[];
    colors:            Color[];
    defaultClothingID: number;
}

export interface Catchphrases {
    sourceSheet:        SourceSheet;
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
    internalIds:        string[];
}

export enum SourceSheet {
    Villagers = "Villagers",
    VillagersCatchPhrase = "Villagers Catch Phrase",
}

export enum Version {
    The100 = "1.0.0",
}

export enum Color {
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
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
