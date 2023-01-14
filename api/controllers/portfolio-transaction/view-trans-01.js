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
    //if no portfolio is found redirect user to create one
    if(!porfolio){
      throw {redirect: '/create-portfolio'};
    }
    return {};

  }


};
