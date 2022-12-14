module.exports = {


  friendlyName: 'View trans 01',


  description: 'Display "Trans 01" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/portfolio/trans01'
    },
    redirect: {
      responseType: 'redirect'
    }

  },


  fn: async function () {

    // eslint-disable-next-line no-undef
    const porfolio = await Portfolio.findOne({ owner: this.req.session.userId });

    if(!porfolio){
      throw {redirect: '/create-portfolio'};
    }

    // Respond with view.
    return {};

  }


};
