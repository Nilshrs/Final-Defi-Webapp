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


  }


};
