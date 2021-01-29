export interface SeasonsAndEvents {
    sourceSheet:             SeasonsAndEventSourceSheet;
    name:                    string;
    type:                    Type;
    versionAdded:            Version;
    availability:            Availability;
    northernHemisphereDates: string[] | null;
    southernHemisphereDates: string[] | null;
    "2020Dates":             string[] | null;
    "2021Dates":             string[] | null;
    displayName:             string;
    internalLabel:           string[] | null;
    unlockDate:              null | string;
    unlockMethod:            boolean | UnlockMethodEnum;
    uniqueEntryId:           string;
    translations:            Translations | null;
}

export enum Availability {
    EveryYear = "Every year",
    SpecificYears = "Specific years",
    SpecificYearsNHOnly = "Specific years (NH only)",
    SpecificYearsSHOnly = "Specific years (SH only)",
}

export enum SeasonsAndEventSourceSheet {
    SeasonsAndEvents = "Seasons and Events",
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
    Constellations = "Constellations",
    Craft = "Craft",
    Events = "Events",
    HHAThemes = "HHA Themes",
    Shells = "Shells",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
    The170 = "1.7.0",
}

export enum Type {
    BasegameEvent = "Basegame event",
    CraftingSeason = "Crafting season",
    NookShoppingEvent = "Nook Shopping event",
    ShoppingSeason = "Shopping season",
    SpecialEvent = "Special event",
    ZodiacSeason = "Zodiac season",
}

export enum UnlockMethodEnum {
    BCATA = "BCAT (a)",
    BCATB = "BCAT (b)",
    BCATC = "BCAT (c)",
    NTP = "NTP",
}
