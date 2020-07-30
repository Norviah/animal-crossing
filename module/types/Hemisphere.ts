export interface Hemisphere {
    sourceSheet:       SourceSheet;
    from:              string;
    to:                string;
    days:              number;
    season:            Season;
    shops:             Season;
    weeds:             string;
    rainSnow:          RainSnow;
    skyEffect:         SkyEffect | null;
    blossoms:          string;
    petalLeafFall:     null | string;
    fog:               Fog[] | null;
    specialClouds:     SpecialCloud[] | null;
    seasonalCrafting1: SeasonalCrafting1;
    seasonalCrafting2: SeasonalCrafting2 | null;
    seasonalCrafting3: null | string;
    translations:      null;
}

export enum Fog {
    HeavyFog = "heavy fog",
    RiverSeaFog = "river/sea fog",
}

export enum RainSnow {
    Rain = "rain",
    Snow = "snow",
    SnowCover = "snow cover",
}

export enum Season {
    Fall = "fall",
    Spring = "spring",
    Summer = "summer",
    Winter = "winter",
}

export enum SeasonalCrafting1 {
    AcornsAndPineCones = "\ud83c\udf32 acorns and pine cones",
    Snowflakes = "❄️ snowflakes",
    SummerShells = "\ud83d\udc1a summer shells",
    YoungSpringBamboo = "\ud83c\udf8b young spring bamboo",
}

export enum SeasonalCrafting2 {
    CherryBlossomPetals = "\ud83c\udf38 cherry-blossom petals",
    Mushrooms = "\ud83c\udf44 mushrooms",
    Ornaments = "\ud83c\udf84 ornaments",
}

export enum SkyEffect {
    Aurora = "aurora",
    Rainbow = "rainbow",
}

export enum SourceSheet {
    NorthernHemisphere = "Northern Hemisphere",
    SouthernHemisphere = "Southern Hemisphere",
}

export enum SpecialCloud {
    BillowClouds = "billow clouds",
    Cirrocumulus = "cirrocumulus",
    Cirrus = "cirrus",
    Cumulonimbus = "cumulonimbus",
    ThinClouds = "thin clouds",
}
