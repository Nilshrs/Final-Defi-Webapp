module.exports = {


  friendlyName: 'User find by name',


  description: 'Finds a user by Name',


  inputs: {
    fullName: { type: 'string', required: true}
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/admin/view-admin-area'
    },
    redirect: {
      responseType: 'redirect',
      description: 'if user is not found then redirect to previous page'
    }
  },


  fn: async function (inputs) {

    console.log("Trying to find user by name" + inputs.fullName)

    const userData = await User.find( { fullName: { startsWith: inputs.fullName } } );

    if(userData.length === 0){
      sails.log("No user with specified name/letter " + inputs.fullName + " found")
      throw { redirect: 'back' }
    }

    const user = await User.findOne({id: this.req.session.userId});


    return { userData, adminName: user.fullName };

  }


};
