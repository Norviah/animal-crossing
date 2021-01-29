export interface Reaction {
    sourceSheet:          SourceSheet;
    num:                  number;
    name:                 string;
    image:                string;
    source:               string[];
    sourceNotes:          string[] | null;
    seasonEvent:          null | string;
    seasonEventExclusive: boolean | null;
    versionAdded:         Version;
    iconFilename:         string;
    internalId:           number;
    uniqueEntryId:        string;
    translations:         Translations;
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
    The170 = "1.7.0",
}
