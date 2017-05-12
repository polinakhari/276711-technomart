  var openCart = document.querySelectorAll(".popular-assort__buy");
  var popupCart = document.querySelector('.modal-cart');
  var countBtn = document.querySelector(".top__item--basket"); //стало красным
  var counter = countBtn.querySelector(".number"); //цифра
  var closeCart = document.querySelector('.modal-cart-close');
  var cancelCart = popupCart.querySelector('.modal-close-btn');
  var submitCart = popupCart.querySelector('.modal-btn');

  for (var i = 0; i < openCart.length; i++) {
    openCart[i].addEventListener('click', function(event) {
      event.preventDefault();
      popupCart.classList.add('modal-cart-show');
      countBtn.classList.add('top__item--active');
      var count = Number(counter.innerHTML);
      counter.innerHTML = count += 1;
    });
  }

  submitCart.addEventListener('click', function(event) {
    event.preventDefault();
    popupCart.classList.remove('modal-cart-show');
  });

  closeCart.addEventListener('click', function(event) {
    event.preventDefault();
    popupCart.classList.remove('modal-cart-show');
  });

  cancelCart.addEventListener('click', function(event) {
    event.preventDefault();
    popupCart.classList.remove('modal-cart-show');
  });

  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      if (popupCart.classList.contains('modal-cart-show')) {
        popupCart.classList.remove('modal-cart-show');
      }
    }
  });

  var linkArrow = document.querySelectorAll('.features-slider-arrows a');
  var inputNav = document.querySelectorAll('[name="features-toggle"]');

  if (linkArrow) {
    for (var i = 0; i < linkArrow.length; i++) {
      linkArrow[i].addEventListener('click', function(event) {
        event.preventDefault();
        var currentInput = document.querySelector('.features-slider input:checked');
        var currentInputIndex = [].indexOf.call(inputNav, currentInput);
        var inputCount = inputNav.length;
        switch (this.dataset.direction) {
          case 'left':
            if (currentInputIndex == 0) {
              inputNav[inputCount - 1].checked = true;
            } else {
              inputNav[currentInputIndex - 1].checked = true;
            }
            break;

          case 'right':
            if ((inputCount - 1) == currentInputIndex) {
              inputNav[0].checked = true;
            } else {
              inputNav[currentInputIndex + 1].checked = true;
            }
            break;
        }
      });
    };
  }
