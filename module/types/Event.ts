export interface Event {
    sourceSheet:             SourceSheet;
    event:                   string;
    northernHemisphereDates: string;
    southernHemisphereDates: string;
    times:                   Times;
    translations:            Translations | null;
}

export enum SourceSheet {
    Events = "Events",
    HHAThemes = "HHA Themes",
}

export enum Times {
    AllDay = "All day",
    The11Pm2Am = "11 PM – 2 AM",
    The9Am6Pm = "9 AM – 6 PM",
}

export interface Translations {
    sourceSheet:        SourceSheet;
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
    internalIds:        string[];
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
}
