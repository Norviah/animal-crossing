export interface Achievement {
    sourceSheet:            SourceSheet;
    name:                   string;
    achievementDescription: string;
    achievementCriteria:    string;
    num:                    string;
    internalId:             string;
    internalName:           string;
    internalCategory:       string;
    numOfTiers:             string;
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
    required: string;
    reward:   string;
    nouns:    string[];
    modifier: string;
}

export enum VersionAdded {
    The100 = "1.0.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
}
