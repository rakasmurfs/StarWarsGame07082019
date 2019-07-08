var players = 
[
    darthMinion = 
        {
            name: "Darth Maul",
            idName: "darthMaul",
            health: 150,
            attackPower: 2,
            baseAttackPower: 2,
            counterAttackPower: 20,
            isPlayerOne: false,
            isPlayerTwo: false,
            image: "<img src='assets/images/darthMaulMinion.jpg' class='darthMaul'>",
        },
    jediMinion = 
        {
            name: "Jedi",
            idName: "jedi",
            health: 120,
            attackPower: 8,
            baseAttackPower: 8,
            counterAttackPower: 5,
            isPlayerOne: false,
            isPlayerTwo: false,
            image: "<img src='assets/images/jediMinion.jpg' class='jedi'>",
        },
    yodaMinion =
        {
            name: "Yoda",
            idName: "yoda",
            health: 180,
            attackPower: 1,
            baseAttackPower: 1,
            counterAttackPower: 25,
            isPlayerOne: false,
            isPlayerTwo: false,
            image: "<img src='assets/images/yodaMinion.jpeg' class='yoda'>",
        },
    trooperMinion = 
        {
            name: "Trooper",
            idName: "trooper",
            health: 220,
            attackPower:0,
            baseAttackPower: 0,
            counterAttackPower: 10,
            isPlayerOne: false,
            isPlayerTwo: false,
            image: "<img src='assets/images/trooperMinion.jpg' class='trooper'>",
        },
]
var playerOneSelected = false;
var playerTwoSelected = false;
var enemiesRemaining = players.length - 1;
var playerOneAttack;
var playerOneBaseAttack;
var playerOneHealth;
var playerTwoHealth;
var playerTwoCounter;
var playerTwoName;
var playerOneTrooper;
var playerTwoTrooper;
var wins = 0;
var losses = 0;
var gameover=true;

$( document ).ready(function() 
    {
        function newGame()
            {
                 players = 
                    [
                        darthMinion = 
                            {
                                name: "Darth Maul",
                                idName: "darthMaul",
                                health: 150,
                                attackPower: 2,
                                baseAttackPower: 2,
                                counterAttackPower: 20,
                                isPlayerOne: false,
                                isPlayerTwo: false,
                                image: "<img src='assets/images/darthMaulMinion.jpg' class='darthMaul'>",
                            },
                        jediMinion = 
                            {
                                name: "Jedi",
                                idName: "jedi",
                                health: 120,
                                attackPower: 8,
                                baseAttackPower: 8,
                                counterAttackPower: 5,
                                isPlayerOne: false,
                                isPlayerTwo: false,
                                image: "<img src='assets/images/jediMinion.jpg' class='jedi'>",
                            },
                        yodaMinion =
                            {
                                name: "Yoda",
                                idName: "yoda",
                                health: 180,
                                attackPower: 1,
                                baseAttackPower: 1,
                                counterAttackPower: 25,
                                isPlayerOne: false,
                                isPlayerTwo: false,
                                image: "<img src='assets/images/yodaMinion.jpeg' class='yoda'>",
                            },
                        trooperMinion = 
                            {
                                name: "Trooper",
                                idName: "trooper",
                                health: 320,
                                attackPower:0,
                                baseAttackPower: 0,
                                counterAttackPower: 10,
                                isPlayerOne: false,
                                isPlayerTwo: false,
                                image: "<img src='assets/images/trooperMinion.jpg' class='trooper'>",
                            },
                    ]
playerOneSelected = false;
playerTwoSelected = false;
enemiesRemaining = players.length - 1;
playerOneAttack;
playerOneBaseAttack;
playerOneHealth;
playerTwoHealth;
playerTwoCounter;
playerTwoName;
playerOneTrooper;
playerTwoTrooper;
gameover = true;
playerOneTrooper = false;
playerTwoTrooper = false;
$("#playerOne").html("");
$("#enemies").html("");
$("#playerTwo").html("");
$("#result").html("");
$("characters").html("");

for(i=0; i< players.length; i++)
    {
        var objectPos = players[i];
        $("#characters").append('<div id =' + objectPos.idName +'></div>');
        $("#"+objectPos.idName).attr('class', objectPos.idName);
        $("#"+objectPos.idName).append(objectPos.image);
        $("#"+objectPos.idName).append("<span> <br>" + objectPos.name + "</span>" + "<br>"); //+ "<span class="
    }
    $("#darthMaul").on("click", function()
    {
        if(playerOneSelected === false)
            {
                $("#darthMaul").appendTo("#playerOne");
                darthMinion.isPlayerOne = true;
                playerOneSelected = true;
                $("#jedi").appendTo("#enemies");
                $("#yoda").appendTo("#enemies");
                $("#trooper").appendTo("#enemies"); 
                playerOneAttack = darthMinion.attackPower;
                playerOneHealth = darthMinion.health;
                playerOneBaseAttack = darthMinion.baseAttackPower;
                $("#darthMaul").append("<span class = 'playerOneHP'>" + "HP: " + darthMinion.health + "</span>");
            }
    }); 
$("#jedi").on("click", function()
    {
        if(playerOneSelected === false)
            {
                $("#jedi").appendTo("#playerOne");
                jediMinion.isPlayerOne = true;
                playerOneSelected = true;
                $("#darthMaul").appendTo("#enemies");
                $("#yoda").appendTo("#enemies");
                $("#trooper").appendTo("#enemies"); 
                playerOneAttack = jediMinion.attackPower;
                playerOneHealth = jediMinion.health;
                playerOneBaseAttack = jediMinion.baseAttackPower;
                $("#jedi").append("<span class = 'playerOneHP'>" + "HP: " + jediMinion.health + "</span>");
            }
    }); 
$("#yoda").on("click", function()
    {
        if(playerOneSelected === false)
            {
                $("#yoda").appendTo("#playerOne");
                yodaMinion.isPlayerOne = true;
                playerOneSelected = true;
                $("#darthMaul").appendTo("#enemies");
                $("#jedi").appendTo("#enemies");
                $("#trooper").appendTo("#enemies"); 
                playerOneAttack = yodaMinion.attackPower;
                playerOneBaseAttack = yodaMinion.baseAttackPower;
                playerOneHealth = yodaMinion.health;
                $("#yoda").append("<span class = 'playerOneHP'>" + "HP: " + yodaMinion.health + "</span>");
            }
    }); 
$("#trooper").on("click", function()
    {
        if(playerOneSelected === false)
            {
                $("#trooper").appendTo("#playerOne");
                trooperMinion.isPlayerOne = true;
                playerOneSelected = true;
                $("#darthMaul").appendTo("#enemies");
                $("#jedi").appendTo("#enemies");
                $("#yoda").appendTo("#enemies"); 
                playerOneAttack = trooperMinion.attackPower;
                playerOneHealth = trooperMinion.health;
                playerOneBaseAttack = trooperMinion.baseAttackPower;
                $("#trooper").append("<span class = 'playerOneHP'>" + "HP: " + trooperMinion.health + "</span>");
                playerOneTrooper = true;
            }
    }); 
    $("#darthMaul").on("click", function()
    {
        if(playerOneSelected === true && darthMinion.isPlayerOne ===false && playerTwoSelected === false)
            {
                $("#darthMaul").appendTo("#playerTwo");
                darthMinion.isPlayerTwo = true;
                playerTwoSelected = true;
                playerTwoHealth = darthMinion.health;
                playerTwoCounter = darthMinion.counterAttackPower;
                $("#darthMaul").append("<span class = 'playerTwoHP'>" + "HP: " + darthMinion.health + "</span>");
                playerTwoName = darthMinion.name;
            }
    }); 
$("#trooper").on("click", function()
    {
        if(playerOneSelected === true && trooperMinion.isPlayerOne ===false && playerTwoSelected === false)
            {
                $("#trooper").appendTo("#playerTwo");
                trooperMinion.isPlayerTwo = true;
                playerTwoSelected = true;
                playerTwoHealth = trooperMinion.health;
                playerTwoCounter = trooperMinion.counterAttackPower;
                $("#trooper").append("<span class = 'playerTwoHP'>" + "HP: " + trooperMinion.health + "</span>");
                playerTwoName = trooperMinion.name;
                playerTwoTrooper = true;
            }
    }); 
$("#yoda").on("click", function()
    {
        if(playerOneSelected === true && yodaMinion.isPlayerOne ===false && playerTwoSelected === false)
            {
                $("#yoda").appendTo("#playerTwo");
                yodaMinion.isPlayerTwo = true;
                playerTwoSelected = true;
                playerTwoHealth = yodaMinion.health;
                playerTwoCounter = yodaMinion.counterAttackPower;
                $("#yoda").append("<span class = 'playerTwoHP'>" + "HP: " + yodaMinion.health + "</span>");
                playerTwoName = yodaMinion.name;
            }
    }); 
$("#jedi").on("click", function()
    {
        if(playerOneSelected === true && jediMinion.isPlayerOne ===false && playerTwoSelected === false)
            {
                $("#jedi").appendTo("#playerTwo");
                jediMinion.isPlayerTwo = true;
                playerTwoSelected = true;
                playerTwoHealth = jediMinion.health;
                playerTwoCounter = jediMinion.counterAttackPower;
                $("#jedi").append("<span class = 'playerTwoHP'>" + "HP: " + jediMinion.health + "</span>");
                playerTwoName = jediMinion.name;
            }
    }); 
            }



            //below generates each div/image of my objects
        for(i=0; i< players.length; i++)
            {
                var objectPos = players[i];
                $("#characters").append('<div id =' +objectPos.idName +'></div>');
              //  $("#players").attr('id', objectPos.idName);
                $("#"+objectPos.idName).attr('class', objectPos.idName);
                $("#"+objectPos.idName).append(objectPos.image);
                $("#"+objectPos.idName).append("<span> <br>" + objectPos.name + "</span>" + "<br>"); //+ "<span class="+objectPos.idName + "Health>" + "HP: " + objectPos.health + "</span>");
            }

//below is first player selection

        $("#darthMaul").on("click", function()
            {
                if(playerOneSelected === false)
                    {
                        $("#darthMaul").appendTo("#playerOne");
                        darthMinion.isPlayerOne = true;
                        playerOneSelected = true;
                        $("#jedi").appendTo("#enemies");
                        $("#yoda").appendTo("#enemies");
                        $("#trooper").appendTo("#enemies"); 
                        playerOneAttack = darthMinion.attackPower;
                        playerOneHealth = darthMinion.health;
                        playerOneBaseAttack = darthMinion.baseAttackPower;
                        $("#darthMaul").append("<span class = 'playerOneHP'>" + "HP: " + darthMinion.health + "</span>");
                    }
            }); 
        $("#jedi").on("click", function()
            {
                if(playerOneSelected === false)
                    {
                        $("#jedi").appendTo("#playerOne");
                        jediMinion.isPlayerOne = true;
                        playerOneSelected = true;
                        $("#darthMaul").appendTo("#enemies");
                        $("#yoda").appendTo("#enemies");
                        $("#trooper").appendTo("#enemies"); 
                        playerOneAttack = jediMinion.attackPower;
                        playerOneHealth = jediMinion.health;
                        playerOneBaseAttack = jediMinion.baseAttackPower;
                        $("#jedi").append("<span class = 'playerOneHP'>" + "HP: " + jediMinion.health + "</span>");
                    }
            }); 
        $("#yoda").on("click", function()
            {
                if(playerOneSelected === false)
                    {
                        $("#yoda").appendTo("#playerOne");
                        yodaMinion.isPlayerOne = true;
                        playerOneSelected = true;
                        $("#darthMaul").appendTo("#enemies");
                        $("#jedi").appendTo("#enemies");
                        $("#trooper").appendTo("#enemies"); 
                        playerOneAttack = yodaMinion.attackPower;
                        playerOneBaseAttack = yodaMinion.baseAttackPower;
                        playerOneHealth = yodaMinion.health;
                        $("#yoda").append("<span class = 'playerOneHP'>" + "HP: " + yodaMinion.health + "</span>");
                    }
            }); 
        $("#trooper").on("click", function()
            {
                if(playerOneSelected === false)
                    {
                        $("#trooper").appendTo("#playerOne");
                        trooperMinion.isPlayerOne = true;
                        playerOneSelected = true;
                        $("#darthMaul").appendTo("#enemies");
                        $("#jedi").appendTo("#enemies");
                        $("#yoda").appendTo("#enemies"); 
                        playerOneAttack = trooperMinion.attackPower;
                        playerOneHealth = trooperMinion.health;
                        playerOneBaseAttack = trooperMinion.baseAttackPower;
                        $("#trooper").append("<span class = 'playerOneHP'>" + "HP: " + trooperMinion.health + "</span>");
                        playerOneTrooper = true;
                    }
            }); 
//end first player selection


//BELOW IS DEFENDER SELECTION
        $("#darthMaul").on("click", function()
            {
                if(playerOneSelected === true && darthMinion.isPlayerOne ===false && playerTwoSelected === false)
                    {
                        $("#darthMaul").appendTo("#playerTwo");
                        darthMinion.isPlayerTwo = true;
                        playerTwoSelected = true;
                        playerTwoHealth = darthMinion.health;
                        playerTwoCounter = darthMinion.counterAttackPower;
                        $("#darthMaul").append("<span class = 'playerTwoHP'>" + "HP: " + darthMinion.health + "</span>");
                        playerTwoName = darthMinion.name;
                    }
            }); 
        $("#trooper").on("click", function()
            {
                if(playerOneSelected === true && trooperMinion.isPlayerOne ===false && playerTwoSelected === false)
                    {
                        $("#trooper").appendTo("#playerTwo");
                        trooperMinion.isPlayerTwo = true;
                        playerTwoSelected = true;
                        playerTwoHealth = trooperMinion.health;
                        playerTwoCounter = trooperMinion.counterAttackPower;
                        $("#trooper").append("<span class = 'playerTwoHP'>" + "HP: " + trooperMinion.health + "</span>");
                        playerTwoName = trooperMinion.name;
                        playerTwoTrooper = true;
                    }
            }); 
        $("#yoda").on("click", function()
            {
                if(playerOneSelected === true && yodaMinion.isPlayerOne ===false && playerTwoSelected === false)
                    {
                        $("#yoda").appendTo("#playerTwo");
                        yodaMinion.isPlayerTwo = true;
                        playerTwoSelected = true;
                        playerTwoHealth = yodaMinion.health;
                        playerTwoCounter = yodaMinion.counterAttackPower;
                        $("#yoda").append("<span class = 'playerTwoHP'>" + "HP: " + yodaMinion.health + "</span>");
                        playerTwoName = yodaMinion.name;
                    }
            }); 
        $("#jedi").on("click", function()
            {
                if(playerOneSelected === true && jediMinion.isPlayerOne ===false && playerTwoSelected === false)
                    {
                        $("#jedi").appendTo("#playerTwo");
                        jediMinion.isPlayerTwo = true;
                        playerTwoSelected = true;
                        playerTwoHealth = jediMinion.health;
                        playerTwoCounter = jediMinion.counterAttackPower;
                        $("#jedi").append("<span class = 'playerTwoHP'>" + "HP: " + jediMinion.health + "</span>");
                        playerTwoName = jediMinion.name;
                    }
            }); 
//END DEFENDER SELECTION
        

        function attack()
            {
                    if(playerOneSelected === true && playerTwoSelected === true && gameover===true){

                        if(playerOneHealth > 0)
                            {
                                // below is the trooper only attack hit chance
                                if(playerOneTrooper===true)
                                    {
                                        random =Math.floor(Math.random() *101);
                                        if(random <= 20)
                                            {
                                                playerOneAttack = 120;
                                            }
                                        else
                                            {
                                                playerOneAttack = 0;
                                            }
                                    }
                                    //end trooper only attack hit chance
                                playerTwoHealth-=playerOneAttack;
                                if(playerTwoHealth>0)
                                    {
                                        playerOneHealth-=playerTwoCounter;
                                    }
                                $(".playerOneHP").text(playerOneHealth);
                                $(".playerTwoHP").text(playerTwoHealth);              
                                if(playerOneAttack > 0)
                                    {
                                        $("#result").text("You attacked for " + playerOneAttack + " damage." + "You took " + playerTwoCounter + " damage.");
                                        playerOneAttack+=playerOneBaseAttack;
                                    }
                                else
                                    {
                                        $("#result").text("You missed! Only imperial troopers can be so accurate."); 
                                    }            

                            }
                        if(playerOneHealth <= 0 && playerTwoSelected === true && gameover===true)
                            {
                                $(".playerOneHP").text(0);
                                $("#result").text("YOU LOSE!");
                                $("#result").append("<br><button id='newGame'>New Game</button>");
                                losses++
                                $("#winLose").html("<h2> Wins: " + wins + " Losses: " + losses +"</h2>");                                $("#newGame").on("click", newGame);
                                gameover = false;

                            }
                        if(playerTwoHealth <= 0)
                            {
                                $("#playerTwo").html("");
                                $("#result").text("You defeated " + playerTwoName +". Please select a new target");
                                enemiesRemaining--;
                                if(enemiesRemaining === 0 && playerTwoSelected === true && gameover === true)
                                    {
                                        $("#result").text("YOU WIN!");
                                        $("#result").append("<br><button id='newGame'>New Game</button>");
                                        wins++
                                        $("#winLose").html("<h2> Wins: " + wins + " Losses: " + losses +"</h2>");
                                        $("#newGame").on("click", newGame);
                                        gameover = false;
                                    }
                                playerTwoSelected = false;
                            }

                    }
            }
        $("#attack").click(attack);









        
   // var player;
   // var opponent;
   // playerOneSelected = false;
   // playerTwoSelected = false;
   // gameStart = false;
    //var enemiesRemaining = players.length - 1;
    //var lightsaberClash = new Audio("mp3path");
    //var buttonSelect = new Audio("p3path");
    //var laser = new Audio("mp3path");
    //var minionLaugh = new Audio("mp3path");

    //resetValues()




    }); 