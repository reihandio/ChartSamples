let ctx = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('myChart2').getContext('2d');
let ctx3 = document.getElementById('myChart3').getContext('2d');
let ctx4 = document.getElementById('myChart4').getContext('2d');
let ctx5 = document.getElementById('myChart5').getContext('2d');
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

let myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [            
                483600,
                447100,
                2778000,
                26700
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

let myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        datasets: [{
            data: [            
                484700,
                447100,
                2799000,
                26800
                
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

let myChart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        datasets: [{
            data: [            
                484800,
                456800,
                2816100,
                26700
                
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

let myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        datasets: [{
            data: [            
                481600,
                450900,
                2799800,
                26700
                
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