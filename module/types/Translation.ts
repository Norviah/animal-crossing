export interface Translation {
    sourceSheet:        SourceSheet;
    id:                 number | string;
    version?:           Version;
    english:            number | null | string;
    englishEurope:      number | null | string;
    german:             number | null | string;
    spanish:            number | null | string;
    spanishUs:          number | null | string;
    french:             number | null | string;
    frenchUs:           number | null | string;
    italian:            number | null | string;
    dutch:              number | null | string;
    chinese:            null | string;
    chineseTraditional: null | string;
    japanese:           null | string;
    korean:             null | string;
    russian:            number | null | string;
    plural:             boolean;
    internalIds:        Array<number | string>;
    variantId?:         number | string;
    clothName?:         string;
    furnitureName?:     string;
}

export enum SourceSheet {
    Accessories = "Accessories",
    AccessoriesVariants = "Accessories Variants",
    Art = "Art",
    Bags = "Bags",
    BagsVariants = "Bags Variants",
    Bottoms = "Bottoms",
    BottomsVariants = "Bottoms Variants",
    BridgeInclines = "Bridge & Inclines",
    Bugs = "Bugs",
    BugsModels = "Bugs Models",
    Caps = "Caps",
    CapsVariants = "Caps Variants",
    Constellations = "Constellations",
    Craft = "Craft",
    Dinosaurs = "Dinosaurs",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    DressesVariants = "Dresses Variants",
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
    HHASet = "HHA Set",
    HHASituation = "HHA Situation",
    HHAThemes = "HHA Themes",
    HouseDoor = "House Door",
    HouseMailbox = "House Mailbox",
    HouseRoof = "House Roof",
    HouseWall = "House Wall",
    KKAlbums = "K.K. Albums",
    MarineSuit = "Marine Suit",
    MarineSuitVariants = "Marine Suit Variants",
    Masks = "Masks",
    MasksVariants = "Masks Variants",
    Pictures = "Pictures",
    Plants = "Plants",
    Posters = "Posters",
    Reactions = "Reactions",
    Rugs = "Rugs",
    SeaCreatures = "Sea Creatures",
    Shells = "Shells",
    Shoes = "Shoes",
    ShoesVariants = "Shoes Variants",
    Socks = "Socks",
    SocksVariants = "Socks Variants",
    SpecialNPCS = "Special NPCs",
    Tools = "Tools",
    Tops = "Tops",
    TopsVariants = "Tops Variants",
    Umbrella = "Umbrella",
    Villagers = "Villagers",
    VillagersCatchPhrase = "Villagers Catch Phrase",
    Walls = "Walls",
}

export enum Version {
    Empty = "",
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
}
