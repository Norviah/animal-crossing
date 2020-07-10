export interface Item {
    sourceSheet:           Category;
    name:                  string;
    diy?:                  boolean;
    size?:                 Size;
    milesPrice?:           number | null;
    sourceNotes?:          null | string;
    versionAdded?:         Version;
    versionUnlocked?:      Version;
    catalog?:              Catalog | null;
    buy:                   number;
    sell:                  number | null;
    translations:          ItemTranslations | null;
    source:                string[];
    themesTranslations?:   ThemesTranslations;
    variations?:           VariationElement[];
    styles?:               Style[];
    themes?:               Theme[];
    recipe:                Recipe | null;
    closetImage?:          string;
    storageImage?:         null | string;
    variation?:            null;
    hhaBasePoints?:        number | null;
    seasonalAvailability?: SeasonalAvailability;
    mannequinPiece?:       boolean;
    sortOrder?:            number;
    villagerEquippable?:   boolean;
    filename?:             string;
    internalId?:           number;
    uniqueEntryId?:        string;
    variantTranslations?:  null;
    colors?:               Color[];
    image?:                string;
    bodyTitle?:            null | string;
    pattern?:              null | string;
    patternTitle?:         null | string;
    bodyCustomize?:        boolean;
    patternCustomize?:     boolean;
    kitCost?:              number | null;
    surface?:              boolean;
    interact?:             boolean | InteractEnum;
    tag?:                  null | string;
    outdoor?:              boolean;
    speakerType?:          SpeakerType | null;
    lightingType?:         LightingType | null;
    variantId?:            VariantID | null;
    patternTranslations?:  PatternTranslations | null;
    seriesTranslations?:   SeriesTranslations | null;
    concepts?:             Concept[];
    set?:                  null | string;
    series?:               null | string;
    customize?:            boolean;
    framedImage?:          null | string;
    albumImage?:           null | string;
    inventoryImage?:       null | string;
    stackSize?:            number;
    sizeCategory?:         SizeCategory;
    type?:                 Type;
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
    primaryShape?:         PrimaryShape;
    secondaryShape?:       SecondaryShape;
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
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    LightBlue = "Light blue",
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

export enum InteractEnum {
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

export interface PatternTranslations {
    sourceSheet?:       PatternTranslationsSourceSheet;
    variantId?:         number;
    id?:                string;
    furnitureName?:     string;
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
    internalIds?:       number[];
    version?:           Version;
}

export enum PatternTranslationsSourceSheet {
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
    Umbrella = "Umbrella",
    Walls = "Walls",
}

export enum Version {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The110A = "1.1.0a",
    The120 = "1.2.0",
    The120A = "1.2.0a",
    The120B = "1.2.0b",
    The121C = "1.2.1c",
    The130 = "1.3.0",
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
    buy:                   number;
    sell:                  number;
    milesPrice:            number | null;
    source:                string[];
    sourceNotes:           null | string;
    versionAdded:          Version;
    versionUnlocked:       Version;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColor | null;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    translations:          RecipeTranslations;
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

export interface MaterialsTranslations {
    "star fragment"?:         PatternTranslations;
    "Aquarius fragment"?:     PatternTranslations;
    "gold nugget"?:           PatternTranslations;
    stone?:                   PatternTranslations;
    "Aries fragment"?:        PatternTranslations;
    "earth egg"?:             PatternTranslations;
    "stone egg"?:             PatternTranslations;
    "leaf egg"?:              PatternTranslations;
    "wood egg"?:              PatternTranslations;
    "sky egg"?:               PatternTranslations;
    "water egg"?:             PatternTranslations;
    "wobbling Zipper toy"?:   PatternTranslations;
    "Cancer fragment"?:       PatternTranslations;
    "Capricorn fragment"?:    PatternTranslations;
    wood?:                    PatternTranslations;
    hardwood?:                PatternTranslations;
    softwood?:                PatternTranslations;
    "iron nugget"?:           PatternTranslations;
    "mini DIY workbench"?:    PatternTranslations;
    "Gemini fragment"?:       PatternTranslations;
    "red ornament"?:          PatternTranslations;
    "blue ornament"?:         PatternTranslations;
    "gold ornament"?:         PatternTranslations;
    clay?:                    PatternTranslations;
    "Leo fragment"?:          PatternTranslations;
    "Libra fragment"?:        PatternTranslations;
    "Pisces fragment"?:       PatternTranslations;
    "Sagittarius fragment"?:  PatternTranslations;
    "Scorpius fragment"?:     PatternTranslations;
    "Taurus fragment"?:       PatternTranslations;
    "Virgo fragment"?:        PatternTranslations;
    acorn?:                   PatternTranslations;
    apple?:                   PatternTranslations;
    "maple leaf"?:            PatternTranslations;
    "clump of weeds"?:        PatternTranslations;
    "flimsy axe"?:            PatternTranslations;
    "bamboo piece"?:          PatternTranslations;
    "young spring bamboo"?:   PatternTranslations;
    "bamboo shoot"?:          PatternTranslations;
    "wasp nest"?:             PatternTranslations;
    "cherry-blossom petal"?:  PatternTranslations;
    "blue roses"?:            PatternTranslations;
    campfire?:                PatternTranslations;
    "cherry-blossom bonsai"?: PatternTranslations;
    "pine bonsai tree"?:      PatternTranslations;
    "flimsy shovel"?:         PatternTranslations;
    "log stakes"?:            PatternTranslations;
    "tree branch"?:           PatternTranslations;
    "cardboard box"?:         PatternTranslations;
    cherry?:                  PatternTranslations;
    "black cosmos"?:          PatternTranslations;
    "purple mums"?:           PatternTranslations;
    "pink mums"?:             PatternTranslations;
    "purple roses"?:          PatternTranslations;
    "black roses"?:           PatternTranslations;
    "purple tulips"?:         PatternTranslations;
    "pink tulips"?:           PatternTranslations;
    "orange tulips"?:         PatternTranslations;
    "purple windflowers"?:    PatternTranslations;
    book?:                    PatternTranslations;
    coconut?:                 PatternTranslations;
    "blue hyacinths"?:        PatternTranslations;
    "pink hyacinths"?:        PatternTranslations;
    "orange hyacinths"?:      PatternTranslations;
    "orange pansies"?:        PatternTranslations;
    "blue pansies"?:          PatternTranslations;
    "purple pansies"?:        PatternTranslations;
    "blue windflowers"?:      PatternTranslations;
    "pink windflowers"?:      PatternTranslations;
    "white windflowers"?:     PatternTranslations;
    "red cosmos"?:            PatternTranslations;
    "yellow cosmos"?:         PatternTranslations;
    "white cosmos"?:          PatternTranslations;
    "pink cosmos"?:           PatternTranslations;
    "large star fragment"?:   PatternTranslations;
    "pink lilies"?:           PatternTranslations;
    "orange lilies"?:         PatternTranslations;
    "white lilies"?:          PatternTranslations;
    "pink roses"?:            PatternTranslations;
    "orange roses"?:          PatternTranslations;
    "black lilies"?:          PatternTranslations;
    "black tulips"?:          PatternTranslations;
    "scattered papers"?:      PatternTranslations;
    "yellow lilies"?:         PatternTranslations;
    "red mums"?:              PatternTranslations;
    "yellow roses"?:          PatternTranslations;
    "manila clam"?:           PatternTranslations;
    "flimsy fishing rod"?:    PatternTranslations;
    "red roses"?:             PatternTranslations;
    "rare mushroom"?:         PatternTranslations;
    "round mushroom"?:        PatternTranslations;
    "skinny mushroom"?:       PatternTranslations;
    "flat mushroom"?:         PatternTranslations;
    "elegant mushroom"?:      PatternTranslations;
    fossil?:                  PatternTranslations;
    "drinking fountain"?:     PatternTranslations;
    "large snowflake"?:       PatternTranslations;
    snowflake?:               PatternTranslations;
    pear?:                    PatternTranslations;
    orange?:                  PatternTranslations;
    peach?:                   Comfy;
    "empty can"?:             PatternTranslations;
    boot?:                    PatternTranslations;
    "old tire"?:              PatternTranslations;
    "white hyacinths"?:       PatternTranslations;
    "Papa bear"?:             PatternTranslations;
    "Mama bear"?:             PatternTranslations;
    "Baby bear"?:             PatternTranslations;
    "gold roses"?:            PatternTranslations;
    "screen wall"?:           PatternTranslations;
    axe?:                     PatternTranslations;
    net?:                     PatternTranslations;
    "fishing rod"?:           PatternTranslations;
    shovel?:                  PatternTranslations;
    slingshot?:               PatternTranslations;
    "watering can"?:          PatternTranslations;
    "red hyacinths"?:         PatternTranslations;
    "yellow hyacinths"?:      PatternTranslations;
    "purple hyacinths"?:      PatternTranslations;
    "ironwood dresser"?:      PatternTranslations;
    "cutting board"?:         PatternTranslations;
    "pine cone"?:             PatternTranslations;
    "red lilies"?:            PatternTranslations;
    "log bench"?:             PatternTranslations;
    "log chair"?:             PatternTranslations;
    "orange cosmos"?:         PatternTranslations;
    "lucky cat"?:             PatternTranslations;
    magazine?:                PatternTranslations;
    pearl?:                   PatternTranslations;
    "giant clam"?:            PatternTranslations;
    "sand dollar"?:           PatternTranslations;
    coral?:                   PatternTranslations;
    Stone?:                   null;
    conch?:                   PatternTranslations;
    "sea snail"?:             PatternTranslations;
    cowrie?:                  PatternTranslations;
    bells?:                   null;
    "yellow mums"?:           PatternTranslations;
    "white mums"?:            PatternTranslations;
    "log stool"?:             PatternTranslations;
    "green mums"?:            PatternTranslations;
    "flimsy net"?:            PatternTranslations;
    "oil barrel"?:            PatternTranslations;
    "red pansies"?:           PatternTranslations;
    "yellow pansies"?:        PatternTranslations;
    "white pansies"?:         PatternTranslations;
    "zen cushion"?:           PatternTranslations;
    rocket?:                  PatternTranslations;
    "gold armor"?:            SeriesTranslations;
    "rusted part"?:           PatternTranslations;
    "white roses"?:           PatternTranslations;
    "venus comb"?:            PatternTranslations;
    "document stack"?:        PatternTranslations;
    "summer shell"?:          PatternTranslations;
    "sandy-beach flooring"?:  PatternTranslations;
    "upright piano"?:         PatternTranslations;
    "painting set"?:          PatternTranslations;
    "red tulips"?:            PatternTranslations;
    "yellow tulips"?:         PatternTranslations;
    "white tulips"?:          PatternTranslations;
    "flimsy watering can"?:   PatternTranslations;
    "wedding flower stand"?:  PatternTranslations;
    "red windflowers"?:       PatternTranslations;
    "orange windflowers"?:    PatternTranslations;
    "wooden-block toy"?:      PatternTranslations;
}

export interface SeriesTranslations {
    sourceSheet:        SeriesTranslationsSourceSheet;
    id:                 number;
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

export enum SeriesTranslationsSourceSheet {
    Dresses = "Dresses",
    HHAThemes = "HHA Themes",
}

export interface Comfy {
    sourceSheet:        ComfySourceSheet;
    id:                 IDEnum;
    version:            Version;
    english:            Theme;
    englishEurope:      Theme;
    german:             German;
    spanish:            Spanish;
    spanishUs:          Spanish;
    french:             French;
    frenchUs:           French;
    italian:            Italian;
    dutch:              Dutch;
    chinese:            Chinese;
    chineseTraditional: ChineseTraditional;
    japanese:           Japanese;
    korean:             Korean;
    russian:            Russian;
    plural:             boolean;
    internalIds:        IDEnum[];
}

export enum Chinese {
    休闲 = "休闲",
    工作 = "工作",
    度假 = "度假",
    怦怦 = "怦怦",
    恐怖 = "恐怖",
    户外 = "户外",
    日常 = "日常",
    正式 = "正式",
    派对 = "派对",
    童话世界 = "童话世界",
    舞台 = "舞台",
    运动 = "运动",
}

export enum ChineseTraditional {
    工作 = "工作",
    度假 = "度假",
    怦怦 = "怦怦",
    恐怖 = "恐怖",
    悠閒 = "悠閒",
    戶外活動 = "戶外活動",
    日常生活 = "日常生活",
    正式 = "正式",
    派對 = "派對",
    童話世界 = "童話世界",
    舞台 = "舞台",
    運動 = "運動",
}

export enum Dutch {
    AlledaagsThema = "alledaags thema",
    Feestthema = "feestthema",
    FormeThema = "forme thema",
    Griezelthema = "griezelthema",
    Perzik = "perzik",
    Podiumthema = "podiumthema",
    Sportthema = "sportthema",
    Sprookjesthema = "sprookjesthema",
    Vakantiethema = "vakantiethema",
    Vrijetijdsthema = "vrijetijdsthema",
    WeersbestendigThema = "weersbestendig thema",
    Werkthema = "werkthema",
}

export enum Theme {
    Comfy = "comfy",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Formal = "formal",
    Goth = "goth",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Peach = "peach",
    Sporty = "sporty",
    Theatrical = "theatrical",
    Vacation = "vacation",
    Work = "work",
}

export enum French {
    Prune = "prune",
    TenueDExtérieur = "tenue d'extérieur",
    TenueDeDétente = "tenue de détente",
    TenueDeFête = "tenue de fête",
    TenueDeScène = "tenue de scène",
    TenueDeTousLesJours = "tenue de tous les jours",
    TenueDeVacances = "tenue de vacances",
    TenueEffrayante = "tenue effrayante",
    TenueFéerique = "tenue féerique",
    TenueFéérique = "tenue féérique",
    TenueOfficielle = "tenue officielle",
    TenueProfessionnelle = "tenue professionnelle",
    TenueSport = "tenue sport",
}

export enum German {
    Alltagskleidung = "Alltagskleidung",
    Arbeitskleidung = "Arbeitskleidung",
    Bühnenkleidung = "Bühnenkleidung",
    Formellkleidung = "Formellkleidung",
    Freizeitkleidung = "Freizeitkleidung",
    Früchtchen = "früchtchen",
    Horrorkleidung = "Horrorkleidung",
    Märchenkleidung = "Märchenkleidung",
    Outdoorkleidung = "Outdoorkleidung",
    Partykleidung = "Partykleidung",
    Sportkleidung = "Sportkleidung",
    Urlaubskleidung = "Urlaubskleidung",
}

export enum IDEnum {
    Cbr00 = "cbr00",
    Daily = "Daily",
    Fairyland = "Fairyland",
    Fomal = "Fomal",
    Horror = "Horror",
    Outdoor = "Outdoor",
    Party = "Party",
    Relax = "Relax",
    Sport = "Sport",
    Stage = "Stage",
    Vacation = "Vacation",
    Work = "Work",
}

export enum Italian {
    Confortevole = "confortevole",
    DaAriaAperta = "da aria aperta",
    DaFesta = "da festa",
    DaFiaba = "da fiaba",
    DaLavoro = "da lavoro",
    DaSport = "da sport",
    DaTeatro = "da teatro",
    DaVacanza = "da vacanza",
    Formale = "formale",
    Horror = "horror",
    Pepè = "pepè",
    PerTuttiIGiorni = "per tutti i giorni",
}

export enum Japanese {
    おしごと仕事 = "おしごと仕事",
    アウトドア = "アウトドア",
    キュン = "キュン",
    ステージ = "ステージ",
    スポーツ = "スポーツ",
    デイリー = "デイリー",
    バカンス = "バカンス",
    パーティー = "パーティー",
    フォーマル = "フォーマル",
    ホラー = "ホラー",
    メルヘン = "メルヘン",
    リラックス = "リラックス",
}

export enum Korean {
    데일리 = "데일리",
    두근 = "두근",
    릴랙스 = "릴랙스",
    메르헨 = "메르헨",
    바캉스 = "바캉스",
    비즈니스 = "비즈니스",
    스테이지 = "스테이지",
    스포츠 = "스포츠",
    아웃도어 = "아웃도어",
    파티 = "파티",
    포멀 = "포멀",
    호러 = "호러",
}

export enum Russian {
    Готический = "готический",
    Отпускной = "отпускной",
    Персик = "персик",
    Повседневный = "повседневный",
    Походный = "походный",
    Праздничный = "праздничный",
    Рабочий = "рабочий",
    Спортивный = "спортивный",
    Удобный = "удобный",
    Фантазийный = "фантазийный",
    Формальный = "формальный",
    Эффектный = "эффектный",
}

export enum ComfySourceSheet {
    FashionThemes = "Fashion Themes",
    VillagersCatchPhrase = "Villagers Catch Phrase",
}

export enum Spanish {
    Casual = "casual",
    Cielito = "cielito",
    DeActividadesAlAireLibre = "de actividades al aire libre",
    DeFantasía = "de fantasía",
    DeFiesta = "de fiesta",
    Deportivo = "deportivo",
    Desenfadado = "desenfadado",
    Formal = "formal",
    Gótico = "gótico",
    MelíMelá = "melí-melá",
    Profesional = "profesional",
    Teatral = "teatral",
    Todoterreno = "todoterreno",
    Vacacional = "vacacional",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export interface RecipeTranslations {
    sourceSheet:        PatternTranslationsSourceSheet;
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
    party?:        Comfy;
    everyday?:     Comfy;
    comfy?:        Comfy;
    outdoorsy?:    Comfy;
    vacation?:     Comfy;
    "fairy tale"?: Comfy;
    theatrical?:   Comfy;
    work?:         Comfy;
    sporty?:       Comfy;
    formal?:       Comfy;
    goth?:         Comfy;
}

export interface ItemTranslations {
    sourceSheet:        PatternTranslationsSourceSheet;
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

export enum Type {
    AcceEyeMouth = "AcceEyeMouth",
    AccessoryEye = "AccessoryEye",
    AccessoryEyeMouth = "AccessoryEyeMouth",
    AccessoryEyeMouthInvisibleNose = "AccessoryEyeMouthInvisibleNose",
    AccessoryMouth = "AccessoryMouth",
    AccessoryMouthEarJaw = "AccessoryMouthEarJaw",
    AccessoryMouthInvisibleNose = "AccessoryMouthInvisibleNose",
    AccessoryOneEye = "AccessoryOneEye",
    HeadCap = "HeadCap",
    HeadFace = "HeadFace",
    HeadFullFace = "HeadFullFace",
    HeadHairOrnamentBack = "HeadHairOrnament_Back",
    HeadHairOrnamentFront = "HeadHairOrnament_Front",
    HeadHairOrnamentLeft = "HeadHairOrnament_Left",
    HeadHairOrnamentPeak = "HeadHairOrnament_Peak",
    HeadHairOrnamentTop = "HeadHairOrnament_Top",
    HeadgearHasBang = "Headgear_HasBang",
    HeadgearHasEar = "Headgear_HasEar",
    HeadgearNoEar = "Headgear_NoEar",
    HeadgearNoEarNoJaw = "Headgear_NoEarNoJaw",
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
    closetImage?:          string;
    storageImage?:         string;
    variation:             number | null | string;
    hhaBasePoints:         number;
    seasonalAvailability?: SeasonalAvailability;
    mannequinPiece?:       boolean | null;
    sortOrder?:            number;
    type?:                 Type;
    villagerEquippable?:   boolean;
    filename:              string;
    internalId:            number;
    uniqueEntryId:         string;
    variantTranslations:   PatternTranslations | null;
    colors:                Color[];
    image?:                string;
    pattern?:              null | string;
    patternTitle?:         PatternTitle | null;
    variantId?:            VariantID;
    patternTranslations?:  PatternTranslations | null;
    surface?:              boolean;
    concepts?:             Concept[];
    primaryShape?:         PrimaryShape;
    secondaryShape?:       SecondaryShape | null;
    doorDeco?:             boolean;
    uses?:                 number;
    stackSize?:            number;
}

export enum PatternTitle {
    AdvertisementPanel = "Advertisement panel",
    BassDrumHead = "Bass drum head",
    BedMat = "Bed mat",
    Bedding = "Bedding",
    Board = "Board",
    ClockFace = "Clock face",
    Cloth = "Cloth",
    Curtain = "Curtain",
    Cushion = "Cushion",
    Cushions = "Cushions",
    Design = "Design",
    DrawingPaper = "Drawing paper",
    DryingShirt = "Drying shirt",
    Fabric = "Fabric",
    FavoriteCard = "Favorite card",
    FavoriteUmbrella = "Favorite umbrella",
    Flag = "Flag",
    Flier = "Flier",
    Lamp = "Lamp",
    Lampshade = "Lampshade",
    Magazine = "Magazine",
    ManuscriptPaper = "Manuscript paper",
    Mat = "Mat",
    PanelDesign = "Panel design",
    Paper = "Paper",
    Pillow = "Pillow",
    Placemat = "Placemat",
    Placemats = "Placemats",
    Printout = "Printout",
    Ribbon = "Ribbon",
    Screen = "Screen",
    Seat = "Seat",
    Shawl = "Shawl",
    Shirt = "Shirt",
    Signature = "Signature",
    Sticker = "Sticker",
    StickerArea = "Sticker area",
    Table = "Table",
    Tablecloth = "Tablecloth",
    Towel = "Towel",
    Tray = "Tray",
}

export enum VfxType {
    LightOff = "LightOff",
    Random = "Random",
    Synchro = "Synchro",
}

export enum WindowColor {
    BlackMetal = "Black Metal",
    DarkWood = "Dark Wood",
    GrayMetal = "Gray Metal",
    GrayWood = "Gray Wood",
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
