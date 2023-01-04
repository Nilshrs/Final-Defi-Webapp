
parasails.registerComponent('test', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [

  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function (){
    return {
      newItem: '',
      number: 0,
      type: 'normal Email'
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="container">

    <div class="add-item form">
      <input v-model="newItem" type="text" placeholder="Some text"> <br>
      <input v-model.number="number" type="text" placeholder="Some number"> <br>

      <label> <input type="radio" v-model="type" value="normal Email">normal Email</label>
      <label> <input type="radio" v-model="type" value="super Email">super Email</label>
      <br>

      <a class="btn btn-primary " >NEXT</a>
      <router-link to="/test">Bibibi</router-link>


    </div>

    <p>new item {{ newItem }} </p>
    <p>number {{ number }} </p>
    <p>type: {{type}}</p>

    </div>
  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function(){
    //…
  },
  beforeDestroy: function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

  },
  watch: {
      formData: {
        handler: function() {
          this.$emit('newdata', [this.formData.name, this.formData.age]);
        },
    }
  }
});
