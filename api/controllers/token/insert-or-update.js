module.exports = {


  friendlyName: 'Insert or update',


  description: '',


  inputs: {

  },


  exits: {
    success:{
      viewTemplatePath: 'pages/homepage'
    }

  },


  fn: async function () {

    console.log('Running code from action token/insert-or-update.js ');

    // code to insert or update token when visiting homepage
    const tokenPricesURL = 'https://ocean.defichain.com/v0/mainnet/prices?size=150';

    //npm install got@7.1.0 use this old version to use require...
    const got = require('got');




    //TODO use this code to be more readable
    /*try{
      const response = await got(tokenPricesURL, {json: true})

      let tokenData = response.body.data

      tokenData =  await sails.helpers.filterTokenData.with({ tokenData });

      //const tokens = response.body.data

    }catch (error) {
      console.log(error);
    }*/

    //TODO make an onther action
    await got(tokenPricesURL,{ json: true } ).then( async response => {
      const tokens = response.body.data;


      for (const token of await tokens) {

        let criteria = { symbol: token.id };
        let values = {
          type: getTokenType(token.id),
          symbol: token.id,
          name: token.price.token,
          currency: token.price.currency,
          price: Math.round(token.price.aggregated.amount * 100) / 100
        };
        // update token or insert token which is not in database

        //TODO exeption handling
        await sails.helpers.tokenUpdateOrCreate( criteria, values );


      }
    }).catch( error => {
      console.log(error) ;
    });
    // All done.

    function getTokenType(tokenSymbol){
      let lookUpType = {
        'TSLA-USD': 'stock',
        'GOOGL-USD': 'stock',
        'GME-USD': 'stock',
        'FB-USD': 'stock',
        'COIN-USD': 'stock',
        'AMZN-USD': 'stock',
        'AMD-USD': 'stock',
        'AAPL-USD': 'stock',
        'TWTR-USD': 'stock',
        'UBER-USD': 'stock',
        'OTGLY-USD': 'stock',
        'NVDA-USD': 'stock',
        'MSTR-USD': 'stock',
        'SQNXF-USD': 'stock',
        'URA-USD': 'etf',
        'IBM-USD': 'stock',
        'GSG-USD': 'etf',
        'VOO-USD': 'etf',
        'VNQ-USD': 'etf',
        'V-USD': 'etf',
        'URTH-USD': 'etf',
        'U-USD': 'etf',
        'TTWO-USD': 'stock',
        'TLT-USD': 'stock',
        'TLRY-USD': 'stock',
        'TCEHY-USD': 'stock',
        'SQ-USD': 'stock',
        'SPY-USD': 'etf',
        'SOXX-USD': 'etf',
        'SOXL-USD': 'etf',
        'SNAP-USD': 'stock',
        'SLV-USD': 'etf',
        'SI-USD': 'etf',
        'SEDG-USD': 'stock',
        'RIOT-USD': 'stock',
        'RBLX-USD': 'stock',
        'QQQ-USD': 'etf',
        'PYPL-USD': 'stock',
        'PLTR-USD': 'stock',
        'PDBC-USD': 'stock',
        'PATH-USD': 'stock',
        'NSRGY-USD': 'stock',
        'NLLSF-USD': 'stock',
        'NFLX-USD': 'stock',
        'MSFT-USD': 'stock',
        'MCHI-USD': 'etf',
        'MARA-USD': 'stock',
        'MA-USD': 'stock',
        'LZAGY-USD': 'stock',
        'KRBN-USD': 'etf',
        'INTC-USD': 'stock',
        'GLO-USD': 'stock',
        'GLD-USD': 'commodity',
        'EEM-USD': 'etf',
        'DIS-USD': 'etf',
        'CQQQ-USD': 'etf',
        'BYDDF-USD': 'stock',
        'BABA-USD': 'stock',
        'ARKX-USD': 'etf',
        'ARKW-USD': 'etf',
        'ARKQ-USD': 'etf',
        'ARKK-USD': 'etf',
        'ARKG-USD': 'etf',
        'ARKF-USD': 'etf',
        'UUUU-USD': 'stock',
        'UL-USD': 'stock',
        'SAP-USD': 'stock',
        'PG-USD': 'stock',
        'PAAS-USD': 'stock',
        'NVS-USD': 'stock',
        'KO-USD': 'stock',
        'GOLD-USD': 'commodity',
        'EZA-USD': 'etf',
        'EBAY-USD': 'stock',
        'CS-USD': 'stock',
        'CCJ-USD': 'stock',
        'BRK.B-USD': 'stock',
        'ANGPY-USD': 'stock',
        'ADDYY-USD': 'stock',
        'NTDOF-USD': 'stock',
        'XOM-USD': 'stock',
        'WNDY-USD': 'stock',
        'WMT-USD': 'stock',
        'VTIP-USD': 'etf',
        'VIXY-USD': 'etf',
        'TSM-USD': 'stock',
        'TAN-USD': 'crypto',
        'T-USD': 'crypto',
        'STIP-USD': 'etf',
        'SHY-USD': 'etf',
        'SHV-USD': 'etf',
        'RAYS-USD': 'crypto',
        'PPLT-USD': 'etf',
        'PFE-USD': 'stock',
        'KLNE-USD': 'etf',
        'JNJ-USD': 'stock',
        'IEI-USD': 'etf',
        'ICE-USD': 'crypto',
        'HYDR-USD': 'etf',
        'HDRO-USD': 'etf',
        'GS-USD': 'etf',
        'GOVT-USD': 'etf',
        'F-USD': 'crypto',
        'ESPO-USD': 'etf',
        'DAX-USD': 'etf',
        'XLY-USD': 'etf',
        'XLU-USD': 'etf',
        'XLRE-USD': 'etf',
        'XLP-USD': 'etf',
        'XLK-USD': 'etf',
        'XLI-USD': 'etf',
        'XLF-USD': 'etf',
        'XLE-USD': 'etf',
        'VBR-USD': 'etf',
        'VBK-USD': 'etf',
        'UUP-USD': 'etf',
        'USO-USD': 'etf',
        'UNG-USD': 'commodity',
        'MOO-USD': 'stock',
        'FPI-USD': 'stock',
        'EUO-USD': 'crypto',
        'SOXS-USD': 'stock',
        'TQQQ-USD': 'etf',
        'SQQQ-USD': 'etf',
        'LTC-USD': 'crypto',
        'ETH-USD': 'crypto',
        'DOGE-USD': 'crypto',
        'BTC-USD': 'crypto',
        'BCH-USD': 'crypto',
        'XPL-USD': 'stock',
        'CORN-USD': 'etf',
        'USDC-USD': 'stock',
        'DFI-USD': 'stock',
        'SGD-USD': 'crypto',
        'EUR-USD': 'stock',
        'XAU-USD': 'etf',
        'XAG-USD': 'commodity',
        'USDT-USD': 'stock',
        'XCU-USD': 'stock',
        'BCO-USD': 'stock'
      }
      return lookUpType[tokenSymbol] ?? 'N/A'
    }
  }
};



