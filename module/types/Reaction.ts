export interface Reaction {
    sourceSheet:          SourceSheet;
    num:                  number;
    name:                 string;
    image:                string;
    source:               string[];
    sourceNotes:          SourceNote[] | null;
    seasonEvent:          SeasonEvent | null;
    seasonEventExclusive: boolean | null;
    versionAdded:         VersionAdded;
    iconFilename:         string;
    internalId:           number;
    uniqueEntryId:        string;
    translations:         Translations;
}

export enum SeasonEvent {
    FestivaleReadyDaysFestivale = "Festivale (ready days); Festivale",
    Halloween = "Halloween",
    HappyHomeParadise = "Happy Home Paradise",
}

export enum SourceNote {
    ReceivedAfterDoingYour50ThGroupStretch = "Received after doing your 50th group stretch",
    RequiresAHighLevelOfFriendship = "Requires a high level of friendship",
}

export enum SourceSheet {
    Reactions = "Reactions",
}

export interface Translations {
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

export enum VersionAdded {
    The100 = "1.0.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
    The170 = "1.7.0",
    The200 = "2.0.0",
}
