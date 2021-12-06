export interface Construction {
    sourceSheet:   SourceSheet;
    name:          null | string;
    image:         string;
    buy:           number | null;
    category:      Category | null;
    source:        Source[] | null;
    filename:      string;
    versionAdded:  VersionAdded;
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

export enum SourceSheet {
    Construction = "Construction",
    HouseDoors = "House Doors",
    HouseMailboxes = "House Mailboxes",
    HouseRoofs = "House Roofs",
    HouseWalls = "House Walls",
}

export interface Translations {
    sourceSheet: SourceSheet;
    id:          number | string;
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
    The200 = "2.0.0",
}
