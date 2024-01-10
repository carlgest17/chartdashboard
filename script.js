// Sample data for charts
var loanAmountData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: 'Loan Amount',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [50000, 60000, 75000, 90000, 120000],
    }]
};

var interestRateData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: 'Interest Rate',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [5, 6, 4, 7, 8],
    }]
};

var approvalRateData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: 'Approval Rate',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        data: [80, 85, 90, 88, 92],
    }]
};

var defaultRateData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{
        label: 'Default Rate',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        data: [5, 4, 3, 6, 5],
    }]
};

var polarAreaData = {
    labels: ["Red", "Green", "Yellow", "Blue", "Purple"],
    datasets: [{
        label: 'Polar Area Chart',
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        data: [10, 20, 30, 40, 50],
    }]
};

var horizontalBarData = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"],
    datasets: [{
        label: 'Horizontal Bar Chart',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [40, 30, 20, 10, 50],
    }]
};

// Loan Amount Chart
var loanAmountChart = new Chart(document.getElementById('loanAmountChart').getContext('2d'), {
    type: 'bar',
    data: loanAmountData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Interest Rate Chart
var interestRateChart = new Chart(document.getElementById('interestRateChart').getContext('2d'), {
    type: 'line',
    data: interestRateData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Approval Rate Chart
var approvalRateChart = new Chart(document.getElementById('approvalRateChart').getContext('2d'), {
    type: 'doughnut',
    data: approvalRateData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        }
    }
});

// Default Rate Chart
var defaultRateChart = new Chart(document.getElementById('defaultRateChart').getContext('2d'), {
    type: 'radar',
    data: defaultRateData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 10
            }
        }
    }
});

// Polar Area Chart
var polarAreaChart = new Chart(document.getElementById('polarAreaChart').getContext('2d'), {
    type: 'polarArea',
    data: polarAreaData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});

// Horizontal Bar Chart
var horizontalBarChart = new Chart(document.getElementById('horizontalBarChart').getContext('2d'), {
    type: 'horizontalBar',
    data: horizontalBarData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});
