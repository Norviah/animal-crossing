export interface Achievement {
    sourceSheet:            SourceSheet;
    name:                   string;
    achievementDescription: string;
    achievementCriteria:    string;
    num:                    number;
    internalId:             number | string;
    internalName:           string;
    internalCategory:       string;
    numOfTiers:             number | string;
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
    required: number | string;
    reward:   number | string;
    nouns:    string[];
    modifier: string;
}

export enum VersionAdded {
    The100 = "1.0.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The200 = "2.0.0",
}
