var openCart = document.querySelectorAll('.popular-assort__buy');
  //var popupCart = document.querySelector('.popup');//попар
var countBtn = document.querySelector('.top__item--basket');//стало красным
 var counter = countBtn.querySelector('.number');//цифра

for (var i = 0; i < openCart.length; i++) {
    openCart[i].addEventListener('click', function (event) {
        event.preventDefault();
      //  popupCart.classList.add('modal-cart-show');
        countBtn.classList.add('.top__item--active');
        var count = Number(counter.innerHTML);
        counter.innerHTML = count += 1;
    });
}
