module.exports = {


  friendlyName: 'View our team',


  description: 'Display "Our team" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/about/our-team'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
