let count = 1;
document.getElementById("radio1").checked = true

setInterval(function(){
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>3){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;

}

function applyDiscount() {
    const couponInput = document.getElementById('coupon').value;
    const priceElement = document.getElementById('price');
    const discountedPriceElement = document.getElementById('discounted-price');
    const discountedValueElement = document.getElementById('discounted-value');
    
    const originalPrice = 100;
    const validCoupon = 'mahindra10';
    
    if (couponInput === validCoupon) {
        const discountedPrice = originalPrice * 0.9;
        discountedValueElement.textContent = discountedPrice.toFixed(2);
        discountedPriceElement.style.display = 'block';
    } else {
        alert('Cupom inválido!');
    }
}
