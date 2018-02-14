# week-4-game
Crystal Collector Game
This week we had to create a game that had/coud do the following:
   * There will be four crystals displayed as buttons on the page.
   * The player will be shown a random number at the start of the game.
   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
        * Your game will hide this amount until the player clicks a crystal.
        * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.
   * The player loses if their score goes above the random number.
   * The game restarts whenever the player wins or loses.
   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
   * The random number shown at the start of the game should be between 19 - 120.
   * Each crystal should have a random hidden value between 1 - 12.
   
 Project Submitted: The code submitted has a few minor deviations. 
   * The game was restyled to look more modern via Bootstrap elements. (Why did I struggle with these so much two weeks ago? A breeze!)
   * To make it easier to evaluate funtionality, the random numbers selected for the crystals are displayed. There are four lines of code flagged in the game.js file that cam be removed to bring the came into complete compliance. 
   * A completed games variable has been added. 
   * The console.log functions used in debugging the game have not been removed.
   * The user is also flagged with an alert when they win, instead of simply having the number update. 

Notes on code design: 

The game design is modelled after the calculator exercise in class.
* variables global to the application are declared on top. 
* There is an initiatialization of the game, which sets the values for the round, and updates the "board" with the relevant info. 
* While I initially thought about making the crystal values an array, it didn't seem that that would save much code, if any.
* I had thought about balancing the crytal values to return two even and two odd numbers in each round by tweeking the math funtions. 
      2*(Math.floor(Math.random()*6)) + 1;to return the odd numbers between 1-12.
      2*(Math.floor(Math.random()*7));to return the even numbers between 1-12.
      These were not implemented. So at least one out of every 32 games is unwinnable!
* The key to this program was adding values ("quartz", "sulphur", "diamond", and "ruby") to the button elements. 
      Initially I had wondered about using the numbers generated in a round and trying to substitutethose as the values in each round. 
      This seemed overly complex with an unncessary and messy conversion of numbers to strings and back again.
      Linking a variable to each value was far simpler. 
 * I had also thought about using recursion to simply run another round after round completion. (The run program would call itself.)
      Interestingly, this just resulted multiple games being run - and a piled up losses as no game ever ended. 
        (Thank you console.log!)
 * Like in the calculator exercise, I realized I didn't need the game to end. I just needed the variables to reset via another initialization. 
 
