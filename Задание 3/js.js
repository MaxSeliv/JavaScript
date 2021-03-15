var basket = {
    totalPrice:0,
    totalCount:0,
    products:[],
    basketContainer:document.getElementById('basketContainer'),
    createBasketLayout () {
        var priceLabel = document.createElement('label');
        priceLabel.setAttribute('for', 'priceInput');
        this.basketContainer.appendChild(priceLabel);
        priceLabel.innerHTML = 'Price:';
        var priceInput = document.createElement('input');
        priceInput.setAttribute('id', 'priceInput');
        priceInput.setAttribute('type', 'number');
        this.basketContainer.appendChild(priceInput);
        
        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);
        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);

        var countLabel = document.createElement('label');
        countLabel.setAttribute('for', 'countInput');
        this.basketContainer.appendChild(countLabel);
        countLabel.innerHTML = 'Count:';
        var countInput = document.createElement('input');
        countInput.setAttribute('id', 'countInput');
        countInput.setAttribute('type', 'number');
        this.basketContainer.appendChild(countInput);

        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);
        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);

        var button = document.createElement('button');
        button.setAttribute('onclick', 'addToBasket()');
        this.basketContainer.appendChild(button);
        button.innerHTML = 'Добавить товар';

        var clearButton = document.createElement('button');
        clearButton.setAttribute('onclick', 'clearBasket()');
        this.basketContainer.appendChild(clearButton);
        clearButton.innerHTML = 'Очистить корзину';

        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);
        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);

        var totalLabel = document.createElement('label');
        totalLabel.setAttribute('id', 'totalLabel');
        this.basketContainer.appendChild(totalLabel);

        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);
        var br = document.createElement('br');;
        this.basketContainer.appendChild(br);

        var errorLabel = document.createElement('label');
        errorLabel.setAttribute('id', 'errorLabel');
        this.basketContainer.appendChild(errorLabel);
        errorLabel.style.color = 'red';

        this.updateTotalLabel()
    },
    updateTotalLabel(){
        if (this.totalPrice == 0 && this.totalCount ==0) {
            totalLabel.innerHTML = 'Корзина пуста'
        }else {
            totalLabel.innerHTML = 'Общая цена: ' + this.totalPrice + '; Количество товаров: ' + this.totalCount
        }
    },
    add(price,count){
        if (price < 0 || count < 0){
            errorLabel.innerHTML = 'Ошибка. Введено отрицательное число';
            return
        } else {
            errorLabel.innerHTML = '';
        }
        this.products.push (
            {
                price:price,
                count:count,
            }
        )
        this.totalPrice += price*count;
        this.totalCount += count*1;
        this.updateTotalLabel()
        console.log(this.products);
    },
    clearBasket(){
        this.products = [];
        this.totalPrice = 0;
        this.totalCount = 0;
        this.updateTotalLabel()
    },
}
basket.createBasketLayout()
function addToBasket() {
    var price = priceInput.value
    var count = countInput.value
    basket.add(price,count)
}
function clearBasket() {
    basket.clearBasket()
}
