//--------------get all the input field value-------------
function getInputValue(inputId) {
    const userInput = document.getElementById(inputId);
    const inputAmountText = userInput.value;
    const inputAmount = parseFloat(inputAmountText);
    if (userInput.value >= 0) {
        userInput.value = '';
        return inputAmount;
    }
    else{
        userInput.value = '';
    }
   } 

//------------get and set expense and balance value------------
function setDisplayValue(amountId, isAdd, total, expense) {
    const displayTotal = document.getElementById(amountId);
    if (isAdd == true) {
        const displayTotalValue = total ; 
        displayTotal.innerText = displayTotalValue.toFixed(3); 
        return displayTotalValue;
    }
    else{
        const displayTotalValue = total - expense; 
        displayTotal.innerText = displayTotalValue.toFixed(3); 
        return displayTotalValue;
    } 
}

//------------calculate button events----------------
document.getElementById('calculate-button').addEventListener('click', function () {
    //get income field value    
        const incomeAmount = getInputValue('income');
    //get food field value
        const foodAmount = getInputValue('food');
    //get rent field value
        const rentAmount = getInputValue('rent');
    //get cloth field value
        const clothAmount = getInputValue('clothes');
    //Total expenses value
        const totalExpense = foodAmount + rentAmount + clothAmount; 

    //Update expense and balance value
        if (incomeAmount > 0 && typeof incomeAmount == "number" && incomeAmount > totalExpense && typeof totalExpense == "number") {
        //get and set expense and balance value
        setDisplayValue('total-expense', true, totalExpense);
        setDisplayValue('balance-left', false, incomeAmount, totalExpense);
       }
       else if (incomeAmount < totalExpense) {
           alert('Your expense'+' '+totalExpense +' '+'is greater than your income'+' '+incomeAmount)
       }
       else{
        alert('Please provide valid input')
       }
   })

   //-------------savings calculation--------------
document.getElementById('savings-btn').addEventListener('click', function(){
        const savingAmountPercentage = getInputValue('savings-percentage');

        //get previous balance value
        const previousBalance = document.getElementById('balance-left');
        const previousBalanceText = previousBalance.innerText;
        const previousBalanceValue = parseFloat(previousBalanceText);

    if (savingAmountPercentage >= 0 && savingAmountPercentage <= 100) {
        //set saving amount
        const savingAmount = document.getElementById('saving-amount');
        const savingAmountValue = (savingAmountPercentage / 100) * previousBalanceValue;
        savingAmount.innerText = savingAmountValue.toFixed(3);
        //set remaining balance
        const remainingAmount = document.getElementById('remaining-balance');
        remainingAmount.innerText = (previousBalanceValue - savingAmountValue).toFixed(3);
    }
    else{
        alert('Percentage must be a number and not less than 0 and grater than 100!')
    }
   })


   
   

   