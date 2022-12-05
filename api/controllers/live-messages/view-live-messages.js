module.exports = {


  friendlyName: 'View live messages',


  description: 'Display "Live messages" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dynamicPages/live-messages'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
