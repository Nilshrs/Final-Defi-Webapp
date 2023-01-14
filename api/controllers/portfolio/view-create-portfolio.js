module.exports = {


  friendlyName: 'View create portfolio',


  description: 'Display "Create portfolio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/portfolio/create-portfolio'
    }

  },


  fn: async function () {
    // Respond with view.
    return {};
  }


};
