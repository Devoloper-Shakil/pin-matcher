// input generate pin

function getPin() {
    const pin = (Math.random() * 10000 + '').split('.')[0];
    if (pin.length === 4) {
        return pin
    }
    else {
        return getPin();
    }
}


function genaratePin() {
    // document.getElementById('genaratePin').value =Math.floor((Math.random() * 10000 + '').split('.')[0]);
    const pinInput = document.getElementById('pin').value = getPin();
}

// event handler calculator button

const buttonContainer = document.getElementById('digits-container');
    buttonContainer.addEventListener('click', function (event) {
        const digit = event.target.innerText;
        if (isNaN(digit)) {
            //handler backspace
            // handle claer
            if (digit === 'C') {
                const typedInput = document.getElementById('typed-pin');
                typedInput.value= ' ';
            }
            // if (digit === 'B') {
            //     const typedInput = document.getElementById('typed-pin');
            //     typedInput.value=- 1;
            // }
        }
        else{
            const typedInput = document.getElementById('typed-pin');
                typedInput.value= typedInput.value+digit;
        }
    })

    // verify handle
    function verifyPin() {
        const pin = document.getElementById('pin').value;
        const typedPin = document.getElementById('typed-pin').value;
        if (pin === typedPin) {
            displayMatch('block', 'none');
        }
        else{
            displayMatch( 'none' , 'block');
        }
    }

    function displayMatch(corrrectStatus , incorrrectStatus) {
        const correct = document.getElementById('correct-pin');
            correct.style.display= corrrectStatus;
           const incorrect = document.getElementById('incoreect-pin');
            incorrect.style.display= incorrrectStatus;
    }