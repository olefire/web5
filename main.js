function calc() {
    let cost = document.getElementById("cost");
    let amount = document.getElementById("amount");
    let result = document.getElementById("result");
    let re = /\D/;
    let test_cost = cost.value.match(re);
    let test_amount = amount.value.match(re);
    if (cost.value === "" || amount.value === "")
        result.innerHTML = "Введите данные!";
    else if (!isNaN(test_cost || test_amount))
        result.innerHTML = ("Стоимость вашего заказа: " + parseFloat(cost.value) * parseInt(amount.value));
    else result.innerHTML = "Неверный формат записи чисел!";
}
window.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById("btn-calc");
    btn.addEventListener("click", calc);
});

