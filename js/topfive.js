

document.getElementById('player1-button').addEventListener('click', function () {
    
    
    const activeButton = document.getElementById("player1-button");
    const player1Name = document.getElementById("player1-name")

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = player1Name.innerText;
    
    

    const totalPlayer = document.querySelector("#player-input").children;

    
    

    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
    
   }  

})
document.getElementById('player2-button').addEventListener('click', function () {
    
    
    const activeButton = document.getElementById("player2-button");
    const player2Name = document.getElementById("player2-name")

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = player2Name.innerText;
   
    

    const totalPlayer = document.querySelector("#player-input").children;
    
    
    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
   }  

})
document.getElementById('player3-button').addEventListener('click', function () {
    
    
    const activeButton = document.getElementById("player3-button");
    const player3Name = document.getElementById("player3-name")

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = player3Name.innerText;
   
    

    const totalPlayer = document.querySelector("#player-input").children;
    
    
    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
   }  

})
document.getElementById('player4-button').addEventListener('click', function () {
    
    
    const activeButton = document.getElementById("player4-button");
    const player4Name = document.getElementById("player4-name")

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = player4Name.innerText;
   
    

    const totalPlayer = document.querySelector("#player-input").children;
    
    
    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
   }  

})
document.getElementById('player5-button').addEventListener('click', function () {
    
    
    const activeButton = document.getElementById("player5-button");
    const player5Name = document.getElementById("player5-name")

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = player5Name.innerText;
   
    

    const totalPlayer = document.querySelector("#player-input").children;
    
    
    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
   }  

})
document.getElementById('player6-button').addEventListener('click', function () {
    
    
    const activeButton = document.getElementById("player6-button");
    const player6Name = document.getElementById("player6-name")

    const selectPlayer = document.getElementById('player-input');
    const li = document.createElement('li');
    li.innerText = player6Name.innerText;
   
    

    const totalPlayer = document.querySelector("#player-input").children;
    
    
    if(totalPlayer.length < 5){
        activeButton.setAttribute("disabled", true);
        selectPlayer.appendChild(li);
    }
   else{
    alert("No more select left!!");
   }  

})

