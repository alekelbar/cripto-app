import axios from "axios";

export const apiBase = axios.create({
    baseURL: "https://min-api.cryptocompare.com/"
})

export interface CurrencyApiResponse {
    Message: string;
    Type: number;
    MetaData: MetaData;
    SponsoredData: any[];
    Data: Datum[];
    RateLimit: RateLimit;
    HasWarning: boolean;
}

export interface Datum {
    CoinInfo: CoinInfo;
    RAW: Raw;
    DISPLAY: Display;
}

export interface CoinInfo {
    Id: string;
    Name: string;
    FullName: string;
    Internal: string;
    ImageUrl: string;
    Url: string;
    Algorithm: string;
    ProofType: string;
    Rating: Rating;
    NetHashesPerSecond: number;
    BlockNumber: number;
    BlockTime: number;
    BlockReward: number;
    AssetLaunchDate: Date;
    MaxSupply: number;
    Type: number;
    DocumentType: DocumentType;
}

export enum DocumentType {
    Webpagecoinp = "Webpagecoinp",
}

export interface Rating {
    Weiss: Weiss;
}

export interface Weiss {
    Rating: string;
    TechnologyAdoptionRating: string;
    MarketPerformanceRating: string;
}

export interface Display {
    USD: DisplayUsd;
}

export interface DisplayUsd {
    FROMSYMBOL: string;
    TOSYMBOL: PurpleTOSYMBOL;
    MARKET: PurpleMARKET;
    PRICE: string;
    LASTUPDATE: Lastupdate;
    LASTVOLUME: string;
    LASTVOLUMETO: string;
    LASTTRADEID: string;
    VOLUMEDAY: string;
    VOLUMEDAYTO: string;
    VOLUME24HOUR: string;
    VOLUME24HOURTO: string;
    OPENDAY: string;
    HIGHDAY: string;
    LOWDAY: string;
    OPEN24HOUR: string;
    HIGH24HOUR: string;
    LOW24HOUR: string;
    LASTMARKET: string;
    VOLUMEHOUR: string;
    VOLUMEHOURTO: string;
    OPENHOUR: string;
    HIGHHOUR: string;
    LOWHOUR: string;
    TOPTIERVOLUME24HOUR: string;
    TOPTIERVOLUME24HOURTO: string;
    CHANGE24HOUR: string;
    CHANGEPCT24HOUR: string;
    CHANGEDAY: string;
    CHANGEPCTDAY: string;
    CHANGEHOUR: string;
    CHANGEPCTHOUR: string;
    CONVERSIONTYPE: Conversiontype;
    CONVERSIONSYMBOL: Conversionsymbol;
    CONVERSIONLASTUPDATE: Lastupdate;
    SUPPLY: string;
    MKTCAP: string;
    MKTCAPPENALTY: Mktcappenalty;
    CIRCULATINGSUPPLY: string;
    CIRCULATINGSUPPLYMKTCAP: string;
    TOTALVOLUME24H: string;
    TOTALVOLUME24HTO: string;
    TOTALTOPTIERVOLUME24H: string;
    TOTALTOPTIERVOLUME24HTO: string;
    IMAGEURL: string;
}

export enum Lastupdate {
    JustNow = "Just now",
    The1HourAgo = "1 hour ago",
}

export enum Conversionsymbol {
    Empty = "",
    Eth = "ETH",
}

export enum Conversiontype {
    Direct = "direct",
    Multiply = "multiply",
}

export enum PurpleMARKET {
    CryptoCompareIndex = "CryptoCompare Index",
}

export enum Mktcappenalty {
    The0 = "0 %",
}

export enum PurpleTOSYMBOL {
    Empty = "$",
}

export interface Raw {
    USD: RawUsd;
}

export interface RawUsd {
    TYPE: string;
    MARKET: FluffyMARKET;
    FROMSYMBOL: string;
    TOSYMBOL: FluffyTOSYMBOL;
    FLAGS: string;
    PRICE: number;
    LASTUPDATE: number;
    MEDIAN: number;
    LASTVOLUME: number;
    LASTVOLUMETO: number;
    LASTTRADEID: string;
    VOLUMEDAY: number;
    VOLUMEDAYTO: number;
    VOLUME24HOUR: number;
    VOLUME24HOURTO: number;
    OPENDAY: number;
    HIGHDAY: number;
    LOWDAY: number;
    OPEN24HOUR: number;
    HIGH24HOUR: number;
    LOW24HOUR: number;
    LASTMARKET: string;
    VOLUMEHOUR: number;
    VOLUMEHOURTO: number;
    OPENHOUR: number;
    HIGHHOUR: number;
    LOWHOUR: number;
    TOPTIERVOLUME24HOUR: number;
    TOPTIERVOLUME24HOURTO: number;
    CHANGE24HOUR: number;
    CHANGEPCT24HOUR: number;
    CHANGEDAY: number;
    CHANGEPCTDAY: number;
    CHANGEHOUR: number;
    CHANGEPCTHOUR: number;
    CONVERSIONTYPE: Conversiontype;
    CONVERSIONSYMBOL: Conversionsymbol;
    CONVERSIONLASTUPDATE: number;
    SUPPLY: number;
    MKTCAP: number;
    MKTCAPPENALTY: number;
    CIRCULATINGSUPPLY: number;
    CIRCULATINGSUPPLYMKTCAP: number;
    TOTALVOLUME24H: number;
    TOTALVOLUME24HTO: number;
    TOTALTOPTIERVOLUME24H: number;
    TOTALTOPTIERVOLUME24HTO: number;
    IMAGEURL: string;
}

export enum FluffyMARKET {
    Cccagg = "CCCAGG",
}

export enum FluffyTOSYMBOL {
    Usd = "USD",
}

export interface MetaData {
    Count: number;
}

export interface RateLimit {
}
