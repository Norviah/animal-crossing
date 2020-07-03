export interface ID {
    name:        string;
    uniqueID:    string;
    id:          number | null | string;
    filename:    null | string;
    sourceSheet: SourceSheet;
    variation?:  number | string;
}

export enum SourceSheet {
    Accessories = "Accessories",
    Achievements = "Achievements",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    ClothingOther = "Clothing Other",
    Construction = "Construction",
    DressUp = "Dress-Up",
    Fencing = "Fencing",
    Fish = "Fish",
    Floors = "Floors",
    Fossils = "Fossils",
    Headwear = "Headwear",
    Housewares = "Housewares",
    Insects = "Insects",
    Miscellaneous = "Miscellaneous",
    Music = "Music",
    Other = "Other",
    Photos = "Photos",
    Posters = "Posters",
    Reactions = "Reactions",
    Recipes = "Recipes",
    Rugs = "Rugs",
    SeaCreatures = "Sea Creatures",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    Villagers = "Villagers",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}
