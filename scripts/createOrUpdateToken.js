const tokenPricesURL = 'https://ocean.defichain.com/v0/mainnet/prices?size=150';

$.get(tokenPricesURL, (response) => {
    createOrUpdateTokens(response.data);
});

async function createOrUpdateTokens(tokens) {

    tokens = filterPriceData(tokens);
    
    tokens.forEach( async (token) => {

        await $.post('/token',
            {
                name: token.name,
                //type: token.type,
                symbol: token.symbol,
                currency: token.currency,
                price: token.price
            },
            (data, status) => {
                console.log('Created or updates: '+ token.symbol +' Status: ' + status);
            });
    } )
}

function filterPriceData (tokens) {

    let filteredTokenData = [];

    tokens.forEach ( (token) => {

        token.id = token.id.replaceAll('.', '-');

        filteredTokenData.push(
            {
                symbol: token.id,
                name: token.price.token,
                currency: token.price.currency,
                price: Math.round(token.price.aggregated.amount * 100 )/ 100});
    });

    return filteredTokenData;
}
