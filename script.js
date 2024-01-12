const randomNumbers = [];

while( randomNumbers.length < 5 ){

    const number = Math.floor(Math.random() * 101);
    randomNumbers.includes(number) ? '' : randomNumbers.push(number);

}

const rowEl = document.querySelector('.row');

randomNumbers.forEach(number => {
    
    const colMarkUp = `
    <div class="col p-4 border border-black text-center fs-5"> ${number}</div>
    `;
    rowEl.insertAdjacentHTML('beforeend', colMarkUp)


});