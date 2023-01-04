
parasails.registerComponent('emailTip', {
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
      tip: { wantsToTip: null, tipAmount: 0, paymentType: null },

      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="tipform container">


    <h2>Tip</h2>
    <p>This service is free but tips are welcome, do you want to tip?</p>

    <div class="form-group">

      <input type="checkbox"
             id="checkWantsToTip"
             v-model="tip.wantsToTip"
             true-value="yes"
             false-value="no"
             placeholder="Do you want to tip?"
      />
      <label for="checkWantsToTip">Tip ?</label>
    </div>

    <div v-if="tip.wantsToTip === 'yes' ">
      <div class="form-group">
        <label id="tipAmount">Amount in $</label>
        <input id="tipAmount" placeholder="Amount" v-model.number="tip.tipAmount">
      </div>
      <div v-if="tip.tipAmount > 0">
        <label for="paymentType">Payment type:</label>

          <select id="paymentType" class="form-select" v-model="tip.paymentType">
            <option selected disabled value="">Please select one</option>
            <option>Crypto</option>
            <option>Card</option>
            <option>Paypal</option>
          </select>
      </div>
      <div v-if="tip.paymentType === 'Crypto'">
        <router-link to="/crypto-payment" class="btn btn-secondary">Next</router-link>
      </div>

      <div v-if="tip.paymentType === 'Card' || tip.paymentType === 'Paypal'">
        <router-link to="/crypto-payment" class="btn btn-secondary">Next</router-link>
      </div>
    </div>

    <div v-if="tip.wantsToTip === 'no' || !tip.wantsToTip" >
      <router-link to="/add-email-serive" class="btn btn-secondary">Add email service</router-link>

      <button v-on:click="addEmailService()"></button>

    </div>
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

  watch: {
    'tip.tipAmount'(newVal, oldVal){
      console.log("test", newVal, oldVal);
      this.$emit( 'set-tip', this.tip );
    },


    tip: function (value){
      console.log(value);
      this.$emit( 'set-tip' , value);
    }


  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    addEmailService(){
        this.$emit( 'add-email-service');
    }
  }
});
