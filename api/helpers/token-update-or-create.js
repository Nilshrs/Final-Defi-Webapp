module.exports = {


  friendlyName: 'Token update or create',


  description:  'Gets called by Cron Job, If a token is found matching the criteria, i' +
                't will update it with the values provided. If no token is found matching the criteria, ' +
                'it will create a new token with the values provided. ',


  inputs: {

    criteria: { type: 'json', required:true },
    values: { type: 'json', required:true }

  },


  exits: {

    success: {
      description: 'Token got successfully updated or created',
    },

  },

  fn: async function ( {criteria, values } ) {

    // Find the token matching the given criteria
    // eslint-disable-next-line no-undef
    return await Token.findOne(criteria).then(async (foundToken) => {
      try {
        // If a token is found, update it with the given values
        if (foundToken) {
          // eslint-disable-next-line no-undef
          await Token.update(criteria, values);
        } else {
          // eslint-disable-next-line no-undef
          await Token.create(values);
        }
        //if token updated return 0 if crated the values for a better log
        return foundToken ? 0 : values;

      } catch (error) {
        console.log( 'Error happened while trying to update or create token:', values.symbol );
        console.log({ error });
      }
    });
  }
};
