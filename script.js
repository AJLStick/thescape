var money = 0;

function cashClick(number){
    cash = cash + number;
    document.getElementById("cash").innerHTML = cash;
};

var armor = 0;

function buyArmor(){
    var armorCost = Math.floor(10 * Math.pow(1.1,armor));     //works out the cost of this cursor
    if(cash >= armorCost){                                   //checks that the player can afford the cursor
        armor = armor + 1;                                   //increases number of cursors
    	cash = cash - armorCost;                          //removes the cookies spent
        document.getElementById('armor').innerHTML = armor;  //updates the number of cursors for the user
        document.getElementById('cash').innerHTML = cash;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,armor));       //works out the cost of the next cursor
    document.getElementById('armorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cashClick(armor);
	
}, 1000);
