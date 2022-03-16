//alert message
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 

`<div class="alert-banner">
  <p><strong>Alert:</strong> You have unread messages!</p>
  <p class="alert-banner-close">x</p> 
 </div>
`;
//closes when x button
alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});
//notification dott
setTimeout(() => {
    const dot = document.querySelector(".notification-dot");
    dot.style.opacity = 1;
}, 2000)
//traffic chart
const CHART = document.getElementById('line-chart');
let lineChart = new Chart (CHART, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets:[
        { data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(156,150,212,.5)',
        borderColor: 'rgba(116,100,191,255)',
        borderWidth: 1,
        tension: 0.5,
        fill: true,
    }]
    }
})


//bar chart data
const barData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(116,119,191,255)',
        borderWidth: 1
    }]
};
//bar chart options
const chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};
//daily traffic (bar chart)
let dailyTraffic = document.getElementById("daily-chart");
let dailyChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: barData,
    options: chartOptions
});

//pie chart data
const data = {
    labels: [
        'Desktop',
        'Tablet',
        'Phones'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 70, 80],
        backgroundColor: [
            'rgba(116,119,191,255)',
            'rgba(129,201,143,255)',
            'rgba(81,182,200,255)'

        ],
        hoverOffset: 4
    }]
};
const mobileinfo = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

//pie chart 
const config = {
    type: 'doughnut',
    data: data,
    options: mobileinfo
};


const myChart = new Chart(
    document.getElementById('mobile-chart'),
    config
);

const user = document.getElementById("userfield");
const message = document.getElementById("messagefield");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
      } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
      } else if (message.value === "") {
        alert("Please fill out message field before sending");
      } else {
        alert(`Message successfully sent to: ${user.value}`);
      }
});