export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    image:                 string;
    buy:                   number;
    sell:                  number | null;
    exchangePrice:         number | null;
    exchangeCurrency:      ExchangeCurrency | null;
    source:                string[];
    sourceNotes:           string[] | null;
    versionAdded:          Version;
    unlocked:              boolean;
    unlockNotes:           Array<Date | UnlockNoteEnum> | null;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColorEnum | number | null;
    diyIconFilename:       string;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          Translations;
    materials:             { [key: string]: number };
    materialsTranslations: MaterialsTranslations;
}

export enum CardColorEnum {
    Beige = "beige",
    Blue = "blue",
    Brick = "brick",
    Brown = "brown",
    DarkGray = "dark gray",
    Gold = "gold",
    Green = "green",
    LightGray = "light gray",
    Orange = "orange",
    Pink = "pink",
    Red = "red",
    Silver = "silver",
    White = "white",
    Yellow = "yellow",
}

export enum Category {
    Equipment = "Equipment",
    Floors = "Floors",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Tools = "Tools",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}

export enum ExchangeCurrency {
    NookMiles = "Nook Miles",
}

export interface MaterialsTranslations {
    "star fragment"?:         Translations;
    "Aquarius fragment"?:     Translations;
    "gold nugget"?:           Translations;
    stone?:                   Translations;
    "Aries fragment"?:        Translations;
    "earth egg"?:             Translations;
    "stone egg"?:             Translations;
    "leaf egg"?:              Translations;
    "wood egg"?:              Translations;
    "sky egg"?:               Translations;
    "water egg"?:             Translations;
    "wobbling Zipper toy"?:   Translations;
    "Cancer fragment"?:       Translations;
    "Capricorn fragment"?:    Translations;
    wood?:                    Translations;
    hardwood?:                Translations;
    softwood?:                Translations;
    "iron nugget"?:           Translations;
    "mini DIY workbench"?:    Translations;
    "Gemini fragment"?:       Translations;
    "red ornament"?:          Translations;
    "blue ornament"?:         Translations;
    "gold ornament"?:         Translations;
    clay?:                    Apple;
    "Leo fragment"?:          Translations;
    "Libra fragment"?:        Translations;
    "Pisces fragment"?:       Translations;
    "Sagittarius fragment"?:  Translations;
    "Scorpius fragment"?:     Translations;
    "Taurus fragment"?:       Translations;
    "Virgo fragment"?:        Translations;
    acorn?:                   Translations;
    apple?:                   Apple;
    "maple leaf"?:            Translations;
    "clump of weeds"?:        Translations;
    "flimsy axe"?:            Translations;
    "bamboo piece"?:          Translations;
    "young spring bamboo"?:   Translations;
    "bamboo shoot"?:          Translations;
    "wasp nest"?:             Translations;
    "cherry-blossom petal"?:  Translations;
    "blue roses"?:            Translations;
    campfire?:                Translations;
    "cherry-blossom bonsai"?: Translations;
    "pine bonsai tree"?:      Translations;
    "flimsy shovel"?:         Translations;
    "log stakes"?:            Translations;
    "tree branch"?:           Translations;
    "cardboard box"?:         Translations;
    cherry?:                  Apple;
    "black cosmos"?:          Translations;
    "purple mums"?:           Translations;
    "pink mums"?:             Translations;
    "purple roses"?:          Translations;
    "black roses"?:           Translations;
    "purple tulips"?:         Translations;
    "pink tulips"?:           Translations;
    "orange tulips"?:         Translations;
    "purple windflowers"?:    Translations;
    book?:                    Translations;
    coconut?:                 Translations;
    "blue hyacinths"?:        Translations;
    "pink hyacinths"?:        Translations;
    "orange hyacinths"?:      Translations;
    "orange pansies"?:        Translations;
    "blue pansies"?:          Translations;
    "purple pansies"?:        Translations;
    "blue windflowers"?:      Translations;
    "pink windflowers"?:      Translations;
    "white windflowers"?:     Translations;
    "red cosmos"?:            Translations;
    "yellow cosmos"?:         Translations;
    "white cosmos"?:          Translations;
    "pink cosmos"?:           Translations;
    "large star fragment"?:   Translations;
    "pink lilies"?:           Translations;
    "orange lilies"?:         Translations;
    "white lilies"?:          Translations;
    "pink roses"?:            Translations;
    "orange roses"?:          Translations;
    "black lilies"?:          Translations;
    "black tulips"?:          Translations;
    "scattered papers"?:      Translations;
    "yellow lilies"?:         Translations;
    "red mums"?:              Translations;
    "yellow roses"?:          Translations;
    "manila clam"?:           Translations;
    "flimsy fishing rod"?:    Translations;
    "red roses"?:             Translations;
    "rare mushroom"?:         Translations;
    "round mushroom"?:        Translations;
    "skinny mushroom"?:       Translations;
    "flat mushroom"?:         Translations;
    "elegant mushroom"?:      Translations;
    fossil?:                  Translations;
    "drinking fountain"?:     Translations;
    "large snowflake"?:       Translations;
    snowflake?:               Translations;
    pear?:                    Translations;
    orange?:                  Translations;
    peach?:                   Translations;
    "empty can"?:             Translations;
    boot?:                    Translations;
    "old tire"?:              Translations;
    "white hyacinths"?:       Translations;
    "Papa bear"?:             Translations;
    "Mama bear"?:             Translations;
    "Baby bear"?:             Translations;
    "gold roses"?:            Translations;
    "screen wall"?:           Translations;
    axe?:                     Translations;
    net?:                     Translations;
    "fishing rod"?:           Translations;
    shovel?:                  Translations;
    slingshot?:               Translations;
    "watering can"?:          Translations;
    "red hyacinths"?:         Translations;
    "yellow hyacinths"?:      Translations;
    "purple hyacinths"?:      Translations;
    "ironwood dresser"?:      Translations;
    "cutting board"?:         Translations;
    "pine cone"?:             Translations;
    "red lilies"?:            Translations;
    "log bench"?:             Translations;
    "log chair"?:             Translations;
    "orange cosmos"?:         Translations;
    "lucky cat"?:             Translations;
    magazine?:                Translations;
    pearl?:                   Translations;
    "giant clam"?:            Translations;
    "sand dollar"?:           Translations;
    coral?:                   Translations;
    conch?:                   Translations;
    "sea snail"?:             Translations;
    cowrie?:                  Translations;
    bells?:                   null;
    "yellow mums"?:           Translations;
    "white mums"?:            Translations;
    "log stool"?:             Translations;
    "green mums"?:            Translations;
    "flimsy net"?:            Translations;
    "oil barrel"?:            Translations;
    "red pansies"?:           Translations;
    "yellow pansies"?:        Translations;
    "white pansies"?:         Translations;
    "zen cushion"?:           Translations;
    rocket?:                  Apple;
    "gold armor"?:            Translations;
    "rusted part"?:           Translations;
    "white roses"?:           Translations;
    "venus comb"?:            Translations;
    "document stack"?:        Translations;
    "summer shell"?:          Translations;
    "orange pumpkin"?:        Translations;
    candy?:                   Translations;
    "spooky lantern"?:        Translations;
    "sandy-beach flooring"?:  Translations;
    "upright piano"?:         Translations;
    "painting set"?:          Translations;
    "red tulips"?:            Translations;
    "yellow tulips"?:         Translations;
    "white tulips"?:          Translations;
    "flimsy watering can"?:   Translations;
    "wedding flower stand"?:  Translations;
    "red windflowers"?:       Translations;
    "orange windflowers"?:    Translations;
    "wooden-block toy"?:      Translations;
}

export interface Translations {
    sourceSheet:        TranslationsSourceSheet;
    id:                 number;
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
    russian:            string;
    plural:             boolean;
    variantId?:         number;
    clothName?:         ClothName;
    clothGroup?:        number;
    furnitureName?:     FurnitureName;
}

export enum ClothName {
    CareerJacket = "career jacket",
    GinghamPicnicShirt = "gingham picnic shirt",
    OpenCollarShirt = "open-collar shirt",
}

export enum FurnitureName {
    DigitalScale = "digital scale",
    ShellSpeaker = "shell speaker",
}

export enum TranslationsSourceSheet {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Caps = "Caps",
    Craft = "Craft",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    EventItems = "Event Items",
    Fence = "Fence",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    FurniturePatterns = "Furniture Patterns",
    FurnitureVariants = "Furniture Variants",
    HHASet = "HHA Set",
    Masks = "Masks",
    Plants = "Plants",
    Rugs = "Rugs",
    Shells = "Shells",
    Shoes = "Shoes",
    Tools = "Tools",
    Tops = "Tops",
    TopsVariants = "Tops Variants",
    Umbrella = "Umbrella",
    Walls = "Walls",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
}

export interface Apple {
    sourceSheet:        AppleSourceSheet;
    id:                 ID;
    version:            Version;
    english:            Dutch;
    englishEurope:      Dutch;
    german:             German;
    spanish:            Spanish;
    spanishUs:          Spanish;
    french:             French;
    frenchUs:           French;
    italian:            Italian;
    dutch:              Dutch;
    chinese:            Chinese;
    chineseTraditional: Chinese;
    japanese:           Japanese;
    korean:             Korean;
    russian:            Russian;
    plural:             boolean;
}

export enum Chinese {
    子墨 = "子墨",
    花娜 = "花娜",
    苹果 = "苹果",
    蘋果 = "蘋果",
    阿四 = "阿四",
}

export enum Dutch {
    Apple = "Apple",
    Cherry = "Cherry",
    Clay = "Clay",
    Rocket = "Rocket",
}

export enum French {
    Anna = "Anna",
    Esther = "Esther",
    Gertrude = "Gertrude",
    Guido = "Guido",
}

export enum German {
    Bella = "Bella",
    Dietmar = "Dietmar",
    Jessi = "Jessi",
    Katrin = "Katrin",
}

export enum ID {
    Dog17 = "dog17",
    Gor09 = "gor09",
    Ham01 = "ham01",
    Ham05 = "ham05",
}

export enum Italian {
    Amarena = "Amarena",
    Carmelo = "Carmelo",
    Cicci = "Cicci",
    Kinga = "Kinga",
}

export enum Japanese {
    The４ごう = "４ごう",
    どぐろう = "どぐろう",
    アップル = "アップル",
    ハンナ = "ハンナ",
}

export enum Korean {
    The4호 = "4호",
    애플 = "애플",
    한나 = "한나",
    햄둥 = "햄둥",
}

export enum Russian {
    Клэй = "Клэй",
    Рокет = "Рокет",
    Черри = "Черри",
    Эпл = "Эпл",
}

export enum AppleSourceSheet {
    Villagers = "Villagers",
}

export enum Spanish {
    Boliche = "Boliche",
    Gloria = "Gloria",
    Luna = "Luna",
    Rosi = "Rosi",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export enum UnlockNoteEnum {
    Bcat = "BCAT",
    The110A = "1.1.0a",
    The121C = "1.2.1c",
}
