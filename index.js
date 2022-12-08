// div with buttons for selecting tip percent
const tipPercentsDiv = document.querySelector('.tipPercents')
const tipBtns = document.querySelectorAll('#tipBtn');

// div for asking how much bill total was
const billTotalDiv = document.querySelector('.billTotalDiv');
const billInput = document.querySelector('#billInput');
const billTotalBtn = document.querySelector('#billTotalBtn');

// div for giving final tip total
const tipTotalDiv = document.querySelector('.tipTotalDiv');
const tipTotalH2 = document.querySelector('.tipTotalH2');
const refreshBtn = document.querySelector('.refreshBtn');


tipPercentsDiv.style.display = 'none';
tipTotalDiv.style.display = 'none';



let billTotal;

billTotalBtn.addEventListener('click', function () {
    billTotal = billInput.value

    console.log(billTotal)
    billTotalDiv.style.display = 'none';
    tipPercentsDiv.style.display = 'block';
})


function getTipPercent() {
    let tipPercent;

    for (let i = 0; i < tipBtns.length; i++) {
        tipBtns[i].addEventListener('click', function () {

            console.log(tipBtns[i].textContent);

            tipPercent = tipBtns[i].textContent;
            tipPercentsDiv.style.display = 'none';
            getTipTotal()
        })
    }


    function getTipTotal() {
        let tipAmount = billTotal * `.${tipPercent}`
        console.log(tipAmount.toFixed(2));

        tipTotalH2.textContent = `Your Tip Amount: $${tipAmount.toFixed(2)}`

        tipTotalDiv.style.display = 'block';

        refreshBtn.addEventListener('click', function () {
            window.location.reload();
        })
    }
}

getTipPercent()
