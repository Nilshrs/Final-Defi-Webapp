module.exports = {


  friendlyName: 'Create',


  description: 'Create e mail messages.',


  inputs: {
    cycle: { type: 'string', isIn: ['hourly', 'daily', 'weekly', 'monthly'] },
    type: { type: 'string', isIn: [ 'general overview', 'strong price changes', 'portfolio price changes'] }
  },

  exits: {

  },

  fn: async function ( { cycle, type }) {

    const newEMailMessager = await E-Mail-Message.create(
      {
        owner: this.session.userId,
        cycle,
        type
      } );

    if(!newEMailMessager) { throw {erorr: "failed to create new E mail messager"}}

    return;

  }


};
