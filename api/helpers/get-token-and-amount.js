module.exports = {


  friendlyName: 'Get token and value',


  description: '',


  inputs: {

    transactions : { type: 'json' }

  },

  exits: {

    success: {
      outputFriendlyName: 'Token and value',
    },

  },

// This function takes an array of transactions and returns information about each transaction
// grouped by token symbol.
  fn: async function ( {transactions} ) {

    // Create a new Map to store information about each token
    // eslint-disable-next-line no-undef
    const dataByTokenSymbol = new Map();
    // Create an array to store information about each token
    const tokenData = [];

    // Loop through the transactions
    for (const transaction of transactions) {
      // Find the token associated with the current transaction
      // eslint-disable-next-line no-undef
      let token = await Token.findOne({id: transaction.token});
      console.log(token);
      // Calculate the current value and buy value for the token
      let currentValue = ( token.price * transaction.amount );
      let buyValue = transaction.value;

      // If we haven't seen this token before, add it to the map
      if (!dataByTokenSymbol.has(token.symbol)) {
        dataByTokenSymbol.set(token.symbol, { amount: transaction.amount, currentValue, buyValue });
        tokenData.push(token);
      }else {
        // If we have seen this token before, update its information in the map
        let data = dataByTokenSymbol.get(token.symbol);
        dataByTokenSymbol.set(token.symbol, {
          amount: data.amount + transaction.amount,
          currentValue: data.currentValue + currentValue,
          buyValue: data.buyValue + buyValue
        });
      }
    }
    // Loop through the tokens and calculate their profit in USD and percent
    tokenData.forEach( token => {
      let tokenMap = dataByTokenSymbol.get(token.symbol);
      console.log(tokenMap);
      token['amount'] = tokenMap.amount;
      token['currentValue'] = tokenMap.currentValue;
      token['profitInUSD'] = Number((tokenMap.currentValue -tokenMap.buyValue).toFixed(2));
      token['profitInPercent'] =Number( ((tokenMap.currentValue - tokenMap.buyValue) / tokenMap.currentValue * 100).toFixed(2));
    } );

    console.log(tokenData);

    return ( tokenData );
  }
};

