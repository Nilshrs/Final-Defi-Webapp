module.exports = {


  friendlyName: 'View index e mail message',


  description: 'Display "Index e mail message" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/mailNewsletter/indexEMailMessage'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
