/**
 * EMailMessage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    owner: { model: 'user' },
    cycle: { type: 'string', isIn: ['hourly', 'daily', 'weekly', 'monthly'] },
    type: { type: 'string', isIn: [ 'general overview', 'strong price changes', 'portfolio price changes', 'portfolio overview'] },
    isTipping: { type: 'number' , columnType: 'float'},
    tipAmount: { type: 'number' }

  },

};
