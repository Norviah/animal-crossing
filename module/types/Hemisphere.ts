export interface Hemisphere {
    sourceSheet:        SourceSheet;
    from:               string;
    to:                 string;
    days:               number;
    season:             Season;
    shops:              Season;
    vegetation:         string;
    rainSnow:           RainSnow;
    skyEffect:          SkyEffect | null;
    blossoms:           string;
    petalLeafFall:      null | string;
    fog:                Fog | null;
    specialClouds:      SpecialClouds | null;
    seasonalCrafting1:  SeasonalCrafting1;
    seasonalCrafting2?: SeasonalCrafting2;
    translations:       null;
    seasonalCrafting3?: string;
}

export enum Fog {
    RiverSeaFog = "river/sea fog",
    RiverSeaFogHeavyFog = "river/sea fog; heavy fog",
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

export enum SpecialClouds {
    BillowClouds = "billow clouds",
    CirrusCirrocumulus = "cirrus; cirrocumulus",
    Cumulonimbus = "cumulonimbus",
    ThinClouds = "thin clouds",
}
