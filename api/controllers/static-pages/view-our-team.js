module.exports = {


  friendlyName: 'View our team',


  description: 'Display "Our team" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dynamicPages/our-team'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
