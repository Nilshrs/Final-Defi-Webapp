// eslint-disable-next-line no-undef
parasails.registerPage('portfolio-overview', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    //…
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    this.createChart();
    //…
  },
  mounted: async function(){
    this.test();

    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    test: function (){

      // get the element with the id of "test"
      let testElement = document.getElementById('test');
      console.log(testElement)

      // create a new <p> tag
      let poemElement = document.createElement('p');

      // set the text of the <p> tag to a poem about Bitcoin
      poemElement.innerText = 'Bitcoin, oh Bitcoin,\nThe digital currency of the future,\nA decentralized way to transact,\nSecure and trustless, always on the move.\nTo the moon and beyond,\nBitcoin will rise.\n';

      // append the <p> tag to the "test" element
      testElement.appendChild(poemElement);

    },
    createChart: function () {

      console.log('in here ');
      var Chart = sails.require('chart.js/dist/chart');



      // eslint-disable-next-line no-undef
     /* require(['chart.js/dist/chart.umd']), (Chart) => {
        console.log("inside");
      }*/

      // eslint-disable-next-line no-undef
      console.log('still here');


      // eslint-disable-next-line no-undef
      //const chart = require('chart.js');


      const token = [
        {
          symbol: 'TSLA-USD',
          amount: 5.2,
          valueInUSD: 307.5
        },
        {
          symbol: 'DFI-USD',
          amount: 5.2,
          valueInUSD: 307.5
        },
        {
          symbol: 'BTC-USD',
          amount: 5.2,
          valueInUSD: 200
        },
        {
          symbol: 'SP500-USD',
          amount: 5.2,
          valueInUSD: 100
        }];


      const labels = [];
      const usdValue = [];
      const tokenAmount = [];
      const label = 'USD value';


      token.forEach((token) => {
        labels.push(token.symbol);
        usdValue.push(token.valueInUSD);
        tokenAmount.push(token.amount);
      });

      const data = {
        labels,
        datasets: [{
          label,
          data: usdValue,
          backgroundColor: [
            'rgba(255,99,132,0.4)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(215,0,255,0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(215,0,255,0.2)'
          ],
          borderWidth: 1,
          responsive: false,
        }]
      };

      const options = {

        plugins: {
          legend: {
            display: false
          }
        }
      };

      //config
      const config = {
        type: 'doughnut',
        data,
        options
      };

      // eslint-disable-next-line no-undef

      console.log('still');

      //render block
      const charta = new Chart(
        document.getElementById('myChart'),
        config
      );
      console.log(charta);
    }
    //…
  }
});
