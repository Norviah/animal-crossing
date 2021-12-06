export interface Translation {
    sourceSheet: SourceSheet;
    id:          number | string;
    eUde:        null | string;
    eUen:        null | string;
    eUit:        null | string;
    eUnl:        null | string;
    eUru:        null | string;
    eUfr:        null | string;
    eUes:        null | string;
    uSen:        null | string;
    uSfr:        null | string;
    uSes:        null | string;
    jPja:        null | string;
    kRko:        null | string;
    tWzh:        null | string;
    cNzh:        null | string;
    plural:      boolean;
}

export enum SourceSheet {
    Accessories = "Accessories",
    AccessoriesVariants = "Accessories Variants",
    Art = "Art",
    Bags = "Bags",
    BagsVariants = "Bags Variants",
    Bottoms = "Bottoms",
    BottomsVariants = "Bottoms Variants",
    BugModels = "Bug Models",
    Bugs = "Bugs",
    Caps = "Caps",
    CapsVariants = "Caps Variants",
    Construction = "Construction",
    CraftingItems = "Crafting Items",
    Dishes = "Dishes",
    DoorDeco = "Door Deco",
    DressUp = "Dress-Up",
    DressUpVariants = "Dress-Up Variants",
    Etc = "Etc",
    EventItems = "Event Items",
    EventNames = "Event Names",
    FashionThemes = "Fashion Themes",
    Fencing = "Fencing",
    Fish = "Fish",
    FishModels = "Fish Models",
    Floors = "Floors",
    FossilGroups = "Fossil Groups",
    Fossils = "Fossils",
    Furniture = "Furniture",
    Gyroids = "Gyroids",
    HHASets = "HHA Sets",
    HHASituations = "HHA Situations",
    HHAThemes = "HHA Themes",
    Handbags = "Handbags",
    HandbagsVariants = "Handbags Variants",
    HarvSIslandItems = "Harv's Island Items",
    Helmets = "Helmets",
    HelmetsVariants = "Helmets Variants",
    HouseDoors = "House Doors",
    HouseMailboxes = "House Mailboxes",
    HouseRoofs = "House Roofs",
    HouseWalls = "House Walls",
    ItemPatternNames = "Item Pattern Names",
    ItemPatternTypes = "Item Pattern Types",
    ItemVariantNames = "Item Variant Names",
    ItemVariantTypes = "Item Variant Types",
    Money = "Money",
    Music = "Music",
    Photos = "Photos",
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
    Turnips = "Turnips",
    Umbrellas = "Umbrellas",
    VillagerCatchphrases = "Villager Catchphrases",
    Villagers = "Villagers",
    Wallpaper = "Wallpaper",
    Wetsuits = "Wetsuits",
    WetsuitsVariants = "Wetsuits Variants",
}
