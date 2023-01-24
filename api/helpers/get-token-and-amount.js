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
    let tokenData = [];
    let totalProfit = 0;
    let totalProfitInPercent = 0;
    let totalInvest = 0;
    let currentValue = 0;

    // for deletion
    // eslint-disable-next-line no-undef
    const tokenWithoutAmount = new Set();

    for (const transaction of transactions) {
      // Find the token associated with the current transaction
      // eslint-disable-next-line no-undef
      let token = await Token.findOne({id: transaction.token});
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

    // Loop through the tokens and calculate their profit in USD and percent
    tokenData.forEach((token) => {
      let totalTokenData = dataByTokenSymbol.get(token.symbol);

      totalProfit += Number( (totalTokenData.currentValue - totalTokenData.buyValue).toFixed(2) );
      totalInvest += totalTokenData.buyValue;
      currentValue += totalTokenData.currentValue;
      totalProfitInPercent += Number(
        (
          ((totalTokenData.currentValue - totalTokenData.buyValue) / totalTokenData.currentValue) * 100
        ).toFixed(2)
      );


      //only token with amount >0 should be visible so add  all others to map for later deletion
      if (totalTokenData.amount === 0) {
        tokenWithoutAmount.add(token.id);
      } else {

        // add the token amount, currentValue and profit to the token
        token['amount'] = Number(totalTokenData.amount.toFixed(2));
        token['currentValue'] = Number(totalTokenData.currentValue.toFixed(2));
        token['profitInUSD'] = Number(
          (totalTokenData.currentValue - totalTokenData.buyValue).toFixed(2)
        );
        token['profitInPercent'] = Number(
            (( (totalTokenData.currentValue - totalTokenData.buyValue) / totalTokenData.currentValue) * 100 )
          .toFixed(2)
        );
      }
    });

    // remove the tokens with amount 0 from the tokenData array
    tokenData = tokenData.filter((token) => !tokenWithoutAmount.has(token.id));


    totalProfit = Number(totalProfit).toFixed(2);

    //if there tokens to be displayed
    if (tokenData[0]) {
      tokenData[0]['totalProfit'] = +totalProfit;
      tokenData[0]['totalProfitInPercent'] = +((currentValue - totalInvest) / totalInvest).toFixed(2);
    }
    // Return the array of tokens with all the calculation done.
    return tokenData;
  }
};
