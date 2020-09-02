let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Manufacturing', 'Construction', 'Services', 'Others']
let colorHex = ['#2B51E7', '#43D074', '#9F02E3', '#B85A5C']

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [            
                485100,
                444400,
                2772100,
                27200
            ],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '10'
                }
            }
        }
    }
})