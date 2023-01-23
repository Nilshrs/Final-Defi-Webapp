module.exports = {


  friendlyName: 'Insert or update',


  description: '',


  inputs: {

  },


  exits: {
    success:{
      description: 'successfully updated or created all tokens '
    },
    noTokenFound: {
      description: 'did not find any token'
    }

  },


  fn: async function () {

    console.log('Running code from action token/insert-or-update.js ');
    const tokenPricesURL = 'https://ocean.defichain.com/v0/mainnet/prices?size=150';

    // Tried "Got" because we wanted to try a different HTTP request library for Node.js
    // used got@7.1.0 because newer versions don't work with require
    const got = require('got');
    let latestTokenData = '';
    let updatedTokenCounter = 0;
    const newToken = [];

    //Get the latest token data from Defichain ocean api
    try {
      const response  = await got(tokenPricesURL, {json: true})
      latestTokenData = response.body.data;
    } catch(error) {
      console.log({error}) ;
    }

    if(latestTokenData.length === 0) {
      throw 'noTokenFound';
    }

    for (const token of latestTokenData) {

      let criteria = { symbol: token.id };
      let values = {
        type: getTokenType(token.id),
        symbol: token.id,
        name: token.price.token,
        currency: token.price.currency,
        price: Number(token.price.aggregated.amount).toFixed(4)
      };

      // update token or insert new token when token not in database
      const TokenValues = await sails.helpers.tokenUpdateOrCreate(criteria, values);
      TokenValues !== 0 ? newToken.push(TokenValues) : updatedTokenCounter++;
    }

    console.log("Updated Token: ", updatedTokenCounter )

    if(newToken.length !== 0) {
      console.log("New Token: ", newToken)
    }else {
      console.log("No new token")
    }

    //returns the corresponding type of the token
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
        'USDC-USD': 'crypto',
        'DFI-USD': 'crypto',
        'SGD-USD': 'crypto',
        'EUR-USD': 'stock',
        'XAU-USD': 'etf',
        'XAG-USD': 'commodity',
        'USDT-USD': 'crypto',
        'XCU-USD': 'stock',
        'BCO-USD': 'stock'
      }
      /*eslint-disable */
      /*eslint-enable */
      return lookUpType[tokenSymbol] ?? 'N/A'
      /*eslint-enable */

    }
  }
};
