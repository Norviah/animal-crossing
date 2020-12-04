export interface Reaction {
    sourceSheet:   SourceSheet;
    name:          string;
    image:         string;
    source:        string[];
    sourceNotes:   SourceNote[] | null;
    seasonEvent:   null | string;
    versionAdded:  Version;
    iconFilename:  string;
    uniqueEntryId: string;
    translations:  Translations;
}

export enum SourceNote {
    OnlyObtainableOnHalloween = "Only obtainable on Halloween",
    RequiresAHighLevelOfFriendship = "Requires a high level of friendship",
}

export enum SourceSheet {
    Reactions = "Reactions",
}

export interface Translations {
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
}

export enum Version {
    The100 = "1.0.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
}
