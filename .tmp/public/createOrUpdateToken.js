const tokenPricesURL = 'https://ocean.defichain.com/v0/mainnet/prices?size=150';

$.get(tokenPricesURL, (response) => {
    createOrUpdateTokens(response.data);
});


//TODO create create or update action to simplyfy this script



async function createOrUpdateTokens(tokens) {

    tokens = filterPriceData(tokens);

    //TODO create action with findOrReplace https://sailsjs.com/documentation/reference/waterline-orm/models/find-or-create

    for (const token of tokens) {
        if ( await tokenIsInDB (token.symbol) ) {
            updateToken(token);
        } else {
            insertToken(token);
        }
    }
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
    console.log(filteredTokenData);

    return filteredTokenData;
}

async function updateToken(token) {


    $.post(`token/update-price`, {
        symbol: token.symbol,
        price: token.price,
    }, (data, status) => {

        console.log( 'Update: '+ token.symbol + ' Status: ' + status);
    });
}

async function tokenIsInDB(tokensymbol) {

    let promise = await $.get(`/token/${tokensymbol}`);

    return  (promise.symbol) !== undefined;
}

function insertToken(token) {
    $.post('/token',
        {
            name: token.name,
            //type: token.type,
            symbol: token.symbol,
            currency: token.currency,
            price: token.price
        },
        (data, status) => {
            console.log('Insert: '+ token.symbol +' Status: ' + status);
        });
}
