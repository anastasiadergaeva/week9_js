const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

const interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

let consoleMessage = 'Согласно вашему тарифу, вам была присвоена ставка: ';

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency}`);
console.log(`${consoleMessage} + ${interestRate}%`);

console.log(`К концу расчётного периода прирост составил ${growth} рублей и на данный момент ваш депозит составляет ${+deposit + +growth} руб`);

button.addEventListener('click', () => {
    const sum = document.querySelector('.sum').value;
    const result = ((sum / 100) * 7) + +sum;
    const message = `Через год у вас будет ${result} рублей на счету`
  total.textContent = (message);
});