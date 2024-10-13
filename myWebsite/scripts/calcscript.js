

window.onload =()=> {
    
    const calculateButton = document.getElementById('calculateButton');
    const billAmountInput = document.getElementById('billAmount');
    const serviceQualityInput = document.getElementById('serviceQuality');
    const totalTipElement = document.getElementById('totalTip');

    calculateButton.addEventListener('click', calculateTip);

    function calculateTip() {
        const billAmount = parseFloat(billAmountInput.value);

        const serviceQuality = parseFloat(serviceQualityInput.value);
        if (!isNaN(billAmount) && !isNaN(serviceQuality)) {

            const tipAmount = billAmount * serviceQuality;

            const totalAmount = billAmount + tipAmount;

            totalTipElement.textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
           
            
        }else {
            totalTipElement.textContent = "Please enter valid values.";
            
        }
        }
    }
    