const randomNumbers = [];
let numberChecked = 0;
const rowEl = document.querySelector('.row');

while (randomNumbers.length < 5) {

    const number = Math.floor(Math.random() * 101);
    randomNumbers.includes(number) ? '' : randomNumbers.push(number);
    
}


randomNumbers.forEach(number => {

    const colMarkUp = `
    <div class="col p-4 border border-black text-center fs-5"> ${number}</div>
    `;
    rowEl.insertAdjacentHTML('beforeend', colMarkUp)


});

setTimeout(resetNumber, 30000)
setTimeout(userNumbers, 31000)


function resetNumber() {

    rowEl.innerHTML = ""

}

function userNumbers() {

    randomNumbers.forEach((number, index) => {

        const userNumber = Number(prompt(`Inserisci il ${index + 1} numero`))
        const colMarkUp = `
    <div class="col p-4 border border-black text-center fs-5 "> 
        <div>${number}</div>
        <div class="${userNumber === number ? 'text-success' : 'text-danger'}">${userNumber}</div>
        <div> ${ userNumber === number ? '<i class="fa-solid fa-square-check" style="color: #00ff33;"></i>' : '<i class="fa-solid fa-square-xmark" style="color: #ff0000;"></i>'}</div>
    </div>
    `;
        userNumber == number ? numberChecked++ : '';
        rowEl.insertAdjacentHTML('beforeend', colMarkUp)

    })

    const pEl = `
        <div class= "mt-5 text-center "> Sono stati indovinati <span class="fw-bold fs-5">${numberChecked}</span> numeri</div>
        `;
    rowEl.insertAdjacentHTML('beforeend', pEl)
}

