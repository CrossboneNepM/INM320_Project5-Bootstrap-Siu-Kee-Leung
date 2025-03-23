document.addEventListener('DOMContentLoaded', function() {
    // Chart for today's trends
    const ctx = document.getElementById('trendsChart').getContext('2d');
    
    // Sample data
    const labels = Array.from({length: 24}, (_, i) => i); // 0-23 hours
    const todayData = [10, 15, 20, 25, 30, 35, 40, 45, 40, 35, 30, 25, 20, 30, 40, 45, 50, 45, 40, 35, 30, 25, 20, 15];
    const yesterdayData = [5, 10, 15, 20, 25, 30, 35, 40, 35, 30, 25, 20, 15, 25, 35, 40, 45, 40, 35, 30, 25, 20, 15, 10];
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Today',
                    data: todayData,
                    borderColor: '#3751FF',
                    backgroundColor: 'rgba(55, 81, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Yesterday',
                    data: yesterdayData,
                    borderColor: '#DFE0EB',
                    backgroundColor: 'rgba(223, 224, 235, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(223, 224, 235, 0.5)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            elements: {
                point: {
                    radius: 0,
                    hoverRadius: 6
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
    
    // Add event listeners or other JavaScript functionality
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.classList.add('text-decoration-line-through');
                label.classList.add('text-muted');
            } else {
                label.classList.remove('text-decoration-line-through');
                label.classList.remove('text-muted');
            }
        });
    });
}); 