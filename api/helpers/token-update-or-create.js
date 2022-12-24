module.exports = {


  friendlyName: 'Token update or create',


  description: '',


  inputs: {

    criteria: { type: 'json', required:true },
    values: { type: 'json', required:true }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },

  fn: async function ( {criteria, values } ) {

    const TokenValues  = await Token.findOne( criteria ).then( async (foundToken) => {
      try {
        if (foundToken) {
          await Token.update(criteria, values);
          return 0;
        } else {
          await Token.create(values);
          return  values;
        }
      }catch (e) {
        console.log('Error with token', values.symbol);
        console.log(e);
      }}
    );
    return TokenValues;
  }
};

