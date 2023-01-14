module.exports = {


  friendlyName: 'Get token and value',


  description: 'Returns information about each transaction grouped by token symbol.',


  inputs: {

    transactions : { type: 'json' , required: true}

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
      let currentValue = token.price * transaction.amount;
      let buyValue = transaction.value;

      // If we haven't seen this token before, add it to the map
      if (!dataByTokenSymbol.has(token.symbol)) {
        dataByTokenSymbol.set(token.symbol, {
          amount: transaction.amount,
          currentValue,
          buyValue,
        });
        tokenData.push(token);
      } else {
        // If we have seen this token before, update its information in the map
        let data = dataByTokenSymbol.get(token.symbol);
        dataByTokenSymbol.set(token.symbol, {
          amount: data.amount + transaction.amount,
          currentValue: data.currentValue + currentValue,
          buyValue: data.buyValue + buyValue,
        });
      }
    }

    // eslint-disable-next-line no-undef
    const toDelete = new Set();
    let totalProfit = 0;
    let totalProfitInPercent = 0;
    let totalInvest = 0;
    let currentValue = 0;

    // Loop through the tokens and calculate their profit in USD and percent
    tokenData.forEach((token) => {
      let tokenMap = dataByTokenSymbol.get(token.symbol);

      totalProfit += Number(
        (tokenMap.currentValue - tokenMap.buyValue).toFixed(2)
      );
      totalInvest += tokenMap.buyValue;
      currentValue += tokenMap.currentValue;
      totalProfitInPercent += Number(
        (
          ((tokenMap.currentValue - tokenMap.buyValue) /
            tokenMap.currentValue) *
          100
        ).toFixed(2)
      );

      if (tokenMap.amount === 0) {
        toDelete.add(token.id);
      } else {

        // add the token amount, currentValue and profit to the token
        token['amount'] = Number(tokenMap.amount.toFixed(2));
        token['currentValue'] = Number(tokenMap.currentValue.toFixed(2));
        token['profitInUSD'] = Number(
          (tokenMap.currentValue - tokenMap.buyValue).toFixed(2)
        );
        token['profitInPercent'] = Number(
          (
            ((tokenMap.currentValue - tokenMap.buyValue) / tokenMap.currentValue) * 100
          ).toFixed(2)
        );
      }
    });

    // remove the tokens with amount 0 from the tokenData array
    tokenData = tokenData.filter((token) => !toDelete.has(token.id));

    // save total profit of this portfolio to the tokenData
    console.log(totalProfit);

    totalProfit = Number(totalProfit.toFixed(2));

    //TODO test if needed i think not
    if (tokenData[0]) {
      tokenData[0]['totalProfit'] = totalProfit;
      tokenData[0]['totalProfitInPercent'] = +((currentValue - totalInvest) / totalInvest).toFixed(2);
    }
    // Return the array of tokens with all the calculation done.
    return tokenData;
  }
};
