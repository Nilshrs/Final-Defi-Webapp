parasails.registerPage('portfolio-overview', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    tokenData: ''
    //portfolioValue: undefined
    //…
  },
  //tokenData: {tokenData:undefined},
  //portfolioValue: undefined



  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {



    //…
  },
  mounted: async function(){
    this.createChart();


    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    createChart: function () {
      let tokenDataRaw = document.getElementById('token');
      let token = JSON.parse(tokenDataRaw.innerText);

      const portfolioValue =document.getElementById("pV").innerText;


      const labels = [];
      const usdValue = [];
      const tokenAmount = [];
      const label = 'USD value';


      token.forEach((token) => {
        labels.push(token.symbol);
        usdValue.push(token.currentValue);
        tokenAmount.push(token.amount);
      });

      const data = {
        labels,
        datasets: [{
          label,
          data: usdValue,
          backgroundColor: [
            'rgb(246,82,138,0.5)',
            'rgb(222,102,173,0.5)',
            'rgb(239,124,245,0.5)',
            'rgb(183,102,222,0.5)',
            'rgb(170,115,250,0.5)',
            'rgb(121,88,245,0.5)',
            'rgb(64,69,150,0.5)',
            'rgb(31,31,94,0.5)',
            'rgb(28,28,75,0.5)',

          ],
          borderColor: [
            'rgb(246,82,138,0.5)',
            'rgb(222,102,173,0.5)',
            'rgb(239,124,245,0.5)',
            'rgb(183,102,222,0.5)',
            'rgb(170,115,250,0.5)',
            'rgb(121,88,245,0.5)',
            'rgb(64,69,150,0.5)',
            'rgb(31,31,94,0.5)',
            'rgb(28,28,75,0.5)',
          ],
          borderWidth: 1,
          responsive: true,
          cutout: '90%',
          borderRadius: 0,
          hoverOffset: 5
        }]
      };

      const centerText = {
        id: 'centerText',
        afterDatasetsDraw(chart,args,pluginOptions) {
          const {ctx, data} = chart;


          ctx.save();

          const x = chart.getDatasetMeta(0).data[0].x;
          const y = chart.getDatasetMeta(0).data[0].y;

          ctx.textAlign = 'center';

          ctx.font = ' 25px sans-serif';
          ctx.fillStyle = 'white';
          ctx.fillText(portfolioValue, x, y);

        }
      };

      /*
      const options = {

        plugins: {
          legend: {
            title: {
              display: true,
              text: 'Title'
            },
            display: true
          }
        }
      };

       */


      //config
      const config = {
        type: 'doughnut',
        data,
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        },
        plugins: [centerText]
        };

      // eslint-disable-next-line no-undef

      let myChart =document.getElementById('myChart').getContext('2d');

      //render blocks

      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-undef
      let chart =new Chart( myChart, config );





    }
    //…
  }
});
