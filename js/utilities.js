//Using Function to reduce code line also try not use same code twice 
function playerSelectedV(playerButton, playersName){
    const activeButton = document.getElementById(playerButton);
    const playerName = document.getElementById(playersName)

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = playerName.innerText;
    
    const totalPlayer = document.querySelector("#player-input").children;

    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
   } 
}