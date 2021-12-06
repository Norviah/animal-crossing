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
    nameColor:     null | string;
    bubbleColor:   null | string;
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
