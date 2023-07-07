console.log ('connected')

function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let maxProfit = Number.NEGATIVE_INFINITY;
    let topProduct = '';
  
    for (const product of productProfitArray) {
      if (product.profit > maxProfit) {
        maxProfit = product.profit;
        topProduct = product.name;
      }
    }
  
    return topProduct;
  }
  
  function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let minProfit = Number.POSITIVE_INFINITY;
    let bottomProduct = '';
  
    for (const product of productProfitArray) {
      if (product.profit < minProfit) {
        minProfit = product.profit;
        bottomProduct = product.name;
      }
    }
  
    return bottomProduct;
  }
  
  function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let closestProfit = Number.POSITIVE_INFINITY;
    let zeroProfitProduct = '';
  
    for (const product of productProfitArray) {
      const profit = Math.abs(product.profit);
      if (profit < Math.abs(closestProfit)) {
        closestProfit = product.profit;
        zeroProfitProduct = product.name;
      }
    }
  
    return zeroProfitProduct;
  }
  
  function createChart(productProfitArray) {
    const labels = productProfitArray.map(product => product.name);
    const profits = productProfitArray.map(product => product.profit);
  
    const ctx = document.getElementById('profitChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Sales Profit',
          data: profits,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Example usage
  const productProfitArray = [
    { name: 'Product A', profit: 100 },
    { name: 'Product B', profit: -50 },
    { name: 'Product C', profit: 200 },
    { name: 'Product D', profit: -75 },
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const topProductElement = document.getElementById('topProduct');
    topProductElement.textContent = topProduct(productProfitArray);
  
    const bottomProductElement = document.getElementById('bottomProduct');
    bottomProductElement.textContent = bottomProduct(productProfitArray);
  
    const zeroProfitProductElement = document.getElementById('zeroProfitProduct');
    zeroProfitProductElement.textContent = zeroProfitProduct(productProfitArray);
  
    createChart(productProfitArray);
  });
  