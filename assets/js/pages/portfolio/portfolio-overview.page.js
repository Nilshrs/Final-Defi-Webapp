parasails.registerPage('portfolio-overview', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝

  data: {
    //token: undefined,
    //portfolioValue: undefined
    //…
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //this.createChart(this.data.token);
    //…
    console.log("yeaaa");
  },
  mounted: async function(){

    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    createChart: function (token) {
      /*  const token = [
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
          }]*/


      const labels = [];
      const usdValue = [];
      const tokenAmount = [];
      const label = 'USD value';


      token.forEach( (token) => {
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
      const {Chart} = require('chart.js');

      //render block
      new Chart(
        document.getElementById('myChart'),
        config
      );
    }
  }
});
