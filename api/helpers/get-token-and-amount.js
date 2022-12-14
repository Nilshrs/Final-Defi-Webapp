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
    let tokenData = [];

    // Loop through the transactions
    for (const transaction of transactions) {
      // Find the token associated with the current transaction
      // eslint-disable-next-line no-undef
      let token = await Token.findOne({id: transaction.token});
      //console.log(token);
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

    // eslint-disable-next-line no-undef
    const toDelete = new Set();
    let totalProfit = 0;

    // Loop through the tokens and calculate their profit in USD and percent
    tokenData.forEach( (token, index) => {
      let tokenMap = dataByTokenSymbol.get(token.symbol);

      totalProfit += Number((tokenMap.currentValue -tokenMap.buyValue).toFixed(2));

      if(tokenMap.amount === 0) {
        toDelete.add(token.id);
      }else {

        //console.log(tokenMap);
        token['amount'] = Number(tokenMap.amount.toFixed(2));
        token['currentValue'] = Number(tokenMap.currentValue.toFixed(2));
        token['profitInUSD'] = Number((tokenMap.currentValue -tokenMap.buyValue).toFixed(2));
        token['profitInPercent'] =Number( ((tokenMap.currentValue - tokenMap.buyValue) / tokenMap.currentValue * 100).toFixed(2));
      } });

    tokenData = tokenData.filter(token => !toDelete.has(token.id));

    tokenData[0]['totalProfit'] = Number(totalProfit.toFixed(2));

    return (tokenData);
  }
};

