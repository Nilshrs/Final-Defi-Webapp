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
      tip: { wantsToTip: null, tipAmount: 10, paymentType: null },

      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="tipform container">

    <h2>Do you want to tip? </h2>
    <p>This service is completely free but tips are welcome</p>

    <div class="form-check">

      <input type="checkbox"
             id="checkWantsToTip"
             class="form-check-input"
             v-model="tip.wantsToTip"
             true-value="yes"
             false-value="no"
             placeholder="Do you want to tip?"
      />
      <label for="checkWantsToTip">Yes i want to tip</label>
    </div>

    <div v-if="tip.wantsToTip === 'yes' " class="mt-2 mb-4">
      <div class="form-group">
        <label id="tipAmount">Thanks :) how much? </label>
        <input id="tipAmount" placeholder="Amount" v-model.number="tip.tipAmount">
      </div>
      <div class="mt-2 mb-4">
        <label for="paymentType">Select payment type:</label>

        <select id="paymentType" class="form-select" v-model="tip.paymentType">
          <option selected disabled value="">Please select one</option>
          <option>Crypto</option>
          <option>Card</option>
          <option>Paypal</option>
        </select>
      </div>

      <div v-if="tip.paymentType === 'Crypto' ">
        <router-link to="/crypto-payment" id="defi-button-mobile">To crypto payment</router-link>
      </div>

      <div v-if="tip.paymentType === 'Card' || tip.paymentType === 'Paypal'">
        <router-link to="/stripe-payment" id="defi-button-mobile">To card payment</router-link>
      </div>
    </div>

    <div v-if="tip.wantsToTip === 'no' || !tip.wantsToTip">
      <p>Are you sure you dont want to tip ? </p>
      <button v-on:click="addEmailServiceWithNoTIp" id="defi-button-mobile">No Tip, submit it!</button>
    </div>

    <div class="progress" >
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
  },


  // handler will be called when the value of tip change
  watch: {

    tip: {
      handler(newValue){
        this.$emit( 'set-tip', this.tip );
      },
      //deep watches recursively for changes in the tip object
      deep: true,
      immediate: true
    },


  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    addEmailServiceWithNoTIp() {
      // Ask user to confirm first
      if( confirm('Really no tip') ) {
        this.$emit( 'add-email-service');
        //Redirect to dashboard
      } else {
        //User changed his mind
        this.tip.wantsToTip = 'yes';
      }
    }
  }
});
