export interface Translation {
    sourceSheet:        SourceSheet;
    id:                 number | string;
    version?:           Version;
    english:            number | string;
    englishEurope:      number | string;
    german:             number | string;
    spanish:            number | string;
    spanishUs:          number | string;
    french:             number | string;
    frenchUs:           number | string;
    italian:            number | string;
    dutch:              number | string;
    chinese:            string;
    chineseTraditional: string;
    japanese:           string;
    korean:             string;
    russian:            number | null | string;
    plural:             boolean;
    variantId?:         number;
    furnitureName?:     string;
    clothName?:         string;
    clothGroup?:        number;
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
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
    The170 = "1.7.0",
}
