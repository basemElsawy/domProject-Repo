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
// --------------------/*EventListeners & Functions */

let productCalc = () => {
  itemsQty.innerHTML = product.length;
};

productCalc();
//------------------------------increment btn -----------
incrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    productQty[idx].innerHTML++;
  });
});

//----------------------------decrement btn-------------

decrementBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    if (productQty[idx].innerHTML <= 1) {
      del(product, idx);
    } else {
      productQty[idx].innerHTML--;
    }
  });
});

//--------------------DELETE FUNCTION---------------

del = (arr, idx) => {
  arr[idx].remove();
};

//--------------------REMOVE BTN --------------------
removeBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    del(product, idx);
  });
});
