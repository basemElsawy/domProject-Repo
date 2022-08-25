'use strict';
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

let iniitializeMerch = (idx) => {
  for (let i = 0; i <= prices.length; i++) {
    merchTotal.innerText += Number(prices[idx].innerText);
  }
};

let merchCalc = (idx) => {
  merchTotal.innerText =
    Number(merchTotal.innerText) + Number(prices[idx].innerText);
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
    } else {
      productQty[idx].innerHTML--;
      merchTotal.innerText =
        Number(merchTotal.innerText) - Number(prices[idx].innerText);
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
    itemsQty.innerHTML--;
  });
});
let productCalc = () => {
  itemsQty.innerHTML = product.length;
};

productCalc();
