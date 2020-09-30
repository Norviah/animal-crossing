export interface Npc {
    sourceSheet:   SourceSheet;
    name:          string;
    iconImage:     null | string;
    photoImage:    null | string;
    gender:        Gender;
    genderAsia:    Gender;
    versionAdded:  null | string;
    npcId:         string;
    internalId:    number;
    birthday:      string;
    nameColor:     string;
    bubbleColor:   string;
    iconFilename:  null | string;
    photoFilename: null | string;
    uniqueEntryId: string;
    translations:  Translations;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export enum SourceSheet {
    SpecialNPCS = "Special NPCs",
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
    The130 = "1.3.0",
}
