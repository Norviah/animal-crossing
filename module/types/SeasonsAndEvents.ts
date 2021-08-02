export interface SeasonsAndEvents {
    sourceSheet:             SeasonsAndEventSourceSheet;
    name:                    string;
    type:                    Type;
    versionAdded:            string;
    versionLastUpdated:      VersionLastUpdated;
    year:                    YearEnum | number | null;
    datesNorthernHemisphere: null | string;
    datesSouthernHemisphere: null | string;
    displayName:             string;
    eventNotes:              null | string;
    internalLabel:           string[] | null;
    unlockDate:              string;
    unlockMethod:            boolean | UnlockMethodEnum;
    uniqueEntryId:           string;
    translations:            Translations | null;
}

export enum SeasonsAndEventSourceSheet {
    SeasonsAndEvents = "Seasons and Events",
}

export interface Translations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number | string;
    version:            string;
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

export enum VersionLastUpdated {
    The100 = "1.0.0",
    The1100 = "1.10.0",
    The1110 = "1.11.0",
    The160 = "1.6.0",
    The170 = "1.7.0",
    The180 = "1.8.0",
    The190 = "1.9.0",
}

export enum YearEnum {
    Any = "Any",
}
