const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  document.getElementById("buyer-info").innerText = buyerDetails.value;
  buyerDetails.value = "";
});

const addProductBtn = document.getElementById("add-details-btn");

addProductBtn.addEventListener("click", function () {
  const infoTale = document.getElementById("info-table");
  const itemName = document.getElementById("item-name-input");
  const itemPrice = document.getElementById("item-price-input");
  const itemQuantity = document.getElementById("item-quantity-input");

  const totalPrice = parseFloat(itemPrice.value) * parseInt(itemQuantity.value);
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  td3.classList.add("item-total");
  th.innerText = itemName.value; // <th >1</th>
  td1.innerText = itemPrice.value; // <td>100</td>
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3); // <td class="item-total">4</td>

  infoTale.appendChild(tr);

  // clear input
  itemName.value = "";
  itemPrice.value = "";
  itemQuantity.value = "";
  totalCalculation();
});

function totalCalculation() {
  const subTotal = calculateSubTotal();
  const subTotalToDisplay = document.getElementById("sub-total");
  subTotalToDisplay.innerText = subTotal;
  // tax calculation
  const tax = subTotal * 0.2;
  document.getElementById("tax").innerText = tax.toFixed(2);
  // grand total calculation
  const grandTotal = subTotal + tax;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("grand-total-2").innerText = grandTotal;
}

function calculateSubTotal() {
  let subTotal = 0;
  const cost = document.getElementsByClassName("item-total");
  // console.log("all prices", cost);
  for (let i = 0; i < cost.length; i++) {
    const element = cost[i];
    // console.log(element.innerText);
    const price = parseFloat(element.innerText);
    subTotal = subTotal + price;
  }
  return subTotal;
}
