function productCountHandler(product, isIncrease, price) {
    const productCount = document.getElementById(product + '-quantity');

    const currentQuantity = parseInt(productCount.value);
    let newQuantity = currentQuantity;
    if (isIncrease == true) {
        newQuantity = currentQuantity + 1;
    } else if (isIncrease == false && currentQuantity > 0) {
        newQuantity = currentQuantity - 1;
    }

    productCount.value = newQuantity;

    let productPrice = 0;
    if (product == 'phone') {
        productPrice = newQuantity * 1219;
    } else if (product == 'case') {
        productPrice = newQuantity * 59;
    }
    document.getElementById(product + '-price').innerText = '$ ' + productPrice;
    calculateTotal();
}
function calculateTotal() {
    const phoneCount = getInputValue('phone');

    const caseCount = getInputValue('case');

    const subTotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById('subtotal').innerText = '$' + subTotal;

    const tax = subTotal / 10;
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('total').innerText = '$' + grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function removeItem(item) {
    document.getElementById(item).innerHTML =
        'Need the item back? Then Refresh.';
}
function submitItem(item) {
    const submit = document.getElementById(item);
    submit.innerHTML = 'Thank You. We start working on It. ';
    submit.style.fontSize = '50px';
    submit.style.textAlign = 'center';
    submit.style.color = 'green';
}
