export interface ApiPriceResponse {
    DISPLAY: CurrencyTransaction;
}

export interface CurrencyTransaction {
    [key: string]: CurrencyChange;
}

interface CurrencyChange {
    [key: string]: PriceData;
}


export interface PriceData {
    FROMSYMBOL: string;
    TOSYMBOL: string;
    MARKET: string;
    PRICE: string;
    LASTUPDATE: string;
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
    CONVERSIONTYPE: string;
    CONVERSIONSYMBOL: string;
    CONVERSIONLASTUPDATE: string;
    SUPPLY: string;
    MKTCAP: string;
    MKTCAPPENALTY: string;
    CIRCULATINGSUPPLY: string;
    CIRCULATINGSUPPLYMKTCAP: string;
    TOTALVOLUME24H: string;
    TOTALVOLUME24HTO: string;
    TOTALTOPTIERVOLUME24H: string;
    TOTALTOPTIERVOLUME24HTO: string;
    IMAGEURL: string;
}