const form = document.baddiesCaught; 
const totalPrice = document.getElementById("totalNum");
const totalPriceSection = document.querySelector(".totalPrice")
const calcTotalPrice = () => {
    let priceValue = (form.goombas.value * 5) + (form.bobombs.value * 7) + (form.cheepcheeps.value * 11);
    totalPrice.textContent = `Your total cost is: ${priceValue}`;
    const totalCoin = document.querySelector(".totalCoin");
    totalCoin.hidden = false;
    totalPriceSection.style.cssText = "background-color: #1d1d1d; color: white; padding: 12px 0px;";
}

form.addEventListener("input", calcTotalPrice);