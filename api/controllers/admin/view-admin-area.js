module.exports = {


  friendlyName: 'View admin area',


  description: 'Display "Admin area" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin/view-admin-area'
    }

  },


  fn: async function () {

    // TODO - ask elias if this solution is better than his in "display-token-with-add-button"
    //Gets the own UserId from Session
    const me = this.req.session.userId;
    //Creates an array of all users
    const users = await User.find();
    //Creates a new array with all users *except* for myself -> so admins canÄt delete themselves
    const userData = users.filter(user => user.id !== me);

    const user = await User.findOne({id: this.req.session.userId});

    // Respond with view.

    return { userData, adminName: user.fullName };

  }


};
