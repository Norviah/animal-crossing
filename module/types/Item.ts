export interface Item {
    sourceSheet:           Category;
    name:                  string;
    diy?:                  boolean;
    size?:                 Size;
    sourceNotes?:          string[] | null;
    versionAdded?:         Version;
    catalog?:              Catalog | null;
    buy:                   number;
    sell?:                 number | null;
    translations:          FairyTale | null;
    source?:               string[];
    themesTranslations?:   ThemesTranslations;
    hhaBasePoints?:        number | null;
    villagerEquippable?:   boolean;
    seasonalAvailability?: SeasonalAvailability;
    type?:                 string;
    unlocked?:             boolean;
    variations?:           VariationElement[];
    styles?:               Style[];
    themes?:               Theme[];
    recipe:                Recipe | null;
    closetImage?:          string;
    storageImage?:         null | string;
    variation?:            null;
    exchangePrice?:        number | null;
    exchangeCurrency?:     ExchangeCurrency | null;
    mannequinPiece?:       boolean;
    sortOrder?:            number;
    unlockNotes?:          Array<Date | UnlockNoteEnum> | null;
    filename?:             string;
    clothGroupId?:         number;
    internalId?:           number;
    uniqueEntryId?:        string;
    colors?:               Color[];
    image?:                string;
    bodyTitle?:            null | string;
    pattern?:              null;
    patternTitle?:         null;
    bodyCustomize?:        boolean;
    patternCustomize?:     boolean;
    kitCost?:              number | null;
    surface?:              boolean;
    hhaCategory?:          HhaCategory | null;
    interact?:             boolean | InteractEnum;
    tag?:                  null | string;
    outdoor?:              boolean;
    speakerType?:          SpeakerType | null;
    lightingType?:         LightingType | null;
    variantId?:            VariantID | null;
    concepts?:             Concept[];
    set?:                  null | string;
    series?:               null | string;
    backColor?:            null | string;
    bodyColor?:            string;
    headColor?:            string;
    footColor?:            string;
    penColor1?:            string;
    penColor2?:            string;
    penColor3?:            string;
    penColor4?:            string;
    startDate?:            null | string;
    endDate?:              null | string;
    nhStartDate?:          null | string;
    nhEndDate?:            null | string;
    shStartDate?:          null | string;
    shEndDate?:            null | string;
    customize?:            boolean;
    framedImage?:          null | string;
    albumImage?:           null | string;
    inventoryImage?:       null | string;
    stackSize?:            number;
    inventoryFilename?:    null | string;
    storageFilename?:      null | string;
    seriesTranslations?:   SeriesTranslations;
    sizeCategory?:         SizeCategory;
    primaryShape?:         PrimaryShape;
    secondaryShape?:       SecondaryShape | null;
    vfx?:                  boolean;
    doorDeco?:             boolean;
    vfxType?:              VfxType | null;
    windowType?:           WindowType | null;
    windowColor?:          WindowColor | null;
    paneType?:             PaneType | null;
    curtainType?:          CurtainType | null;
    curtainColor?:         null | string;
    ceilingType?:          CeilingType;
    uses?:                 number;
    fossilGroup?:          string;
    description?:          string[];
    museum?:               Museum;
    highResTexture?:       null;
    genuine?:              boolean;
    category?:             Category;
    realArtworkTitle?:     string;
    artist?:               string;
}

export enum Catalog {
    ForSale = "For sale",
    NotForSale = "Not for sale",
}

export enum Category {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    ClothingOther = "Clothing Other",
    DressUp = "Dress-Up",
    Equipment = "Equipment",
    Fencing = "Fencing",
    Floors = "Floors",
    Fossils = "Fossils",
    Headwear = "Headwear",
    Housewares = "Housewares",
    MessageCards = "Message Cards",
    Miscellaneous = "Miscellaneous",
    Music = "Music",
    Other = "Other",
    Photos = "Photos",
    Posters = "Posters",
    Rugs = "Rugs",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
}

export enum CeilingType {
    Cloth = "Cloth",
    Gold = "Gold",
    Plain = "Plain",
    Stone = "Stone",
    Tile = "Tile",
    Wood = "Wood",
}

export enum Color {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow",
}

export enum Concept {
    Bathroom = "bathroom",
    ChildSRoom = "child's room",
    Concert = "concert",
    Den = "den",
    Expensive = "expensive",
    Facility = "facility",
    Fancy = "fancy",
    Fitness = "fitness",
    FolkArt = "folk art",
    FreezingCold = "freezing cold",
    Garage = "garage",
    Garden = "garden",
    Horror = "horror",
    Kitchen = "kitchen",
    LivingRoom = "living room",
    Music = "music",
    None = "none",
    Ocean = "ocean",
    Office = "office",
    Outdoors = "outdoors",
    Party = "party",
    School = "school",
    Shop = "shop",
    Space = "space",
    ZenStyle = "zen-style",
}

export enum CurtainType {
    Curtains = "Curtains",
    RollerShades = "Roller Shades",
    SlattedBlinds = "Slatted Blinds",
}

export enum ExchangeCurrency {
    HeartCrystals = "Heart Crystals",
    NookMiles = "Nook Miles",
}

export enum HhaCategory {
    AC = "AC",
    Appliance = "Appliance",
    Audio = "Audio",
    Clock = "Clock",
    Doll = "Doll",
    Dresser = "Dresser",
    Lighting = "Lighting",
    MusicalInstrument = "MusicalInstrument",
    Pet = "Pet",
    Plant = "Plant",
    SmallGoods = "SmallGoods",
    Trash = "Trash",
    Tv = "TV",
}

export enum InteractEnum {
    Chair = "Chair",
    Trash = "Trash",
    Wardrobe = "Wardrobe",
    Workbench = "Workbench",
}

export enum LightingType {
    Candle = "Candle",
    Emission = "Emission",
    Fluorescent = "Fluorescent",
    Monitor = "Monitor",
    Spotlight = "Spotlight",
}

export enum Museum {
    Room1 = "Room 1",
    Room2 = "Room 2",
    Room3 = "Room 3",
}

export enum PaneType {
    Glass = "Glass",
    Screen = "Screen",
}

export enum PrimaryShape {
    ALine = "A-line",
    ALong = "A-long",
    BLong = "B-long",
    Balloon = "Balloon",
    Box = "Box",
    Dress = "Dress",
    Kimono = "Kimono",
    Marinesuit = "Marinesuit",
    Overall = "Overall",
    Rib = "Rib",
    Robe = "Robe",
    Salopette = "Salopette",
}

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
    translations:          FairyTale;
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

export interface MaterialsTranslations {
    "star fragment"?:         FairyTale;
    "Aquarius fragment"?:     FairyTale;
    "gold nugget"?:           FairyTale;
    stone?:                   FairyTale;
    "Aries fragment"?:        FairyTale;
    "earth egg"?:             FairyTale;
    "stone egg"?:             FairyTale;
    "leaf egg"?:              FairyTale;
    "wood egg"?:              FairyTale;
    "sky egg"?:               FairyTale;
    "water egg"?:             FairyTale;
    "wobbling Zipper toy"?:   FairyTale;
    "Cancer fragment"?:       FairyTale;
    "Capricorn fragment"?:    FairyTale;
    wood?:                    FairyTale;
    hardwood?:                FairyTale;
    softwood?:                FairyTale;
    "iron nugget"?:           FairyTale;
    "mini DIY workbench"?:    FairyTale;
    "Gemini fragment"?:       FairyTale;
    "red ornament"?:          FairyTale;
    "blue ornament"?:         FairyTale;
    "gold ornament"?:         FairyTale;
    clay?:                    Comfy;
    "Leo fragment"?:          FairyTale;
    "Libra fragment"?:        FairyTale;
    "Pisces fragment"?:       FairyTale;
    "Sagittarius fragment"?:  FairyTale;
    "Scorpius fragment"?:     FairyTale;
    "Taurus fragment"?:       FairyTale;
    "Virgo fragment"?:        FairyTale;
    acorn?:                   FairyTale;
    apple?:                   Comfy;
    "maple leaf"?:            FairyTale;
    "clump of weeds"?:        FairyTale;
    "flimsy axe"?:            FairyTale;
    "bamboo piece"?:          FairyTale;
    "young spring bamboo"?:   FairyTale;
    "bamboo shoot"?:          FairyTale;
    "wasp nest"?:             FairyTale;
    "cherry-blossom petal"?:  FairyTale;
    "blue roses"?:            FairyTale;
    campfire?:                FairyTale;
    "cherry-blossom bonsai"?: FairyTale;
    "pine bonsai tree"?:      FairyTale;
    "flimsy shovel"?:         FairyTale;
    "log stakes"?:            FairyTale;
    "tree branch"?:           FairyTale;
    "cardboard box"?:         FairyTale;
    cherry?:                  Comfy;
    "black cosmos"?:          FairyTale;
    "purple mums"?:           FairyTale;
    "pink mums"?:             FairyTale;
    "purple roses"?:          FairyTale;
    "black roses"?:           FairyTale;
    "purple tulips"?:         FairyTale;
    "pink tulips"?:           FairyTale;
    "orange tulips"?:         FairyTale;
    "purple windflowers"?:    FairyTale;
    book?:                    FairyTale;
    coconut?:                 FairyTale;
    "blue hyacinths"?:        FairyTale;
    "pink hyacinths"?:        FairyTale;
    "orange hyacinths"?:      FairyTale;
    "orange pansies"?:        FairyTale;
    "blue pansies"?:          FairyTale;
    "purple pansies"?:        FairyTale;
    "blue windflowers"?:      FairyTale;
    "pink windflowers"?:      FairyTale;
    "white windflowers"?:     FairyTale;
    "red cosmos"?:            FairyTale;
    "yellow cosmos"?:         FairyTale;
    "white cosmos"?:          FairyTale;
    "pink cosmos"?:           FairyTale;
    "large star fragment"?:   FairyTale;
    "pink lilies"?:           FairyTale;
    "orange lilies"?:         FairyTale;
    "white lilies"?:          FairyTale;
    "pink roses"?:            FairyTale;
    "orange roses"?:          FairyTale;
    "black lilies"?:          FairyTale;
    "black tulips"?:          FairyTale;
    "scattered papers"?:      FairyTale;
    "yellow lilies"?:         FairyTale;
    "red mums"?:              FairyTale;
    "yellow roses"?:          FairyTale;
    "manila clam"?:           FairyTale;
    "flimsy fishing rod"?:    FairyTale;
    "red roses"?:             FairyTale;
    "rare mushroom"?:         FairyTale;
    "round mushroom"?:        FairyTale;
    "skinny mushroom"?:       FairyTale;
    "flat mushroom"?:         FairyTale;
    "elegant mushroom"?:      FairyTale;
    fossil?:                  FairyTale;
    "drinking fountain"?:     FairyTale;
    "large snowflake"?:       FairyTale;
    snowflake?:               FairyTale;
    pear?:                    FairyTale;
    orange?:                  FairyTale;
    peach?:                   FairyTale;
    "empty can"?:             FairyTale;
    boot?:                    FairyTale;
    "old tire"?:              FairyTale;
    "white hyacinths"?:       FairyTale;
    "Papa bear"?:             FairyTale;
    "Mama bear"?:             FairyTale;
    "Baby bear"?:             FairyTale;
    "gold roses"?:            FairyTale;
    "screen wall"?:           FairyTale;
    axe?:                     FairyTale;
    net?:                     FairyTale;
    "fishing rod"?:           FairyTale;
    shovel?:                  FairyTale;
    slingshot?:               FairyTale;
    "watering can"?:          FairyTale;
    "red hyacinths"?:         FairyTale;
    "yellow hyacinths"?:      FairyTale;
    "purple hyacinths"?:      FairyTale;
    "ironwood dresser"?:      FairyTale;
    "cutting board"?:         FairyTale;
    "pine cone"?:             FairyTale;
    "red lilies"?:            FairyTale;
    "log bench"?:             FairyTale;
    "log chair"?:             FairyTale;
    "orange cosmos"?:         FairyTale;
    "lucky cat"?:             FairyTale;
    magazine?:                FairyTale;
    pearl?:                   FairyTale;
    "giant clam"?:            FairyTale;
    "sand dollar"?:           FairyTale;
    coral?:                   FairyTale;
    conch?:                   FairyTale;
    "sea snail"?:             FairyTale;
    cowrie?:                  FairyTale;
    bells?:                   null;
    "yellow mums"?:           FairyTale;
    "white mums"?:            FairyTale;
    "log stool"?:             FairyTale;
    "green mums"?:            FairyTale;
    "flimsy net"?:            FairyTale;
    "oil barrel"?:            FairyTale;
    "red pansies"?:           FairyTale;
    "yellow pansies"?:        FairyTale;
    "white pansies"?:         FairyTale;
    "zen cushion"?:           FairyTale;
    rocket?:                  Comfy;
    "gold armor"?:            FairyTale;
    "rusted part"?:           FairyTale;
    "white roses"?:           FairyTale;
    "venus comb"?:            FairyTale;
    "document stack"?:        FairyTale;
    "summer shell"?:          FairyTale;
    "orange pumpkin"?:        FairyTale;
    candy?:                   FairyTale;
    "spooky lantern"?:        FairyTale;
    "sandy-beach flooring"?:  FairyTale;
    "upright piano"?:         FairyTale;
    "painting set"?:          FairyTale;
    "red tulips"?:            FairyTale;
    "yellow tulips"?:         FairyTale;
    "white tulips"?:          FairyTale;
    "flimsy watering can"?:   FairyTale;
    "wedding flower stand"?:  FairyTale;
    "red windflowers"?:       FairyTale;
    "orange windflowers"?:    FairyTale;
    "wooden-block toy"?:      FairyTale;
}

export interface FairyTale {
    sourceSheet?:       FairyTaleSourceSheet;
    id?:                number;
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
    plural?:            boolean;
    variantId?:         number;
    clothName?:         FairyTaleClothName;
    clothGroup?:        number;
    furnitureName?:     string;
}

export enum FairyTaleClothName {
    CareerJacket = "career jacket",
    GinghamPicnicShirt = "gingham picnic shirt",
    OpenCollarShirt = "open-collar shirt",
}

export enum FairyTaleSourceSheet {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    BugsModels = "Bugs Models",
    Caps = "Caps",
    Craft = "Craft",
    Doorplates = "Doorplates",
    Dresses = "Dresses",
    Etc = "ETC",
    EventItems = "Event Items",
    Fence = "Fence",
    FishModels = "Fish Models",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    FurniturePatterns = "Furniture Patterns",
    FurnitureVariants = "Furniture Variants",
    HHASet = "HHA Set",
    HHASituation = "HHA Situation",
    KKAlbums = "K.K. Albums",
    MarineSuit = "Marine Suit",
    Masks = "Masks",
    Pictures = "Pictures",
    Plants = "Plants",
    Posters = "Posters",
    Rugs = "Rugs",
    Shells = "Shells",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    TopsVariants = "Tops Variants",
    Umbrella = "Umbrella",
    Walls = "Walls",
}

export enum Version {
    Empty = "",
    The100 = "1.0.0",
    The110 = "1.1.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
}

export interface Comfy {
    sourceSheet:        ComfySourceSheet;
    id:                 ComfyID;
    version:            Version;
    english:            Theme;
    englishEurope:      Theme;
    german:             German;
    spanish:            Spanish;
    spanishUs:          Spanish;
    french:             French;
    frenchUs:           French;
    italian:            Italian;
    dutch:              DutchEnum;
    chinese:            Chinese;
    chineseTraditional: ChineseTraditional;
    japanese:           Japanese;
    korean:             Korean;
    russian:            Russian;
    plural:             boolean;
}

export enum Chinese {
    休闲 = "休闲",
    子墨 = "子墨",
    工作 = "工作",
    度假 = "度假",
    恐怖 = "恐怖",
    户外 = "户外",
    日常 = "日常",
    正式 = "正式",
    舞台 = "舞台",
    花娜 = "花娜",
    苹果 = "苹果",
    运动 = "运动",
    阿四 = "阿四",
}

export enum ChineseTraditional {
    子墨 = "子墨",
    工作 = "工作",
    度假 = "度假",
    恐怖 = "恐怖",
    悠閒 = "悠閒",
    戶外活動 = "戶外活動",
    日常生活 = "日常生活",
    正式 = "正式",
    舞台 = "舞台",
    花娜 = "花娜",
    蘋果 = "蘋果",
    運動 = "運動",
    阿四 = "阿四",
}

export enum DutchEnum {
    AlledaagsThema = "alledaags thema",
    Apple = "Apple",
    Cherry = "Cherry",
    Clay = "Clay",
    FormeThema = "forme thema",
    Griezelthema = "griezelthema",
    Podiumthema = "podiumthema",
    Rocket = "Rocket",
    Sportthema = "sportthema",
    Vakantiethema = "vakantiethema",
    Vrijetijdsthema = "vrijetijdsthema",
    WeersbestendigThema = "weersbestendig thema",
    Werkthema = "werkthema",
}

export enum Theme {
    Apple = "Apple",
    Cherry = "Cherry",
    Clay = "Clay",
    Comfy = "comfy",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Formal = "formal",
    Goth = "goth",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Rocket = "Rocket",
    Sporty = "sporty",
    Theatrical = "theatrical",
    Vacation = "vacation",
    Work = "work",
}

export enum French {
    Anna = "Anna",
    Esther = "Esther",
    Gertrude = "Gertrude",
    Guido = "Guido",
    TenueDExtérieur = "tenue d'extérieur",
    TenueDeDétente = "tenue de détente",
    TenueDeScène = "tenue de scène",
    TenueDeTousLesJours = "tenue de tous les jours",
    TenueDeVacances = "tenue de vacances",
    TenueEffrayante = "tenue effrayante",
    TenueOfficielle = "tenue officielle",
    TenueProfessionnelle = "tenue professionnelle",
    TenueSport = "tenue sport",
}

export enum German {
    Alltagskleidung = "Alltagskleidung",
    Arbeitskleidung = "Arbeitskleidung",
    Bella = "Bella",
    Bühnenkleidung = "Bühnenkleidung",
    Dietmar = "Dietmar",
    Formellkleidung = "Formellkleidung",
    Freizeitkleidung = "Freizeitkleidung",
    Horrorkleidung = "Horrorkleidung",
    Jessi = "Jessi",
    Katrin = "Katrin",
    Outdoorkleidung = "Outdoorkleidung",
    Sportkleidung = "Sportkleidung",
    Urlaubskleidung = "Urlaubskleidung",
}

export enum ComfyID {
    Daily = "Daily",
    Dog17 = "dog17",
    Fomal = "Fomal",
    Gor09 = "gor09",
    Ham01 = "ham01",
    Ham05 = "ham05",
    Horror = "Horror",
    Outdoor = "Outdoor",
    Relax = "Relax",
    Sport = "Sport",
    Stage = "Stage",
    Vacation = "Vacation",
    Work = "Work",
}

export enum Italian {
    Amarena = "Amarena",
    Carmelo = "Carmelo",
    Cicci = "Cicci",
    Confortevole = "confortevole",
    DaAriaAperta = "da aria aperta",
    DaLavoro = "da lavoro",
    DaSport = "da sport",
    DaTeatro = "da teatro",
    DaVacanza = "da vacanza",
    Formale = "formale",
    Horror = "horror",
    Kinga = "Kinga",
    PerTuttiIGiorni = "per tutti i giorni",
}

export enum Japanese {
    The４ごう = "４ごう",
    おしごと仕事 = "おしごと仕事",
    どぐろう = "どぐろう",
    アウトドア = "アウトドア",
    アップル = "アップル",
    ステージ = "ステージ",
    スポーツ = "スポーツ",
    デイリー = "デイリー",
    ハンナ = "ハンナ",
    バカンス = "バカンス",
    フォーマル = "フォーマル",
    ホラー = "ホラー",
    リラックス = "リラックス",
}

export enum Korean {
    The4호 = "4호",
    데일리 = "데일리",
    릴랙스 = "릴랙스",
    바캉스 = "바캉스",
    비즈니스 = "비즈니스",
    스테이지 = "스테이지",
    스포츠 = "스포츠",
    아웃도어 = "아웃도어",
    애플 = "애플",
    포멀 = "포멀",
    한나 = "한나",
    햄둥 = "햄둥",
    호러 = "호러",
}

export enum Russian {
    Готический = "готический",
    Клэй = "Клэй",
    Отпускной = "отпускной",
    Повседневный = "повседневный",
    Походный = "походный",
    Рабочий = "рабочий",
    Рокет = "Рокет",
    Спортивный = "спортивный",
    Удобный = "удобный",
    Формальный = "формальный",
    Черри = "Черри",
    Эпл = "Эпл",
    Эффектный = "эффектный",
}

export enum ComfySourceSheet {
    FashionThemes = "Fashion Themes",
    Villagers = "Villagers",
}

export enum Spanish {
    Boliche = "Boliche",
    Casual = "casual",
    DeActividadesAlAireLibre = "de actividades al aire libre",
    Deportivo = "deportivo",
    Desenfadado = "desenfadado",
    Formal = "formal",
    Gloria = "Gloria",
    Gótico = "gótico",
    Luna = "Luna",
    Profesional = "profesional",
    Rosi = "Rosi",
    Teatral = "teatral",
    Todoterreno = "todoterreno",
    Vacacional = "vacacional",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export enum UnlockNoteEnum {
    Bcat = "BCAT",
    NTP = "NTP",
    The110A = "1.1.0a",
    The120A = "1.2.0a",
    The120B = "1.2.0b",
    The121C = "1.2.1c",
}

export enum SeasonalAvailability {
    AllYear = "All Year",
    Fall = "Fall",
    Spring = "Spring",
    Summer = "Summer",
    Winter = "Winter",
}

export enum SecondaryShape {
    H = "H",
    L = "L",
    N = "N",
}

export interface SeriesTranslations {
    sourceSheet:        SeriesTranslationsSourceSheet;
    variantId?:         number;
    id:                 IDID | number;
    clothName?:         SeriesTranslationsClothName;
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
    clothGroup?:        number;
    version?:           Version;
    furnitureName?:     FurnitureName;
}

export enum SeriesTranslationsClothName {
    JockeyUniform = "jockey uniform",
    MOMSHandmadeApron = "Mom's handmade apron",
}

export enum FurnitureName {
    Gears = "gears",
    IncenseBurner = "incense burner",
    Screen = "screen",
    TissueBox = "tissue box",
    WeddingFlowerStand = "wedding flower stand",
}

export enum IDID {
    Cat20 = "cat20",
}

export enum SeriesTranslationsSourceSheet {
    DressesVariants = "Dresses Variants",
    FurnitureVariants = "Furniture Variants",
    HHAThemes = "HHA Themes",
    TopsVariants = "Tops Variants",
    VillagersCatchPhrase = "Villagers Catch Phrase",
}

export enum Size {
    Size1X05 = "1x0.5 ",
    Size1X1 = "1x1 ",
    Size1X15 = "1x1.5 ",
    Size1X2 = "1x2 ",
    Size2X1 = "2x1 ",
    Size2X15 = "2x1.5 ",
    Size2X2 = "2x2 ",
    Size3X2 = "3x2",
    Size3X3 = "3x3 ",
    Size4X3 = "4x3 ",
    Size4X4 = "4x4",
    The05X1 = "0.5x1 ",
    The15X15 = "1.5x1.5",
    The1X05 = "1x0.5",
    The1X1 = "1x1",
    The1X15 = "1x1.5",
    The1X2 = "1x2",
    The2X05 = "2x0.5",
    The2X1 = "2x1",
    The2X15 = "2x1.5",
    The2X2 = "2x2",
    The3X1 = "3x1",
    The3X2 = "3x2 ",
    The3X3 = "3x3",
    The4X3 = "4x3",
    The4X4 = "4x4 ",
    The5X5 = "5x5 ",
}

export enum SizeCategory {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
}

export enum SpeakerType {
    Cheap = "Cheap",
    HiFi = "Hi-fi",
    Phono = "Phono",
    Retro = "Retro",
}

export enum Style {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    Gorgeous = "Gorgeous",
    Simple = "Simple",
}

export interface ThemesTranslations {
    party?:        FairyTale;
    everyday?:     Comfy;
    comfy?:        Comfy;
    outdoorsy?:    Comfy;
    vacation?:     Comfy;
    "fairy tale"?: FairyTale;
    theatrical?:   Comfy;
    work?:         Comfy;
    sporty?:       Comfy;
    formal?:       Comfy;
    goth?:         Comfy;
}

export enum VariantID {
    The0_0 = "0_0",
    The0_1 = "0_1",
    The0_2 = "0_2",
    The0_3 = "0_3",
    The0_4 = "0_4",
    The0_5 = "0_5",
    The0_6 = "0_6",
    The0_7 = "0_7",
    The1_0 = "1_0",
    The1_1 = "1_1",
    The1_2 = "1_2",
    The1_3 = "1_3",
    The1_4 = "1_4",
    The1_5 = "1_5",
    The1_6 = "1_6",
    The1_7 = "1_7",
    The2_0 = "2_0",
    The2_1 = "2_1",
    The2_2 = "2_2",
    The2_3 = "2_3",
    The2_4 = "2_4",
    The2_5 = "2_5",
    The2_6 = "2_6",
    The2_7 = "2_7",
    The3_0 = "3_0",
    The3_1 = "3_1",
    The3_2 = "3_2",
    The3_3 = "3_3",
    The3_4 = "3_4",
    The3_5 = "3_5",
    The3_6 = "3_6",
    The3_7 = "3_7",
    The4_0 = "4_0",
    The4_1 = "4_1",
    The4_2 = "4_2",
    The4_3 = "4_3",
    The4_4 = "4_4",
    The4_5 = "4_5",
    The4_6 = "4_6",
    The4_7 = "4_7",
    The5_0 = "5_0",
    The5_1 = "5_1",
    The5_2 = "5_2",
    The5_3 = "5_3",
    The5_4 = "5_4",
    The5_5 = "5_5",
    The5_6 = "5_6",
    The5_7 = "5_7",
    The6_0 = "6_0",
    The6_1 = "6_1",
    The6_2 = "6_2",
    The6_3 = "6_3",
    The6_4 = "6_4",
    The6_5 = "6_5",
    The6_6 = "6_6",
    The6_7 = "6_7",
    The7_0 = "7_0",
    The7_1 = "7_1",
    The7_2 = "7_2",
    The7_3 = "7_3",
    The7_4 = "7_4",
    The7_5 = "7_5",
    The7_6 = "7_6",
    The7_7 = "7_7",
}

export interface VariationElement {
    closetImage?:         string;
    storageImage?:        string;
    variation:            number | null | string;
    exchangePrice?:       number | null;
    exchangeCurrency?:    ExchangeCurrency | null;
    mannequinPiece?:      boolean | null;
    sortOrder?:           number;
    filename:             string;
    clothGroupId?:        number;
    internalId:           number;
    uniqueEntryId:        string;
    variantTranslations?: VariantTranslations | null;
    colors:               Color[];
    image?:               string;
    pattern?:             null | string;
    patternTitle?:        null | string;
    variantId?:           VariantID;
    unlockNotes?:         Array<Date | UnlockNoteEnum> | null;
    surface?:             boolean;
    hhaCategory?:         HhaCategory | null;
    concepts?:            Concept[];
    patternTranslations?: FairyTale | null;
    doorDeco?:            boolean;
    uses?:                number;
    stackSize?:           number;
}

export interface VariantTranslations {
    sourceSheet?:       VariantTranslationsSourceSheet;
    variantId?:         number;
    id?:                number;
    clothName?:         string;
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
    russian:            number | string;
    plural?:            boolean;
    clothGroup?:        number;
    furnitureName?:     string;
}

export enum VariantTranslationsSourceSheet {
    AccessoriesVariants = "Accessories Variants",
    BagsVariants = "Bags Variants",
    BottomsVariants = "Bottoms Variants",
    CapsVariants = "Caps Variants",
    DressesVariants = "Dresses Variants",
    FurnitureVariants = "Furniture Variants",
    MarineSuitVariants = "Marine Suit Variants",
    MasksVariants = "Masks Variants",
    ShoesVariants = "Shoes Variants",
    SocksVariants = "Socks Variants",
    TopsVariants = "Tops Variants",
}

export enum VfxType {
    LightOff = "LightOff",
    Random = "Random",
    Synchro = "Synchro",
}

export enum WindowColor {
    BlackMetal = "Black Metal",
    DarkWood = "Dark Wood",
    GreyMetal = "Grey Metal",
    GreyWood = "Grey Wood",
    LightWood = "Light Wood",
    NaturalWood = "Natural Wood",
    WhiteMetal = "White Metal",
    WhiteWood = "White Wood",
    Wood = "Wood",
}

export enum WindowType {
    Arch = "Arch",
    Circle = "Circle",
    FourPane = "Four Pane",
    SinglePane = "Single Pane",
    SlidingPane = "Sliding Pane",
}
