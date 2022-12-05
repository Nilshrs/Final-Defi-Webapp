module.exports = {


  friendlyName: 'View leaderboard',


  description: 'Display "Leaderboard" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dynamicPages/leaderboard'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
