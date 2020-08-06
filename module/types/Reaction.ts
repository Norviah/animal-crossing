export interface Reaction {
    sourceSheet:   SourceSheet;
    name:          string;
    image:         string;
    source:        string[];
    sourceNotes:   null | string;
    internalId:    string;
    uniqueEntryId: string;
    translations:  Translations;
}

export enum SourceSheet {
    DressesVariants = "Dresses Variants",
    Reactions = "Reactions",
}

export interface Translations {
    sourceSheet:        SourceSheet;
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
    internalIds:        string[];
    variantId?:         number;
    clothName?:         string;
}

export enum Version {
    The100 = "1.0.0",
}
