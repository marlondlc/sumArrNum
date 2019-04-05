function sumItems(array) {


  let acuTotal = 0

  array.forEach((item) => {
    console.log("acutotal: ", acuTotal)
    if (Array.isArray(item)) {
      let sum = sumItems(item);
      console.log("Sum returns: ", sum)


      acuTotal += sum;

    } else {
      console.log("added items: ", item)
      // acuTotal = acuTotal + item (same as below)
      acuTotal += item;
    }

  });
  console.log("------------------------------")
  return acuTotal;

}

module.exports = sumItems;