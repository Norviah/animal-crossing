export interface Reaction {
    sourceSheet:   SourceSheet;
    name:          string;
    image:         string;
    source:        string[];
    sourceNotes:   null | string;
    iconFilename:  string;
    uniqueEntryId: string;
    translations:  Translations;
}

export enum SourceSheet {
    Reactions = "Reactions",
    TopsVariants = "Tops Variants",
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
    internalIds:        Array<null | string>;
    variantId?:         number;
    clothName?:         string;
}

export enum Version {
    The100 = "1.0.0",
}
