module.exports = {


  friendlyName: 'Create',


  description: 'Create e mail messages.',


  inputs: {
    cycle: {type: 'string', isIn: ['hourly', 'daily', 'weekly', 'monthly']},
    type: {type: 'string', isIn: ['general overview', 'strong price changes', 'portfolio price changes', 'portfolio overview']},
    isTipping: { type: 'number' },
    amount: { type: 'number' }

  },

  exits: {},

  fn: async function ({cycle, type, isTipping, amount}) {

    console.log(isTipping);

    // eslint-disable-next-line no-undef
    const newEMailMessager = await EMailMessage.create(
      {
        owner: this.req.session.userId,
        cycle,
        type,
        isTipping,
        amount
      }).fetch();


    if (newEMailMessager.length === 0) {
      console.log({erorr: 'failed to create new E mail messager'})
    }
      return;
    }
}
