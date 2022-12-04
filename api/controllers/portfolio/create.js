module.exports = {


  friendlyName: 'Create',


  description: 'Create portfolio.',


  inputs: {

    name: { type: 'string', allowNull: false, required: true }

  },


  exits: {

    success: {
      description: 'created new portfolio',
      viewTemplatePath: 'pages/portfolio/index',
    }

  },


  fn: async function ( { name } ) {
    // eslint-disable-next-line no-undef
    const portfolio  = await Portfolio.create( { name, owner: this.req.session.userId });
    //return with view
    return { portfolioName: portfolio.name };
  }
};
