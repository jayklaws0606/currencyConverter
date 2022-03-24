function Convert() {
  //get amount value
  let amount = document.getElementById("amount").value;

  const currencyArr = [
    //from euro
    ["EUR", 1.09, "USD", "1.09:1"],
    ["EUR", 1.39, "CAD", "1.39:1"],
    ["EUR", 0.000028, "BTC", "0.000028:1"],
    ["EUR", 0.00043, "ETH", "0.00043:1"],
    //from usd
    ["USD", 0.92, "EUR", "1:0.917"],
    ["USD", 1.27, "CAD", "1:1.265"],
    ["USD", 0.000026, "BTC", "0.000026:1"],
    ["USD", 0.00039, "ETH", "0.00039:1"],
    //from cad
    ["CAD", 0.72, "EUR", "1:0.72"],
    ["CAD", 0.79, "USD", "0.79:1"],
    ["CAD", 0.00002, "BTC", "0.00002:1"],
    ["CAD", 0.00031, "ETH", "0.0003:1"],
    //from btc
    ["BTC", 35422, "EUR", "1:35714"],
    ["BTC", 38687, "USD", "0.000026:1"],
    ["BTC", 49256, "CAD", "1:50000"],
    ["BTC", 15.19, "ETH", "15.19:1"],
    //from eth
    ["ETH", 2329, "EUR", "1:2380"],
    ["ETH", 2546, "USD", "1:2564"],
    ["ETH", 3239, "CAD", "1:3333"],
    ["ETH", 0.066, "BTC", "1:0.066"],
  ];

  const convertList = [];

  for (let i = 0; i < currencyArr.length; i++) {
    //store data in a new object for each iteration
    let newObj = {};
    newObj.fromCurrency = currencyArr[i][0];
    newObj.convertedCurrency = amount * currencyArr[i][1];
    newObj.toCurrency = currencyArr[i][2];
    newObj.ratio = currencyArr[i][3];
    convertList.push(newObj);
  }
  //get selected options
  let fromSelected = document.getElementById("from");
  let fromValue = fromSelected.options[fromSelected.selectedIndex].value;

  let toSelected = document.getElementById("to");
  let toValue = toSelected.options[toSelected.selectedIndex].value;

  for (let index = 0; index < convertList.length; index++) {
    //validate duplicating option values
    if (fromValue != toValue) {
      if (
        fromValue === convertList[index].fromCurrency &&
        toValue === convertList[index].toCurrency
      ) {
        document.getElementById(
          "conversion"
        ).innerHTML = `<span>Converted Value: ${convertList[
          index
        ].convertedCurrency.toFixed(2)}${convertList[index].toCurrency}(${
          convertList[index].ratio
        })</span>`;
      }
    }
    //display duplicating options message
    else {
      document.getElementById("conversion").innerHTML =
        "currency might be not selected or are the same";
    }
  }
}
// when user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementById("conversion").innerHTML = "";
}
