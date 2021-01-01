export interface Item {
    sourceSheet:           Category;
    name:                  string;
    image?:                string;
    variation?:            null;
    bodyTitle?:            null | string;
    pattern?:              null;
    patternTitle?:         null;
    diy?:                  boolean;
    bodyCustomize?:        boolean;
    patternCustomize?:     boolean;
    kitCost?:              number | null;
    kitType?:              null;
    buy:                   number;
    sell?:                 number | null;
    size?:                 Size;
    surface?:              boolean;
    exchangePrice?:        number | null;
    exchangeCurrency?:     ExchangeCurrency | null;
    source?:               string[];
    sourceNotes?:          string[] | null;
    seasonEvent?:          null | string;
    seasonEventExclusive?: boolean | null | string;
    hhaBasePoints?:        number | null;
    hhaCategory?:          HhaCategory | null;
    interact?:             boolean | InteractEnum;
    tag?:                  null | string;
    outdoor?:              boolean;
    speakerType?:          SpeakerType | null;
    lightingType?:         LightingType | null;
    catalog?:              Catalog | null;
    versionAdded?:         Version;
    unlocked?:             boolean;
    filename?:             string;
    variantId?:            VariantID | null;
    internalId?:           number;
    uniqueEntryId?:        string;
    translations:          SeriesTranslations | null;
    colors?:               Color[];
    concepts?:             Concept[];
    set?:                  null | string;
    series?:               null | string;
    recipe:                Recipe | null;
    themesTranslations?:   ThemesTranslations;
    villagerEquippable?:   boolean;
    seasonalAvailability?: SeasonalAvailability;
    type?:                 string;
    variations?:           VariationElement[];
    styles?:               Style[];
    themes?:               Theme[];
    closetImage?:          string;
    storageImage?:         null | string;
    seasonality?:          SeasonalAvailability;
    mannequinSeason?:      SeasonalAvailability | null;
    gender?:               Gender;
    villagerGender?:       Gender | null;
    sortOrder?:            number;
    clothGroupId?:         number;
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
    inventoryImage?:       string;
    stackSize?:            number;
    inventoryFilename?:    string;
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

export enum Gender {
    Free = "Free",
    Manly = "Manly",
    Womanly = "Womanly",
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

export enum SeasonalAvailability {
    AllYear = "All Year",
    Autumn = "Autumn",
    Fall = "Fall",
    Spring = "Spring",
    Summer = "Summer",
    Winter = "Winter",
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
    seasonEvent:           null | string;
    seasonEventExclusive:  boolean | null;
    versionAdded:          Version;
    unlocked:              boolean;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             CardColor | null;
    diyIconFilename:       string;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    materials:             { [key: string]: number };
    materialsTranslations: { [key: string]: SeriesTranslations | null };
}

export enum CardColor {
    Beige = "beige",
    Blue = "blue",
    Brick = "brick",
    Brown = "brown",
    Cream = "cream",
    DarkGray = "dark gray",
    Gold = "gold",
    Green = "green",
    LightGray = "light gray",
    Orange = "orange",
    Pink = "pink",
    Purple = "purple",
    Red = "red",
    Silver = "silver",
    White = "white",
    Yellow = "yellow",
}

export interface SeriesTranslations {
    sourceSheet?:       SeriesTranslationsSourceSheet;
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
    furnitureName?:     string;
}

export enum SeriesTranslationsSourceSheet {
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
    HHAThemes = "HHA Themes",
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
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
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
    Size4X4 = "4x4 ",
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
    The4X4 = "4x4",
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

export enum Theme {
    Comfy = "comfy",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Formal = "formal",
    Goth = "goth",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Sporty = "sporty",
    Theatrical = "theatrical",
    Vacation = "vacation",
    Work = "work",
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

export interface Comfy {
    sourceSheet:        ComfySourceSheet;
    id:                 ID;
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
    工作 = "工作",
    度假 = "度假",
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

export enum DutchEnum {
    AlledaagsThema = "alledaags thema",
    Feestthema = "feestthema",
    FormeThema = "forme thema",
    Griezelthema = "griezelthema",
    Podiumthema = "podiumthema",
    Sportthema = "sportthema",
    Sprookjesthema = "sprookjesthema",
    Vakantiethema = "vakantiethema",
    Vrijetijdsthema = "vrijetijdsthema",
    WeersbestendigThema = "weersbestendig thema",
    Werkthema = "werkthema",
}

export enum French {
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
    Horrorkleidung = "Horrorkleidung",
    Märchenkleidung = "Märchenkleidung",
    Outdoorkleidung = "Outdoorkleidung",
    Partykleidung = "Partykleidung",
    Sportkleidung = "Sportkleidung",
    Urlaubskleidung = "Urlaubskleidung",
}

export enum ID {
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
    PerTuttiIGiorni = "per tutti i giorni",
}

export enum Japanese {
    おしごと仕事 = "おしごと仕事",
    アウトドア = "アウトドア",
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
}

export enum Spanish {
    Casual = "casual",
    DeActividadesAlAireLibre = "de actividades al aire libre",
    DeFantasía = "de fantasía",
    DeFiesta = "de fiesta",
    Deportivo = "deportivo",
    Desenfadado = "desenfadado",
    Formal = "formal",
    Gótico = "gótico",
    Profesional = "profesional",
    Teatral = "teatral",
    Todoterreno = "todoterreno",
    Vacacional = "vacacional",
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
    seasonEvent:          null | string;
    seasonEventExclusive: boolean | null | string;
    seasonality?:         SeasonalAvailability;
    mannequinSeason?:     SeasonalAvailability | null;
    gender?:              Gender;
    villagerGender?:      Gender | null;
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
    kitType?:             KitType | null;
    surface?:             boolean;
    hhaCategory?:         HhaCategory | null;
    concepts?:            Concept[];
    patternTranslations?: SeriesTranslations | null;
    doorDeco?:            boolean;
    uses?:                number;
    stackSize?:           number;
}

export enum KitType {
    Normal = "Normal",
    Pumpkin = "Pumpkin",
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
