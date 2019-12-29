// to validate
function getMaxProfit(prices) {
  if (prices.length < 2) {
    throw Error("There should be at least 2 prices");
  }
  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  prices.forEach((currentPrice, index) => {
    if (index === 0) {
    } else {
      const potentialProfit = currentPrice - minPrice;
      maxProfit = Math.max(maxProfit, potentialProfit);
      minPrice = Math.min(minPrice, currentPrice);
    }
  });

  return maxProfit;
}
