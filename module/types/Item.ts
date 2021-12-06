export interface Item {
    sourceSheet:           ItemSourceSheet;
    name:                  string;
    image?:                string;
    variation?:            null;
    bodyTitle?:            null | string;
    pattern?:              null;
    patternTitle?:         null;
    diy?:                  boolean;
    bodyCustomize?:        boolean;
    patternCustomize?:     boolean;
    stackSize?:            number;
    kitCost?:              number | null;
    kitType?:              null;
    cyrusCustomizePrice?:  null;
    buy:                   number | null;
    sell?:                 number | null;
    size?:                 Size;
    surface?:              boolean;
    exchangePrice?:        number | null;
    exchangeCurrency?:     ExchangeCurrency | null;
    source?:               string[];
    sourceNotes?:          string[] | null;
    seasonEvent?:          null | string;
    seasonEventExclusive?: boolean | null;
    hhaBasePoints?:        number;
    hhaCategory?:          HhaCategory | null;
    interact?:             boolean | InteractEnum;
    tag?:                  string;
    outdoor?:              boolean;
    speakerType?:          null | string;
    lightingType?:         LightingType | null;
    foodPower?:            number | null;
    catalog?:              Catalog | null;
    versionAdded?:         VersionAdded;
    unlocked?:             boolean;
    filename?:             string;
    variantId?:            null;
    internalId?:           number;
    uniqueEntryId?:        string;
    seriesTranslations?:   SeriesTranslations;
    translations:          Translations | null;
    colors?:               Color[];
    concepts?:             Concept[];
    set?:                  null | string;
    series?:               Series | null;
    recipe:                Recipe | null;
    themesTranslations?:   ThemesTranslations;
    villagerEquippable?:   boolean;
    seasonalAvailability?: SeasonalAvailability;
    type?:                 Type;
    variations?:           VariationElement[];
    styles?:               Style[];
    themes?:               Series[];
    closetImage?:          null | string;
    storageImage?:         null | string;
    seasonality?:          SeasonalAvailability;
    mannequinSeason?:      SeasonalAvailability | null;
    gender?:               Gender;
    villagerGender?:       Gender;
    sortOrder?:            number;
    clothGroupId?:         number;
    customize?:            boolean;
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
    version?:              string;
    framedImage?:          null | string;
    albumImage?:           null | string;
    inventoryImage?:       null | string;
    inventoryFilename?:    string;
    storageFilename?:      string;
    sizeCategory?:         SizeCategory;
    primaryShape?:         PrimaryShape;
    secondaryShape?:       SecondaryShape;
    vfx?:                  boolean;
    doorDeco?:             boolean;
    vfxType?:              VfxType | null;
    windowType?:           WindowType | null;
    windowColor?:          WindowColor | null;
    paneType?:             PaneType | null;
    curtainType?:          CurtainType | null;
    curtainColor?:         null | string;
    ceilingType?:          CeilingType;
    uses?:                 number | string;
    fossilGroup?:          string;
    description?:          string[];
    museum?:               Museum;
    highResTexture?:       null | string;
    genuine?:              boolean;
    category?:             Category;
    realArtworkTitle?:     string;
    artist?:               string;
    soundType?:            SoundType;
}

export enum Catalog {
    ForSale = "For sale",
    NotForSale = "Not for sale",
    Seasonal = "Seasonal",
}

export enum Category {
    Equipment = "Equipment",
    Floors = "Floors",
    Housewares = "Housewares",
    Miscellaneous = "Miscellaneous",
    Other = "Other",
    Rugs = "Rugs",
    Savory = "Savory",
    Sweet = "Sweet",
    Tools = "Tools",
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
    AmusementPark = "amusement park",
    Ancient = "ancient",
    ApparelShop = "apparel shop",
    Arcade = "arcade",
    Bathroom = "bathroom",
    Café = "café",
    ChildSRoom = "child's room",
    CityLife = "city life",
    Concert = "concert",
    ConstructionSite = "construction site",
    Den = "den",
    European = "European",
    Expensive = "expensive",
    Facility = "facility",
    Fancy = "fancy",
    Fantasy = "fantasy",
    Fitness = "fitness",
    FreezingCold = "freezing cold",
    Garden = "garden",
    Harmonious = "harmonious",
    Heritage = "heritage",
    Horror = "horror",
    Hospital = "hospital",
    Kitchen = "kitchen",
    Lab = "lab",
    LivingRoom = "living room",
    Local = "local",
    Music = "music",
    Nature = "nature",
    Ocean = "ocean",
    Office = "office",
    Outdoors = "outdoors",
    Park = "park",
    Party = "party",
    PublicBath = "public bath",
    Resort = "resort",
    Restaurant = "restaurant",
    Retro = "retro",
    School = "school",
    SciFi = "sci-fi",
    Shop = "shop",
    Space = "space",
    Sports = "sports",
    Stylish = "stylish",
    Supermarket = "supermarket",
    Workshop = "workshop",
}

export enum CurtainType {
    Curtains = "Curtains",
    RollerShades = "Roller Shades",
    SlattedBlinds = "Slatted Blinds",
}

export enum ExchangeCurrency {
    Bells = "Bells",
    HeartCrystals = "Heart Crystals",
    NookMiles = "Nook Miles",
    NookPoints = "Nook Points",
    Poki = "Poki",
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
    Food = "Food",
    Kitchen = "Kitchen",
    Lighting = "Lighting",
    MusicalInstrument = "MusicalInstrument",
    Pet = "Pet",
    Plant = "Plant",
    SmallGoods = "SmallGoods",
    Trash = "Trash",
    Tv = "TV",
}

export enum InteractEnum {
    Bed = "Bed",
    Chair = "Chair",
    Kitchenware = "Kitchenware",
    Mirror = "Mirror",
    MusicPlayer = "Music Player",
    MusicalInstrument = "Musical Instrument",
    Storage = "Storage",
    Toilet = "Toilet",
    Trash = "Trash",
    Tv = "TV",
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
    SummerWinter = "Summer; Winter",
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
    Balloonemm = "Balloonemm",
    Box = "Box",
    Dress = "Dress",
    Kimono = "Kimono",
    Marinesuit = "Marinesuit",
    Overall = "Overall",
    Rib = "Rib",
    Robe = "Robe",
    Salopette = "Salopette",
    Salopetteemm = "Salopetteemm",
}

export interface Recipe {
    sourceSheet:           RecipeSourceSheet;
    name:                  string;
    image:                 string;
    imageSh:               null | string;
    buy:                   number;
    sell:                  number | null;
    exchangePrice:         number | null;
    exchangeCurrency:      ExchangeCurrency | null;
    source:                string[];
    sourceNotes:           string[] | null;
    seasonEvent:           null | string;
    seasonEventExclusive:  boolean | null;
    versionAdded:          VersionAdded;
    unlocked:              boolean;
    recipesToUnlock:       number;
    category:              Category;
    craftedItemInternalId: number;
    cardColor:             null | string;
    diyIconFilename:       string;
    diyIconFilenameSh:     null | string;
    serialId:              number;
    internalId:            number;
    uniqueEntryId:         string;
    materials:             { [key: string]: number };
    materialsTranslations: { [key: string]: PatternTranslations | null };
}

export interface PatternTranslations {
    sourceSheet?: PatternTranslationsSourceSheet;
    id?:          number;
    eUde:         string;
    eUen:         string;
    eUit:         string;
    eUnl:         string;
    eUru:         string;
    eUfr:         string;
    eUes:         string;
    uSen:         string;
    uSfr:         string;
    uSes:         string;
    jPja:         string;
    kRko:         string;
    tWzh:         string;
    cNzh:         string;
    plural?:      boolean;
}

export enum PatternTranslationsSourceSheet {
    AccessoriesVariants = "Accessories Variants",
    BagsVariants = "Bags Variants",
    CapsVariants = "Caps Variants",
    DressUpVariants = "Dress-Up Variants",
    EventItems = "Event Items",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    HandbagsVariants = "Handbags Variants",
    HelmetsVariants = "Helmets Variants",
    ItemPatternNames = "Item Pattern Names",
    ItemVariantNames = "Item Variant Names",
    Plants = "Plants",
    Shells = "Shells",
    Tools = "Tools",
    TopsVariants = "Tops Variants",
}

export enum RecipeSourceSheet {
    Recipes = "Recipes",
}

export enum VersionAdded {
    The100 = "1.0.0",
    The110 = "1.1.0",
    The1100 = "1.10.0",
    The1110 = "1.11.0",
    The120 = "1.2.0",
    The130 = "1.3.0",
    The140 = "1.4.0",
    The150 = "1.5.0",
    The160 = "1.6.0",
    The170 = "1.7.0",
    The180 = "1.8.0",
    The190 = "1.9.0",
    The200 = "2.0.0",
}

export enum SecondaryShape {
    H = "H",
    L = "L",
    N = "N",
}

export enum Series {
    Antique = "antique",
    Bamboo = "bamboo",
    BunnyDay = "Bunny Day",
    Cardboard = "cardboard",
    CherryBlossoms = "cherry blossoms",
    Cinnamoroll = "Cinnamoroll",
    Comfy = "comfy",
    Cool = "cool",
    Cute = "cute",
    Diner = "diner",
    Dreamy = "dreamy",
    Elegant = "elegant",
    Everyday = "everyday",
    FairyTale = "fairy tale",
    Festivale = "Festivale",
    Festive = "festive",
    Flowers = "flowers",
    Formal = "formal",
    Frozen = "frozen",
    Fruits = "fruits",
    Golden = "golden",
    Goth = "goth",
    HelloKitty = "Hello Kitty",
    Imperial = "imperial",
    Iron = "iron",
    Ironwood = "ironwood",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    Log = "log",
    Mario = "Mario",
    Mermaid = "mermaid",
    Moroccan = "Moroccan",
    Motherly = "motherly",
    Mush = "mush",
    MyMelody = "My Melody",
    Nordic = "Nordic",
    Outdoorsy = "outdoorsy",
    Party = "party",
    Patchwork = "patchwork",
    Pirate = "pirate",
    Plaza = "plaza",
    Pompompurin = "Pompompurin",
    Ranch = "ranch",
    Rattan = "rattan",
    Shell = "shell",
    Simple = "simple",
    Sloppy = "sloppy",
    Spooky = "spooky",
    Sporty = "sporty",
    Stars = "stars",
    Theatrical = "theatrical",
    Throwback = "throwback",
    TreeSBountyOrLeaves = "tree's bounty or leaves",
    TurkeyDay = "Turkey Day",
    Vacation = "vacation",
    Vintage = "vintage",
    Wedding = "wedding",
    Wooden = "wooden",
    WoodenBlock = "wooden block",
    Work = "work",
}

export interface SeriesTranslations {
    sourceSheet: SeriesTranslationsSourceSheet;
    id:          ID;
    eUde:        EUde;
    eUen:        Series;
    eUit:        EUit;
    eUnl:        EUnl;
    eUru:        EUru;
    eUfr:        EUfr;
    eUes:        EUes;
    uSen:        Series;
    uSfr:        EUfr;
    uSes:        EUes;
    jPja:        JPja;
    kRko:        KRko;
    tWzh:        TWzh;
    cNzh:        CNzh;
    plural:      boolean;
}

export enum CNzh {
    Cinnamoroll = "Cinnamoroll",
    HelloKitty = "Hello Kitty",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    MyMelody = "My Melody",
    Pompompurin = "Pompompurin",
    万圣节 = "万圣节",
    东方风 = "东方风",
    乡村 = "乡村",
    人鱼 = "人鱼",
    休闲 = "休闲",
    优雅 = "优雅",
    冰块 = "冰块",
    北欧风 = "北欧风",
    古董 = "古董",
    可爱 = "可爱",
    圆木 = "圆木",
    圣诞节 = "圣诞节",
    复活节 = "复活节",
    妈妈 = "妈妈",
    婚礼 = "婚礼",
    工作 = "工作",
    广场 = "广场",
    度假 = "度假",
    怀旧 = "怀旧",
    恐怖 = "恐怖",
    感恩节 = "感恩节",
    户外 = "户外",
    拼布 = "拼布",
    摩洛哥 = "摩洛哥",
    日常 = "日常",
    星星 = "星星",
    木制 = "木制",
    树果落叶 = "树果·落叶",
    梦幻可爱 = "梦幻可爱",
    樱花 = "樱花",
    正式 = "正式",
    水果 = "水果",
    派对 = "派对",
    海盗 = "海盗",
    狂欢节 = "狂欢节",
    玩具 = "玩具",
    积木 = "积木",
    童话世界 = "童话世界",
    竹子 = "竹子",
    简约 = "简约",
    纸箱 = "纸箱",
    美式复古 = "美式复古",
    舞台 = "舞台",
    花 = "花",
    藤编 = "藤编",
    蘑菇 = "蘑菇",
    贝壳 = "贝壳",
    运动 = "运动",
    邋遢 = "邋遢",
    酷感 = "酷感",
    铸铁 = "铸铁",
    铸铁木 = "铸铁木",
    马力欧 = "马力欧",
    黄金 = "黄金",
}

export enum EUde {
    Alltagskleidung = "Alltagskleidung",
    Antik = "Antik",
    Arbeitskleidung = "Arbeitskleidung",
    Asiatisch = "Asiatisch",
    Bambus = "Bambus",
    Bauklotz = "Bauklotz",
    Baumfrucht = "Baumfrucht",
    Baumstamm = "Baumstamm",
    Blumen = "Blumen",
    Bonbon = "Bonbon",
    Bühnenkleidung = "Bühnenkleidung",
    Cinnamoroll = "Cinnamoroll",
    Cool = "Cool",
    Diner = "Diner",
    Edel = "Edel",
    Einfach = "Einfach",
    Eis = "Eis",
    Eisen = "Eisen",
    EisenHolz = "Eisen-Holz",
    Fantasie = "Fantasie",
    Festtag = "Festtag",
    Flecht = "Flecht",
    Formellkleidung = "Formellkleidung",
    Freizeitkleidung = "Freizeitkleidung",
    Gold = "Gold",
    HelloKitty = "Hello Kitty",
    Hochzeit = "Hochzeit",
    Holz = "Holz",
    Horrorkleidung = "Horrorkleidung",
    Häschentag = "Häschentag",
    Karneval = "Karneval",
    Karton = "Karton",
    Keroppi = "Keroppi",
    KikiLala = "Kiki & Lala",
    Kirmes = "Kirmes",
    Kirschblüten = "Kirschblüten",
    Kürbis = "Kürbis",
    Mama = "Mama",
    Mario = "Mario",
    Marokko = "Marokko",
    Muschel = "Muschel",
    MyMelody = "My Melody",
    Märchenkleidung = "Märchenkleidung",
    Nixen = "Nixen",
    Nostalgie = "Nostalgie",
    Obst = "Obst",
    Oldschool = "Oldschool",
    Outdoorkleidung = "Outdoorkleidung",
    Partykleidung = "Partykleidung",
    Patchwork = "Patchwork",
    Pilz = "Pilz",
    Piraten = "Piraten",
    Pompompurin = "Pompompurin",
    Schlamper = "Schlamper",
    Schlemmfest = "Schlemmfest",
    Skandi = "Skandi",
    Sportkleidung = "Sportkleidung",
    Stern = "Stern",
    Urlaubskleidung = "Urlaubskleidung",
    Western = "Western",
}

export enum EUes {
    Adorable = "adorable",
    Antigua = "antigua",
    Años50 = "años 50",
    Bambú = "bambú",
    Boda = "boda",
    Calabaza = "calabaza",
    Carnaval = "Carnaval",
    Cartón = "cartón",
    Casual = "casual",
    CazaDelHuevo = "Caza del Huevo",
    Cinnamoroll = "Cinnamoroll",
    ConchasMarinas = "conchas marinas",
    Construcciones = "construcciones",
    Cosmopolita = "cosmopolita",
    Cuqui = "cuqui",
    DeActividadesAlAireLibre = "de actividades al aire libre",
    DeFantasía = "de fantasía",
    DeFiesta = "de fiesta",
    Deportivo = "deportivo",
    Desenfadado = "desenfadado",
    Desorden = "desorden",
    Dinastía = "dinastía",
    Dorada = "dorada",
    DíaDelPavo = "Día del Pavo",
    Elegante = "elegante",
    Ensueño = "ensueño",
    Escandinava = "escandinava",
    Estrella = "estrella",
    Fantasía = "fantasía",
    Feria = "feria",
    Festiva = "festiva",
    FlorDeCerezo = "flor de cerezo",
    Flores = "flores",
    Formal = "formal",
    Frutal = "frutal",
    FrutosDelBosqueYHojas = "frutos del bosque y hojas",
    Gótico = "gótico",
    HelloKitty = "Hello Kitty",
    Hierro = "hierro",
    Hongo = "hongo",
    Iceberg = "iceberg",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    Leño = "leño",
    Madera = "madera",
    Mamá = "mamá",
    Mario = "Mario",
    Marroquí = "marroquí",
    Mimbre = "mimbre",
    MyMelody = "My Melody",
    Pirata = "pirata",
    Pompompurin = "Pompompurin",
    Profesional = "profesional",
    Ratán = "ratán",
    Retales = "retales",
    Retazos = "retazos",
    Retro = "retro",
    Rústica = "rústica",
    Simple = "simple",
    Sirena = "sirena",
    Teatral = "teatral",
    Todoterreno = "todoterreno",
    Troncos = "troncos",
    Universidad = "universidad",
    Vacacional = "vacacional",
}

export enum EUfr {
    Ancienne = "ancienne",
    Années50 = "années 50",
    Arctique = "arctique",
    Bambou = "bambou",
    Basique = "basique",
    BlocsDeBois = "blocs de bois",
    Bois = "bois",
    BoisDeFer = "bois de fer",
    Carnaval = "Carnaval",
    Carton = "carton",
    Champi = "champi",
    Chic = "chic",
    Cinnamoroll = "Cinnamoroll",
    Cool = "cool",
    Coquillage = "coquillage",
    Courtepointe = "courtepointe",
    Cute = "cute",
    DOr = "d'or",
    DeLaPlace = "de la place",
    DeMaman = "de maman",
    Désert = "désert",
    Fer = "fer",
    Festive = "festive",
    Fleur = "fleur",
    FleurDeCerisier = "fleur de cerisier",
    Frisson = "frisson",
    Fruit = "fruit",
    FruitsDESBoisOuFeuille = "fruits des bois ou feuille",
    FêteDESŒufs = "Fête des œufs",
    FêteDuPartage = "Fête du partage",
    Halloween = "Halloween",
    HelloKitty = "Hello Kitty",
    Impériale = "impériale",
    JoliRêve = "joli rêve",
    Jonc = "jonc",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    Mariage = "mariage",
    Mario = "Mario",
    Marocain = "marocain",
    Mimi = "mimi",
    MyMelody = "My Melody",
    Nostalgie = "nostalgie",
    Négligé = "négligé",
    Patchwork = "patchwork",
    Pirate = "pirate",
    Pompompurin = "Pompompurin",
    Ranch = "ranch",
    Rotin = "rotin",
    Sirène = "sirène",
    Skandi = "skandi",
    Stylé = "stylé",
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
    Tronc = "tronc",
    Vintage = "vintage",
    Élégant = "élégant",
    Étoile = "étoile",
}

export enum EUit {
    Anni50 = "anni '50",
    Bambù = "bambù",
    BlocchiDiLegno = "blocchi di legno",
    Brividi = "brividi",
    CacciaAllUovo = "caccia all'uovo",
    Carnevale = "Carnevale",
    Ciliegio = "ciliegio",
    Cinese = "cinese",
    Cinnamoroll = "Cinnamoroll",
    Conchiglia = "conchiglia",
    Confortevole = "confortevole",
    Country = "country",
    DaAriaAperta = "da aria aperta",
    DaFesta = "da festa",
    DaFiaba = "da fiaba",
    DaFiera = "da fiera",
    DaLavoro = "da lavoro",
    DaSogno = "da sogno",
    DaSport = "da sport",
    DaTeatro = "da teatro",
    DaVacanza = "da vacanza",
    Dorato = "dorato",
    Elegante = "elegante",
    Fantasia = "fantasia",
    Ferro = "ferro",
    FestivalDellePrimizie = "festival delle primizie",
    Festivo = "festivo",
    Fiori = "fiori",
    FioriDArancio = "fiori d'arancio",
    Formale = "formale",
    Frutta = "frutta",
    FruttiDellAlberoEFoglie = "frutti dell'albero e foglie",
    Fungo = "fungo",
    Grazioso = "grazioso",
    HelloKitty = "Hello Kitty",
    Horror = "horror",
    Iceberg = "iceberg",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    Legno = "legno",
    LegnoFerro = "legno ferro",
    Mamma = "mamma",
    Mario = "Mario",
    Marocchino = "marocchino",
    MyMelody = "My Melody",
    Patchwork = "patchwork",
    PerTuttiIGiorni = "per tutti i giorni",
    Pirata = "pirata",
    Pompompurin = "Pompompurin",
    Rattan = "rattan",
    Scandinavo = "scandinavo",
    Scatolone = "scatolone",
    Semplice = "semplice",
    Sirena = "sirena",
    Spavaldo = "spavaldo",
    Stella = "stella",
    Trasandato = "trasandato",
    Tronco = "tronco",
    Vecchio = "vecchio",
    VecchioStile = "vecchio stile",
}

export enum EUnl {
    AlledaagsThema = "alledaags thema",
    AntiekeStijl = "antieke stijl",
    Bamboestijl = "bamboestijl",
    Bloemenstijl = "bloemenstijl",
    Boerenstijl = "boerenstijl",
    Boomstamstijl = "boomstamstijl",
    Carnavalsstijl = "carnavalsstijl",
    Cinnamoroll = "Cinnamoroll",
    DromerigeStijl = "dromerige stijl",
    Eierstijl = "eierstijl",
    EleganteStijl = "elegante stijl",
    Feeststijl = "feeststijl",
    Feestthema = "feestthema",
    FormeelThema = "formeel thema",
    Fruitstijl = "fruitstijl",
    GoudenStijl = "gouden stijl",
    Griezelthema = "griezelthema",
    Halloweenstijl = "halloweenstijl",
    HelloKitty = "Hello Kitty",
    HerfstEnBladerenstijl = "herfst- en bladerenstijl",
    Houtblokstijl = "houtblokstijl",
    HoutenStijl = "houten stijl",
    Ijsstijl = "ijsstijl",
    IjzerenHoutenStijl = "ijzeren-houten stijl",
    IjzerenStijl = "ijzeren stijl",
    Jaren50Stijl = "jaren 50-stijl",
    KartonnenStijl = "kartonnen stijl",
    KeizerlijkeStijl = "keizerlijke stijl",
    Kermisstijl = "kermisstijl",
    Kerokerokeroppi = "Kerokerokeroppi",
    Kersenbloesemstijl = "kersenbloesemstijl",
    KikiLala = "Kiki & Lala",
    MamaStijl = "mama-stijl",
    MarioStijl = "Mario-stijl",
    MarokkaanseStijl = "Marokkaanse stijl",
    Meerminnenstijl = "meerminnenstijl",
    MyMelody = "My Melody",
    Paddenstoelenstijl = "paddenstoelenstijl",
    PatchworkStijl = "patchwork stijl",
    Piratenstijl = "piratenstijl",
    Podiumthema = "podiumthema",
    Pompompurin = "Pompompurin",
    RommeligeStijl = "rommelige stijl",
    Rotanstijl = "rotanstijl",
    ScandinavischeStijl = "Scandinavische stijl",
    SchattigeStijl = "schattige stijl",
    Schelpenstijl = "schelpenstijl",
    Smakenfestijnstijl = "smakenfestijnstijl",
    SobereStijl = "sobere stijl",
    Speelgoedstijl = "speelgoedstijl",
    Sportthema = "sportthema",
    Sprookjesthema = "sprookjesthema",
    Sterrenstijl = "sterrenstijl",
    StrakkeStijl = "strakke stijl",
    Trouwstijl = "trouwstijl",
    Vakantiethema = "vakantiethema",
    Vintagestijl = "vintagestijl",
    Vrijetijdsthema = "vrijetijdsthema",
    WeersbestendigThema = "weersbestendig thema",
    Werkthema = "werkthema",
}

export enum EUru {
    Cinnamoroll = "Cinnamoroll",
    HelloKitty = "Hello Kitty",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    MyMelody = "My Melody",
    Pompompurin = "Pompompurin",
    Азия = "Азия",
    Антиквариат = "Антиквариат",
    Бамбук = "Бамбук",
    Бистро = "Бистро",
    Бревна = "Бревна",
    Винтаж = "Винтаж",
    ВишняВЦвету = "Вишня в цвету",
    ГлавнаяПлощадь = "Главная площадь",
    Готический = "готический",
    Грезы = "Грезы",
    Грибы = "Грибы",
    ДСПИСталь = "ДСП и сталь",
    ДарыЛеса = "Дары леса",
    ДеньЗайцев = "День зайцев",
    ДеньИзобилия = "День изобилия",
    Дерево = "Дерево",
    ДеревянныеБлоки = "Деревянные блоки",
    Детство = "Детство",
    Железо = "Железо",
    Звезды = "Звезды",
    Золото = "Золото",
    Карнавал = "Карнавал",
    Картон = "Картон",
    Лед = "Лед",
    ЛоскутноеРазнообразие = "Лоскутное разнообразие",
    Мама = "Мама",
    Марио = "Марио",
    МарокканскиеМотивы = "Марокканские мотивы",
    МилыеПредметы = "Милые предметы",
    Мода = "Мода",
    Неопрятность = "Неопрятность",
    Отпускной = "отпускной",
    Пират = "Пират",
    Повседневный = "повседневный",
    Походный = "походный",
    Праздник = "Праздник",
    Праздничный = "праздничный",
    Простота = "Простота",
    Рабочий = "рабочий",
    Ракушки = "Ракушки",
    Ранчо = "Ранчо",
    Ротанг = "Ротанг",
    Русалка = "Русалка",
    Свадьба = "Свадьба",
    Скандинавия = "Скандинавия",
    Спортивный = "спортивный",
    Страшилки = "Страшилки",
    Удобный = "удобный",
    Фантазийный = "фантазийный",
    Формальный = "формальный",
    Фрукты = "Фрукты",
    Цветы = "Цветы",
    Элегантность = "Элегантность",
    Эффектный = "эффектный",
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
    The001 = "001",
    The002 = "002",
    The003 = "003",
    The004 = "004",
    The005 = "005",
    The006 = "006",
    The007 = "007",
    The008 = "008",
    The009 = "009",
    The010 = "010",
    The011 = "011",
    The012 = "012",
    The013 = "013",
    The014 = "014",
    The015 = "015",
    The016 = "016",
    The017 = "017",
    The018 = "018",
    The019 = "019",
    The020 = "020",
    The021 = "021",
    The022 = "022",
    The024 = "024",
    The025 = "025",
    The026 = "026",
    The027 = "027",
    The028 = "028",
    The029 = "029",
    The030 = "030",
    The032 = "032",
    The033 = "033",
    The034 = "034",
    The035 = "035",
    The036 = "036",
    The037 = "037",
    The038 = "038",
    The039 = "039",
    The040 = "040",
    The042 = "042",
    The044 = "044",
    The045 = "045",
    The046 = "046",
    The047 = "047",
    The048 = "048",
    The049 = "049",
    The050 = "050",
    The052 = "052",
    The053 = "053",
    The054 = "054",
    Vacation = "Vacation",
    Work = "Work",
}

export enum JPja {
    Toy = "TOY",
    おうごん = "おうごん",
    お仕事 = "お仕事",
    かいがら = "かいがら",
    かいぞく = "かいぞく",
   'きのみ・おちば'= "きのみ・おちば",
    けろけろけろっぴ = "けろけろけろっぴ",
    こおり = "こおり",
    さくら = "さくら",
    たけ = "たけ",
    だらしない = "だらしない",
    つみき = "つみき",
    はな = "はな",
    はは = "はは",
    ひろば = "ひろば",
    ほし = "ほし",
    まるた = "まるた",
    もくせい = "もくせい",
    ゆめかわ = "ゆめかわ",
    アイアン = "アイアン",
    アイアンウッド = "アイアンウッド",
    アウトドア = "アウトドア",
    アンティーク = "アンティーク",
    イースター = "イースター",
    ウェディング = "ウェディング",
    エレガント = "エレガント",
    オリエンタル = "オリエンタル",
    カントリー = "カントリー",
    カーニバル = "カーニバル",
    キキララ = "キキ&ララ",
    キノコ = "キノコ",
    キュート = "キュート",
    クリスマス = "クリスマス",
    クール = "クール",
    サンクスギビング = "サンクスギビング",
    シナモロール = "シナモロール",
    シンプル = "シンプル",
    ステージ = "ステージ",
    スポーツ = "スポーツ",
    ダイナー = "ダイナー",
    ダンボール = "ダンボール",
    デイリー = "デイリー",
    ノルディック = "ノルディック",
    ハロウィン = "ハロウィン",
    ハローキティ = "ハローキティ",
    バカンス = "バカンス",
    パッチワーク = "パッチワーク",
    パーティー = "パーティー",
    フォーマル = "フォーマル",
    フルーツ = "フルーツ",
    ホラー = "ホラー",
    ポムポムプリン = "ポムポムプリン",
    マイメロディ = "マイメロディ",
    マリオ = "マリオ",
    マーメイド = "マーメイド",
    メルヘン = "メルヘン",
    モロッカン = "モロッカン",
    ラタン = "ラタン",
    リラックス = "リラックス",
    ヴィンテージ = "ヴィンテージ",
}

export enum KRko {
    Toy = "TOY",
    광장 = "광장",
    꽃 = "꽃",
    나무블록 = "나무블록",
    나무열매낙엽 = "나무 열매/낙엽",
    노르딕 = "노르딕",
    다이너 = "다이너",
    대나무 = "대나무",
    데일리 = "데일리",
    드림큐트 = "드림 큐트",
    라탄 = "라탄",
    리틀트윈스타 = "리틀트윈스타",
    릴랙스 = "릴랙스",
    마리오 = "마리오",
    마이멜로디 = "마이멜로디",
    머메이드 = "머메이드",
    메르헨 = "메르헨",
    모로칸 = "모로칸",
    목제 = "목제",
    바캉스 = "바캉스",
    박스 = "박스",
    버섯 = "버섯",
    벚꽃 = "벚꽃",
    별 = "별",
    비즈니스 = "비즈니스",
    빈티지 = "빈티지",
    스테이지 = "스테이지",
    스포츠 = "스포츠",
    시나모롤 = "시나모롤",
    심플한 = "심플한",
    아웃도어 = "아웃도어",
    아이언 = "아이언",
    아이언우드 = "아이언 우드",
    앤티크 = "앤티크",
    얼음 = "얼음",
    엄마 = "엄마",
    엘레강스 = "엘레강스",
    오리엔탈 = "오리엔탈",
    웨딩 = "웨딩",
    이스터 = "이스터",
    조개 = "조개",
    칠칠치못한 = "칠칠치 못한",
    카니발 = "카니발",
    컨트리 = "컨트리",
    케로케로케로피 = "케로케로케로피",
    쿨 = "쿨",
    큐트 = "큐트",
    크리스마스 = "크리스마스",
    통나무 = "통나무",
    파티 = "파티",
    패치워크 = "패치워크",
    포멀 = "포멀",
    폼폼푸린 = "폼폼푸린",
    프루트 = "프루트",
    하베스트 = "하베스트",
    할로윈 = "할로윈",
    해적 = "해적",
    헬로키티 = "헬로키티",
    호러 = "호러",
    황금 = "황금",
}

export enum SeriesTranslationsSourceSheet {
    FashionThemes = "Fashion Themes",
    HHAThemes = "HHA Themes",
}

export enum TWzh {
    Cinnamoroll = "Cinnamoroll",
    HelloKitty = "Hello Kitty",
    Kerokerokeroppi = "Kerokerokeroppi",
    KikiLala = "Kiki & Lala",
    MyMelody = "My Melody",
    Pompompurin = "Pompompurin",
    Toy = "TOY",
    人魚 = "人魚",
    優雅 = "優雅",
    冰塊 = "冰塊",
    北歐風 = "北歐風",
    古董 = "古董",
    可愛 = "可愛",
    圓木 = "圓木",
    夢幻可愛 = "夢幻可愛",
    婚禮 = "婚禮",
    媽媽 = "媽媽",
    工作 = "工作",
    度假 = "度假",
    廣場 = "廣場",
    復活節 = "復活節",
    恐怖 = "恐怖",
    悠閒 = "悠閒",
    感恩節 = "感恩節",
    懷舊 = "懷舊",
    戶外活動 = "戶外活動",
    拼布 = "拼布",
    摩洛哥 = "摩洛哥",
    日常生活 = "日常生活",
    星星 = "星星",
    木製 = "木製",
    東方風 = "東方風",
    樹果落葉 = "樹果‧落葉",
    櫻花 = "櫻花",
    正式 = "正式",
    水果 = "水果",
    派對 = "派對",
    海盜 = "海盜",
    狂歡節 = "狂歡節",
    瑪利歐 = "瑪利歐",
    積木 = "積木",
    童話世界 = "童話世界",
    竹子 = "竹子",
    簡約 = "簡約",
    紙箱 = "紙箱",
    聖誕節 = "聖誕節",
    舞台 = "舞台",
    花朵 = "花朵",
    萬聖節 = "萬聖節",
    藤編 = "藤編",
    蘑菇 = "蘑菇",
    貝殼 = "貝殼",
    運動 = "運動",
    邋遢 = "邋遢",
    鄉村 = "鄉村",
    酷感 = "酷感",
    鑄鐵 = "鑄鐵",
    鑄鐵木 = "鑄鐵木",
    餐館 = "餐館",
    黃金 = "黃金",
}

export enum Size {
    The05X1 = "0.5x1",
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
    The3X2 = "3x2",
    The3X3 = "3x3",
    The4X3 = "4x3",
    The4X4 = "4x4",
    The5X5 = "5x5",
}

export enum SizeCategory {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
}

export enum SoundType {
    Crash = "Crash",
    DrumSet = "Drum set",
    HiHat = "Hi-hat",
    Kick = "Kick",
    Melody = "Melody",
    Snare = "Snare",
}

export enum ItemSourceSheet {
    Accessories = "Accessories",
    Artwork = "Artwork",
    Bags = "Bags",
    Bottoms = "Bottoms",
    ClothingOther = "Clothing Other",
    DressUp = "Dress-Up",
    Fencing = "Fencing",
    Floors = "Floors",
    Fossils = "Fossils",
    Gyroids = "Gyroids",
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
    ToolsGoods = "Tools/Goods",
    Tops = "Tops",
    Umbrellas = "Umbrellas",
    WallMounted = "Wall-mounted",
    Wallpaper = "Wallpaper",
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
    party?:        SeriesTranslations;
    everyday?:     SeriesTranslations;
    comfy?:        SeriesTranslations;
    outdoorsy?:    SeriesTranslations;
    vacation?:     SeriesTranslations;
    "fairy tale"?: SeriesTranslations;
    theatrical?:   SeriesTranslations;
    formal?:       SeriesTranslations;
    work?:         SeriesTranslations;
    sporty?:       SeriesTranslations;
    goth?:         SeriesTranslations;
}

export interface Translations {
    sourceSheet: TranslationsSourceSheet;
    id:          number | string;
    eUde:        string;
    eUen:        string;
    eUit:        string;
    eUnl:        string;
    eUru:        string;
    eUfr:        string;
    eUes:        string;
    uSen:        string;
    uSfr:        string;
    uSes:        string;
    jPja:        string;
    kRko:        string;
    tWzh:        string;
    cNzh:        string;
    plural:      boolean;
}

export enum TranslationsSourceSheet {
    Accessories = "Accessories",
    Art = "Art",
    Bags = "Bags",
    Bottoms = "Bottoms",
    BugModels = "Bug Models",
    Caps = "Caps",
    CraftingItems = "Crafting Items",
    Dishes = "Dishes",
    DoorDeco = "Door Deco",
    DressUp = "Dress-Up",
    Etc = "Etc",
    EventItems = "Event Items",
    Fencing = "Fencing",
    FishModels = "Fish Models",
    Floors = "Floors",
    Fossils = "Fossils",
    Furniture = "Furniture",
    Gyroids = "Gyroids",
    Handbags = "Handbags",
    HarvSIslandItems = "Harv's Island Items",
    Helmets = "Helmets",
    ItemPatternTypes = "Item Pattern Types",
    Music = "Music",
    Photos = "Photos",
    Plants = "Plants",
    Posters = "Posters",
    Rugs = "Rugs",
    Shells = "Shells",
    Shoes = "Shoes",
    Socks = "Socks",
    Tools = "Tools",
    Tops = "Tops",
    Turnips = "Turnips",
    Umbrellas = "Umbrellas",
    Wallpaper = "Wallpaper",
    Wetsuits = "Wetsuits",
}

export enum Type {
    AcceEyeMouth = "AcceEyeMouth",
    AccessoryEye = "AccessoryEye",
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

export interface VariationElement {
    closetImage?:         null | string;
    storageImage?:        string;
    variation:            number | null | string;
    exchangePrice?:       number | null;
    exchangeCurrency?:    ExchangeCurrency | null;
    seasonEvent:          null | string;
    seasonEventExclusive: boolean | null;
    seasonality?:         SeasonalAvailability;
    mannequinSeason?:     SeasonalAvailability | null;
    gender?:              Gender;
    villagerGender?:      Gender;
    sortOrder?:           number;
    filename:             string;
    clothGroupId?:        number;
    internalId:           number;
    uniqueEntryId:        string;
    variantTranslations?: PatternTranslations | null;
    colors?:              Color[];
    image?:               string;
    pattern?:             null | string;
    patternTitle?:        null | string;
    kitType?:             KitType | null;
    cyrusCustomizePrice?: number;
    surface?:             boolean;
    hhaCategory?:         HhaCategory | null;
    variantId?:           VariantID;
    concepts?:            Concept[];
    stackSize?:           number;
    foodPower?:           number | null;
    patternTranslations?: PatternTranslations;
    doorDeco?:            boolean;
    soundType?:           SoundType;
    uses?:                number | string;
}

export enum KitType {
    Normal = "Normal",
    Pumpkin = "Pumpkin",
    RainbowFeather = "Rainbow feather",
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
