const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let message = 'Согласно вашему тарифу, вам была присвоена ставка: ';

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`); // Ваш депозит на начало расчетного периода составлял 30000 руб

console.log(`${message} + ${interestRate}`); // Согласно вашему тарифу, вам была присвоена ставка 18.5%

console.log(`К концу расчётного периода прирост составил ${growth} рублей и на данный момент ваш депозит составляет ${+deposit + +growth} руб`); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

button.addEventListener('click', () => {
    const sum = document.querySelector('.sum').value;
    let result = ((sum / 100) * 7) + +sum;
    let message = 'Через год у вас будет ' + result + ' руб на счету';
  total.textContent = (message); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});