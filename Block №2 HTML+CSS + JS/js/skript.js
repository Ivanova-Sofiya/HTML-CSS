  function onClickButton(){
    var quantityNum = $(".quantity-num");
    var inBasket = "В корзину добавлено " + quantityNum.val() + " товаров";
    $.notify (inBasket, {
        globalPosition: "top right",
        className: "success"
    });
  }
