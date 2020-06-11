export interface Translation {
    sourceSheet:        SourceSheet;
    id:                 number | string;
    version?:           Version;
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
    russian?:           string;
    plural:             boolean;
    internalIds:        Array<number | string>;
    variantId?:         number;
    furnitureName?:     string;
}

export enum SourceSheet {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    BridgeInclines = "Bridge & Inclines",
    Bugs = "Bugs",
    BugsModels = "Bugs Models",
    Caps = "Caps",
    Constellations = "Constellations",
    Craft = "Craft",
    Dinosaurs = "Dinosaurs",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    EventItems = "Event Items",
    Events = "Events",
    FashionThemes = "Fashion Themes",
    Fence = "Fence",
    Fish = "Fish",
    FishModels = "Fish Models",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    FurniturePatterns = "Furniture Patterns",
    FurnitureVariants = "Furniture Variants",
    HHAThemes = "HHA Themes",
    HouseDoor = "House Door",
    HouseMailbox = "House Mailbox",
    HouseRoof = "House Roof",
    HouseWall = "House Wall",
    KKAlbums = "K.K. Albums",
    Masks = "Masks",
    Pictures = "Pictures",
    Plants = "Plants",
    Posters = "Posters",
    Reactions = "Reactions",
    Rugs = "Rugs",
    Shells = "Shells",
    Shoes = "Shoes",
    Socks = "Socks",
    SpecialNPCS = "Special NPCs",
    Tools = "Tools",
    Tops = "Tops",
    Umbrella = "Umbrella",
    Villagers = "Villagers",
    VillagersCatchPhrase = "Villagers Catch Phrase",
    Walls = "Walls",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
}
