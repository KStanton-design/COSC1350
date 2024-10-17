/*
	Tipton Turbines
     Program to display games results in a web table
     Author: Kathy Stanton
     Date: 10/17/24

     Filename: js03.js
 */

     //Days of the week

     let WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

     document.getElementsByTagName("th")

     window.addEventListener("load", addWeekDays);

     //Function to write weekday names intothe calendar
     function addWeekDays(){
        let i = 0; //initial counter value

    //reference the collection of heading cells
        let headingCells = document.getElementsByTagName("th");

       //write each of the seven days into a heading cell
       while (i < 7) {
        headingCells[i].innerHTML = WeekDays[i];

        //increase the counter by 1
        i++;
       }
     }
        window.addEventListener("load", showGames);

        //Function to write game information into the calendar
        function showGames(){
            for (let i = 0; i< gameDates.length; i++) {
                let gameInfo = "";

                //Open the paragraph
                switch (gameResults[i]) {
                    case "W":
                        gameInfo += "<p class='win'>";
                        break;
                    case "L":
                        gameInfo += "<p class='lose'>";
                        break;
                    case "S":
                        gameInfo +="<p class='suspended'>";
                        break;
                    case "p":
                        gameInfo += "<p class='postponed'>";
                        break;
                }

                //Display the game location
                if(gameLocations[i] === "h"){
                    gameInfo += "vs. ";
                }else if (gameLocations[i] === "a"){
                    gameInfo += "@ ";
                }
    
            //Include the opponent
                gameInfo += gameOpponents[i] + "<br>";

                //Include the result and score
                gameInfo += gameResults [i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

            //Display innings played for suspended, shortened, or extra inning games
                if (gameInnings [i] < 5) {
                    gameInfo += " [" + gameInnings[i]+"]***";
                } else if (gameInnings[i] < 9) {
                    gameInfo += " [" + gameInnings[i]+"]*";
                } else if (gameInnings[i] > 9) {
                    gameInfo += " [" + gameInnings[i] + "]";
                }

                //close paragraph
                gameInfo += "</p>";

                //write the information into a table cell
                let tableCell = document.getElementById(gameDates[i]);
                tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
            }
        }
    
        

