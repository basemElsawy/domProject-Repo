// 'use strict';
//Calling elements from the DOM
let itemsQty = document.querySelector('.items-quantity');
let incrementBtn = document.querySelectorAll('.increment');
let decrementBtn = document.querySelectorAll('.decrement');
let merchTotal = document.querySelector('.merch-total');
let orderTotal = document.querySelector('.order-total');
let prices = document.querySelectorAll('.price');
let productQty = document.querySelectorAll('.adding');
let product = document.querySelectorAll('.add-remove');

let removeBtn = document.querySelectorAll('.RemoveItm');

//-----------------variables---------------
Number(prices.innerText);
// --------------------/*EventListeners & Functions */------------

// *********no need to have idx as it will loop on all products
let iniitializeMerch = () => {
  // *********check on product selector makes more sense here
  for (let i = 0; i <= product.length; i++) {
    // *********  += will act as string because merchtotatl.innertext is string

    //********* use i as ur index as you are looping on all items
    merchTotal.innerText =
      Number(merchTotal.innerText) + Number(prices[i].innerText);
    orderTotal.innerText = merchTotal.innerText;
  }
};

// *********is called when all items in page are rendered
document.addEventListener('DOMContentLoaded', function (event) {
  iniitializeMerch();
});

let merchCalc = (idx) => {
  merchTotal.innerText =
    Number(merchTotal.innerText) + Number(prices[idx].innerText);
  orderTotal.innerText = merchTotal.innerText;
};
//------------------------------increment btn -----------
incrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    productQty[idx].innerHTML++;
    merchCalc(idx);
  });
});

//----------------------------decrement btn-------------

decrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (productQty[idx].innerHTML <= 1) {
      del(product, idx);
      itemsQty.innerHTML--;
      merchTotal.innerText =
        Number(merchTotal.innerText) -
        Number(prices[idx].innerText) * Number(productQty[idx].innerText);
      orderTotal.innerText = merchTotal.innerText;
    } else {
      productQty[idx].innerHTML--;
      merchTotal.innerText =
        Number(merchTotal.innerText) - Number(prices[idx].innerText);
      orderTotal.innerText = merchTotal.innerText;
    }
  });
});

//--------------------DELETE FUNCTION---------------

function del(arr, idx) {
  arr[idx].remove();
}

//--------------------REMOVE BTN --------------------
removeBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    del(product, idx);

    // *********i dnt think this line is working or benefitial
    itemsQty.innerHTML--;

    // *********you need to subtract the value of the product from the total merch upon deletion

    // *********sth like this  merchTotal.innerText = Number(merchTotal.innerText) - ( Number(prices[idx].innerText) *Number(itemsQty[idx].innerText);
    merchTotal.innerText =
      Number(merchTotal.innerText) -
      Number(prices[idx].innerText) * Number(productQty[idx].innerText);
    orderTotal.innerText = merchTotal.innerText;
  });
});
let productCalc = () => {
  itemsQty.innerHTML = product.length;
};

productCalc();
