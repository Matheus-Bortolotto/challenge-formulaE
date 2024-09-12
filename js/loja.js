let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 3000);

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function applyDiscount() {
    const couponInput = document.getElementById('coupon').value;
    const priceElement = document.getElementById('price');
    const discountedPriceElement = document.getElementById('discounted-price');
    const discountedValueElement = document.getElementById('discounted-value');
    
    const validCoupon = 'mahindra10';
    const priceText = priceElement.textContent || priceElement.innerText;
    const price = parseFloat(priceText.replace('R$', '').replace(',', '.').trim());

    if (couponInput === validCoupon) {
        let discountedPrice;
        if (price === 150) {
            discountedPrice = price * 0.85; // 15% de desconto
        } else if (price === 100) {
            discountedPrice = price * 0.9; // 10% de desconto
        } else {
            alert('Preço não elegível para desconto.');
            return;
        }
        discountedValueElement.textContent = discountedPrice.toFixed(2);
        discountedPriceElement.style.display = 'block';
    } else {
        alert('Cupom inválido!');
    }
}

function toggleMenu() {
    const menuContent = document.getElementById("nav-menu-mobile-content");
    if (menuContent.style.display === "flex") {
      menuContent.style.display = "none";
    } else {
      menuContent.style.display = "flex";
    }
  }