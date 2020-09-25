export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    image:                 string;
    buy:                   number;
    sell:                  number | null;
    exchangePrice:         number | null;
    exchangeCurrency:      ExchangeCurrency | null;
    source:                string[];
    sourceNotes:           null | string;
    versionAdded:          Version;
    unlocked:              boolean;
    unlockNotes:           Array<Date | UnlockNoteEnum> | null;
    versionUnlocked:       Version;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColor | null;
    diyIconFilename:       string;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          Translations;
    materials:             { [key: string]: number };
    materialsTranslations: MaterialsTranslations;
}

export enum CardColor {
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
    "star fragment"?:         AquariusFragment;
    "Aquarius fragment"?:     AquariusFragment;
    "gold nugget"?:           AquariusFragment;
    stone?:                   GoldArmor;
    "Aries fragment"?:        AquariusFragment;
    "earth egg"?:             AquariusFragment;
    "stone egg"?:             AquariusFragment;
    "leaf egg"?:              AquariusFragment;
    "wood egg"?:              AquariusFragment;
    "sky egg"?:               AquariusFragment;
    "water egg"?:             AquariusFragment;
    "wobbling Zipper toy"?:   AquariusFragment;
    "Cancer fragment"?:       AquariusFragment;
    "Capricorn fragment"?:    AquariusFragment;
    wood?:                    AquariusFragment;
    hardwood?:                AquariusFragment;
    softwood?:                AquariusFragment;
    "iron nugget"?:           AquariusFragment;
    "mini DIY workbench"?:    AquariusFragment;
    "Gemini fragment"?:       AquariusFragment;
    "red ornament"?:          AquariusFragment;
    "blue ornament"?:         AquariusFragment;
    "gold ornament"?:         AquariusFragment;
    clay?:                    AquariusFragment;
    "Leo fragment"?:          AquariusFragment;
    "Libra fragment"?:        AquariusFragment;
    "Pisces fragment"?:       AquariusFragment;
    "Sagittarius fragment"?:  AquariusFragment;
    "Scorpius fragment"?:     AquariusFragment;
    "Taurus fragment"?:       AquariusFragment;
    "Virgo fragment"?:        AquariusFragment;
    acorn?:                   AquariusFragment;
    apple?:                   AquariusFragment;
    "maple leaf"?:            AquariusFragment;
    "clump of weeds"?:        AquariusFragment;
    "flimsy axe"?:            AquariusFragment;
    "bamboo piece"?:          AquariusFragment;
    "young spring bamboo"?:   AquariusFragment;
    "bamboo shoot"?:          AquariusFragment;
    "wasp nest"?:             AquariusFragment;
    "cherry-blossom petal"?:  AquariusFragment;
    "blue roses"?:            AquariusFragment;
    campfire?:                AquariusFragment;
    "cherry-blossom bonsai"?: AquariusFragment;
    "pine bonsai tree"?:      AquariusFragment;
    "flimsy shovel"?:         AquariusFragment;
    "log stakes"?:            AquariusFragment;
    "tree branch"?:           AquariusFragment;
    "cardboard box"?:         AquariusFragment;
    cherry?:                  AquariusFragment;
    "black cosmos"?:          AquariusFragment;
    "purple mums"?:           AquariusFragment;
    "pink mums"?:             AquariusFragment;
    "purple roses"?:          AquariusFragment;
    "black roses"?:           AquariusFragment;
    "purple tulips"?:         AquariusFragment;
    "pink tulips"?:           AquariusFragment;
    "orange tulips"?:         AquariusFragment;
    "purple windflowers"?:    AquariusFragment;
    book?:                    AquariusFragment;
    coconut?:                 AquariusFragment;
    "blue hyacinths"?:        AquariusFragment;
    "pink hyacinths"?:        AquariusFragment;
    "orange hyacinths"?:      AquariusFragment;
    "orange pansies"?:        AquariusFragment;
    "blue pansies"?:          AquariusFragment;
    "purple pansies"?:        AquariusFragment;
    "blue windflowers"?:      AquariusFragment;
    "pink windflowers"?:      AquariusFragment;
    "white windflowers"?:     AquariusFragment;
    "red cosmos"?:            AquariusFragment;
    "yellow cosmos"?:         AquariusFragment;
    "white cosmos"?:          AquariusFragment;
    "pink cosmos"?:           AquariusFragment;
    "large star fragment"?:   AquariusFragment;
    "pink lilies"?:           AquariusFragment;
    "orange lilies"?:         AquariusFragment;
    "white lilies"?:          AquariusFragment;
    "pink roses"?:            AquariusFragment;
    "orange roses"?:          AquariusFragment;
    "black lilies"?:          AquariusFragment;
    "black tulips"?:          AquariusFragment;
    "scattered papers"?:      AquariusFragment;
    "yellow lilies"?:         AquariusFragment;
    "red mums"?:              AquariusFragment;
    "yellow roses"?:          AquariusFragment;
    "manila clam"?:           AquariusFragment;
    "flimsy fishing rod"?:    AquariusFragment;
    "red roses"?:             AquariusFragment;
    "rare mushroom"?:         AquariusFragment;
    "round mushroom"?:        AquariusFragment;
    "skinny mushroom"?:       AquariusFragment;
    "flat mushroom"?:         AquariusFragment;
    "elegant mushroom"?:      AquariusFragment;
    fossil?:                  AquariusFragment;
    "drinking fountain"?:     AquariusFragment;
    "large snowflake"?:       AquariusFragment;
    snowflake?:               AquariusFragment;
    pear?:                    AquariusFragment;
    orange?:                  AquariusFragment;
    peach?:                   Peach;
    "empty can"?:             AquariusFragment;
    boot?:                    AquariusFragment;
    "old tire"?:              AquariusFragment;
    "white hyacinths"?:       AquariusFragment;
    "Papa bear"?:             AquariusFragment;
    "Mama bear"?:             AquariusFragment;
    "Baby bear"?:             AquariusFragment;
    "gold roses"?:            AquariusFragment;
    "screen wall"?:           AquariusFragment;
    axe?:                     AquariusFragment;
    net?:                     AquariusFragment;
    "fishing rod"?:           AquariusFragment;
    shovel?:                  AquariusFragment;
    slingshot?:               AquariusFragment;
    "watering can"?:          AquariusFragment;
    "red hyacinths"?:         AquariusFragment;
    "yellow hyacinths"?:      AquariusFragment;
    "purple hyacinths"?:      AquariusFragment;
    "ironwood dresser"?:      AquariusFragment;
    "cutting board"?:         AquariusFragment;
    "pine cone"?:             AquariusFragment;
    "red lilies"?:            AquariusFragment;
    "log bench"?:             AquariusFragment;
    "log chair"?:             AquariusFragment;
    "orange cosmos"?:         AquariusFragment;
    "lucky cat"?:             AquariusFragment;
    magazine?:                AquariusFragment;
    pearl?:                   AquariusFragment;
    "giant clam"?:            AquariusFragment;
    "sand dollar"?:           AquariusFragment;
    coral?:                   AquariusFragment;
    conch?:                   AquariusFragment;
    "sea snail"?:             AquariusFragment;
    cowrie?:                  AquariusFragment;
    bells?:                   null;
    "yellow mums"?:           AquariusFragment;
    "white mums"?:            AquariusFragment;
    "log stool"?:             AquariusFragment;
    "green mums"?:            AquariusFragment;
    "flimsy net"?:            AquariusFragment;
    "oil barrel"?:            AquariusFragment;
    "red pansies"?:           AquariusFragment;
    "yellow pansies"?:        AquariusFragment;
    "white pansies"?:         AquariusFragment;
    "zen cushion"?:           AquariusFragment;
    rocket?:                  AquariusFragment;
    "gold armor"?:            GoldArmor;
    "rusted part"?:           AquariusFragment;
    "white roses"?:           AquariusFragment;
    "venus comb"?:            AquariusFragment;
    "document stack"?:        AquariusFragment;
    "summer shell"?:          AquariusFragment;
    "sandy-beach flooring"?:  AquariusFragment;
    "upright piano"?:         AquariusFragment;
    "painting set"?:          AquariusFragment;
    "red tulips"?:            AquariusFragment;
    "yellow tulips"?:         AquariusFragment;
    "white tulips"?:          AquariusFragment;
    "flimsy watering can"?:   AquariusFragment;
    "wedding flower stand"?:  AquariusFragment;
    "red windflowers"?:       AquariusFragment;
    "orange windflowers"?:    AquariusFragment;
    "wooden-block toy"?:      AquariusFragment;
}

export interface AquariusFragment {
    sourceSheet:        AquariusFragmentSourceSheet;
    id:                 string;
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
    internalIds:        number[];
}

export enum AquariusFragmentSourceSheet {
    Craft = "Craft",
    Etc = "ETC",
    EventItems = "Event Items",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    Plants = "Plants",
    Shells = "Shells",
    Tools = "Tools",
    Walls = "Walls",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The110A = "1.1.0a",
    The120 = "1.2.0",
    The121C = "1.2.1c",
    The130 = "1.3.0",
    The140 = "1.4.0",
}

export interface GoldArmor {
    sourceSheet:        GoldArmorSourceSheet;
    id:                 number;
    version:            Version;
    english:            GoldArmorEnglish;
    englishEurope:      GoldArmorEnglish;
    german:             GoldArmorGerman;
    spanish:            SpanishUsEnum;
    spanishUs:          SpanishUsEnum;
    french:             GoldArmorFrench;
    frenchUs:           GoldArmorFrench;
    italian:            GoldArmorItalian;
    dutch:              GoldArmorDutch;
    chinese:            GoldArmorChinese;
    chineseTraditional: ChineseTraditional;
    japanese:           GoldArmorJapanese;
    korean:             GoldArmorKorean;
    russian:            GoldArmorRussian;
    plural:             boolean;
    internalIds:        number[];
}

export enum GoldArmorChinese {
    石头 = "石头",
    金盔甲 = "金盔甲",
}

export enum ChineseTraditional {
    石頭 = "石頭",
    金盔甲 = "金盔甲",
}

export enum GoldArmorDutch {
    GoudenHarnas = "gouden harnas",
    StenenSet = "stenen set",
}

export enum GoldArmorEnglish {
    GoldArmor = "gold armor",
    Stone = "stone",
}

export enum GoldArmorFrench {
    ArmureEnOr = "armure en or",
    Pierre = "pierre",
}

export enum GoldArmorGerman {
    Goldrüstung = "Goldrüstung",
    Stein = "Stein",
}

export enum GoldArmorItalian {
    ArmaturaDorata = "armatura dorata",
    Pietra = "pietra",
}

export enum GoldArmorJapanese {
    いし = "いし",
    ゴールデンアーマー = "ゴールデンアーマー",
}

export enum GoldArmorKorean {
    골든아머 = "골든 아머",
    돌 = "돌",
}

export enum GoldArmorRussian {
    ЗолотыеДоспехи = "золотые доспехи",
    Камень = "Камень",
}

export enum GoldArmorSourceSheet {
    Dresses = "Dresses",
    HHASet = "HHA Set",
}

export enum SpanishUsEnum {
    ArmaduraDeOro = "armadura de oro",
    Piedra = "piedra",
}

export interface Peach {
    sourceSheet:        PeachSourceSheet;
    id:                 IDEnum;
    version:            Version;
    english:            PeachEnglish;
    englishEurope:      PeachEnglish;
    german:             PeachGerman;
    spanish:            PeachSpanish;
    spanishUs:          SpanishUs;
    french:             PeachFrench;
    frenchUs:           PeachFrench;
    italian:            PeachItalian;
    dutch:              PeachDutch;
    chinese:            ChineseTraditionalEnum;
    chineseTraditional: ChineseTraditionalEnum;
    japanese:           PeachJapanese;
    korean:             PeachKorean;
    russian:            PeachRussian;
    plural:             boolean;
    internalIds:        IDEnum[];
}

export enum ChineseTraditionalEnum {
    怦怦 = "怦怦",
}

export enum PeachDutch {
    Perzik = "perzik",
}

export enum PeachEnglish {
    Peach = "peach",
}

export enum PeachFrench {
    Prune = "prune",
}

export enum PeachGerman {
    Früchtchen = "früchtchen",
}

export enum IDEnum {
    Cbr00 = "cbr00",
}

export enum PeachItalian {
    Pepè = "pepè",
}

export enum PeachJapanese {
    キュン = "キュン",
}

export enum PeachKorean {
    두근 = "두근",
}

export enum PeachRussian {
    Персик = "персик",
}

export enum PeachSourceSheet {
    VillagersCatchPhrase = "Villagers Catch Phrase",
}

export enum PeachSpanish {
    Cielito = "cielito",
}

export enum SpanishUs {
    MelíMelá = "melí-melá",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
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
    internalIds:        number[];
}

export enum TranslationsSourceSheet {
    Accessories = "Accessories",
    Bags = "Bags",
    Bottoms = "Bottoms",
    Caps = "Caps",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    Fence = "Fence",
    Floors = "Floors",
    Furniture = "Furniture",
    Masks = "Masks",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Tools = "Tools",
    Tops = "Tops",
    Umbrella = "Umbrella",
    Walls = "Walls",
}

export enum UnlockNoteEnum {
    Bcat = "BCAT",
    The110A = "1.1.0a",
    The121C = "1.2.1c",
}
