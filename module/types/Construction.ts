export interface Construction {
    sourceSheet:   ConstructionSourceSheet;
    name:          string;
    image:         string;
    buy:           number;
    category:      Category;
    source:        Source[];
    filename:      string;
    uniqueEntryId: string;
    translations:  Translations | null;
}

export enum Category {
    Bridge = "Bridge",
    Door = "Door",
    Incline = "Incline",
    Mailbox = "Mailbox",
    Roofing = "Roofing",
    Siding = "Siding",
}

export enum Source {
    InitialHouse = "Initial House",
    ResidentServicesUpgrade = "Resident Services Upgrade",
    Tent = "Tent",
    The3RDHouseUpgradeLeftRoom = "3rd House Upgrade (Left Room)",
    The4ThHouseUpgradeRightRoom = "4th House Upgrade (Right Room)",
    The5ThHouseUpgrade2NdFloor = "5th House Upgrade (2nd Floor)",
}

export enum ConstructionSourceSheet {
    Construction = "Construction",
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
    internalIds:        Array<number | string>;
}

export enum TranslationsSourceSheet {
    BridgeInclines = "Bridge & Inclines",
    HouseDoor = "House Door",
    HouseMailbox = "House Mailbox",
    HouseRoof = "House Roof",
    HouseWall = "House Wall",
}

export enum Version {
    The100 = "1.0.0",
}
