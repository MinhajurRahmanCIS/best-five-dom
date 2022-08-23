//Budget calculating
document.getElementById("calculate-button").addEventListener("click", function(){

    
    const perPlayer = document.getElementById("input-perPlayer");
    const perPlayerAmountString = perPlayer.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);
    perPlayer.value = "";

    const totalPlayer = document.querySelector("#player-input").children;
   
    const perPlayerTotalAmount = totalPlayer.length * perPlayerAmount; 
   
    const playerExpenses = document.getElementById("player-expenses");

    playerExpenses.innerText = perPlayerTotalAmount;
    
})

document.getElementById("calculateTotal-button").addEventListener("click", function(){

    const inputManager = document.getElementById("input-manager");
    const inputManagerAmountString = inputManager.value;
    const inputManagerAmount = parseFloat(inputManagerAmountString);
    inputManager.value = "";

    const inputCoach = document.getElementById("input-coach");
    const inputCoachAmountString = inputCoach.value;
    const inputCoachAmount = parseFloat(inputCoachAmountString);
    inputCoach.value = "";
    
    const playerExpenses = document.getElementById("player-expenses");
    const playerExpensesAmountString =  playerExpenses.innerHTML;
    const playerExpensesAmount = parseFloat(playerExpensesAmountString);
    const totalBudget = playerExpensesAmount + inputManagerAmount + inputCoachAmount;
    
    const totalAmount = document.getElementById("total-amount");
    
    totalAmount.innerText = totalBudget;




})
