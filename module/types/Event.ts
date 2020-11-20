export interface Event {
    sourceSheet:              EventSourceSheet;
    event:                    string;
    northernHemisphereDates?: string;
    southernHemisphereDates?: string;
    times?:                   string;
    versionAdded:             string;
    translations:             Translations | null;
    availability?:            string;
    itemImage?:               string;
    itemName?:                string;
    price?:                   string;
    region?:                  string;
    description?:             string[];
}

export enum EventSourceSheet {
    Events = "Events",
    NookShoppingSeasonal = "Nook Shopping Seasonal",
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
}

export enum TranslationsSourceSheet {
    Events = "Events",
    HHAThemes = "HHA Themes",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The140 = "1.4.0",
    The160 = "1.6.0",
}
