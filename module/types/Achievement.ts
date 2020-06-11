export interface Achievement {
    sourceSheet:            SourceSheet;
    name:                   string;
    achievementDescription: string;
    achievementCriteria:    string;
    num:                    number;
    internalId:             number;
    internalName:           string;
    internalCategory:       string;
    numOfTiers:             number;
    sequential:             boolean;
    versionAdded:           VersionAdded;
    uniqueEntryId:          string;
    translations:           null;
    tiers:                  { [key: string]: Tier };
}

export enum SourceSheet {
    Achievements = "Achievements",
}

export interface Tier {
    required:  number;
    reward:    number;
    nouns:     string;
    modifiers: string;
}

export enum VersionAdded {
    The100 = "1.0.0",
    The120 = "1.2.0",
}
