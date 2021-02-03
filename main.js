// input generate pin

    function getPin() {
    const random = Math.random() * 10000;
     const pin = (random + " ").split('.')[0];
    if (pin.length === 4) {
        return pin
    }
    else {
        return getPin();
    }
}


function genaratePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
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
            if (digit === "B") {
             const typeInputPin = document.getElementById("typed-pin").value;
             const backPin = typeInputPin.substr(0, typeInputPin.length - 1);
              document.getElementById("typed-pin").value = backPin;
             }
            
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
        // trial 
            let tryc = document.getElementById("try-count").innerText;
            const tryNumbe = parseInt(tryc);
            const trycount = tryNumbe + 1;
            document.getElementById("try-count").innerText = trycount;
        

    
}
function displayMatch(corrrectStatus , incorrrectStatus) {
        const correct = document.getElementById('correct-pin');
            correct.style.display= corrrectStatus;
           const incorrect = document.getElementById('incoreect-pin');
            incorrect.style.display= incorrrectStatus;
    }
























