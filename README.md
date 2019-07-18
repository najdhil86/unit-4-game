# Crystal Game

## Objective:

Make a random guessing game. The numbers will be hidden by gems. The user goal is to match their total score to a randomly chosen number from the computer

## Game Flow:

- There will be four crystals displayed as buttons on the page.
- The player will be shown a random number at the start of the game.
- When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

     * The game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

- The game restarts whenever the player wins or loses.
- When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

## Game Design Notes:

- The random number shown at the start of the game should be between 19 - 120.

- Each crystal should have a random hidden value between 1 - 12.