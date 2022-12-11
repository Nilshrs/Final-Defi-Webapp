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

    await Token.findOne( criteria ).then( async (result) => {
          if (result) {
            console.log('Updated Price:' + values.symbol);
            await Token.update(criteria, values);
          } else {
            console.log('inserted new Token: ' + values.symbol);
            await Token.create(values);
          }
        }
    )

  }


};

