
document.addEventListener('dblclick', function (event) {
    event.preventDefault();
});

function redirect(opt){
    switch(opt){
        case 'invest':
            document.location.href = 'invest.html';
            break;
        case 'earn':
            document.location.href = 'index.html';
            break;
        case 'business':
            document.location.href = 'business.html';
            break;
        case 'profile':
            document.location.href = 'profile.html';
            break;
        case 'company':
            document.location.href = 'company.html';
            break;
            
    }
}

function CheckClick(){
    // const url = 'traitements/user_data.php?checkUserToken=true';

    // fetch (url)
    // .then(rep => rep.text())
    // .then(data => {
    //     console.log(data)
    // })
    // .catch(err => console.error(err))
    let earnPerClick = 0.05;
    let mainValueWallet = document.getElementById('mainValueWallet');
    let mainValueWalletInput = document.getElementById('mainValueWalletInput');

    let currentValue = parseFloat(mainValueWalletInput.value) || 0;
    let newValue = currentValue + earnPerClick;

    mainValueWalletInput.value = newValue.toFixed(2);
    mainValueWallet.textContent = mainValueWalletInput.value;
}

function changeCurrency(){
    let menuChangeCurrency = document.querySelector('.menu-change-currency');
    if (menuChangeCurrency.style.display === 'block') {
        menuChangeCurrency.style.display = 'none';
    } else {
        menuChangeCurrency.style.display = 'block';
    }
}