
parasails.registerComponent('cryptopayment', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div class="cryptopament">
    <router-link class="text-white" to="/set-email-tip">❮</router-link>

    <h2>Cryptopayment</h2>

      <!-- TODO change to be nice on mobile, (no page break...) -->
      <p>You can send your tip to one of the following addresses:</p>

      <button @click="showAddress('BTC')" class="mx-2 btn" id="defi-button-mobile">BTC</button>
      <button @click="showAddress('ETH')" class="mx-2" id="defi-button-mobile">ETH</button>
      <button @click="showAddress('DFI')" class="mx-2" id="defi-button-mobile">DFI</button>

      <p class="mt-3">Thank you
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-heart-fill"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg>

      </p>


      <!-- not needen because it gets submitted after clicken ob by
      <button class="hidden" v-on:click="addEmailService" id="defi-button-mobile">Submit email service</button>

      -->

      <div class="progress mt-2">
        <div class="progress-bar progress-bar-striped progress-bar-animated"   role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </div>




  `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    //…
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    addEmailService() {
      this.$emit('add-email-service');
    },

    showAddress(curreny) {
      switch (curreny){
        case 'BTC': {
          if(confirm('BTC address 3f77bf71eed8e67bf7534c369bfe9faaac0be4edcfd6b5c634a444852b0a294e (sample address)')) {
            this.addEmailService();
          }
          break;
        }
        case 'ETH': {
          if(confirm('ETH: 0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5 (sample address)')) {
            this.addEmailService();
          }
          break;
        }
        case 'DFI': {
          if(confirm('DFI address: 61075cd1044a38b232306b030c8a6788e7396eb5bc852b6459e643bd40b0e068 (sample address)')){
            this.addEmailService();
          }
          break;
        }
      }
    },

  }
});
