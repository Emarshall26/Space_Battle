### Space Battle
#### Setting up our project directory
1. Create a project directory `$ mkdir yourname-mid-mod-1`
2. `$ cd yourname-mid-mod-1`
3. `$ touch index.html app.js` 
#### Guide to get started 
##### 1 Player game 
- USS Schwarzenegger (User)
  - Attacks first 
  - Is able to retreat 
  - Hull: 20
  - Firepower: 5
  - Accuracy: .7
- 6 Alien ships (Computer)
  - Hull: 3-6
  - Firepower: 2-4
  - Accuracy: .6 - .8
  - <b>Weakness</b> They attack one at a time 
  - <b>Hull (AKA hitpoints):</b>  If hull reaches 0 or less, the ship is destroyed
  - <b>Firepower:</b> Amount of damage done to the hull of the target with a successful hit 
  - <b>Accuracy: </b> is the chance between 0-1 that the ship will hit its target
      - Everytime the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random` 
      - If the ships accuracy is greater than `0.8`than the attack is missed
      - If the ships accuracy is less than or equal to `0.8` the attack will be successful 
#### Functionality pseudocode
- Welcome to the game 
- User starts the game
- User can click attack! 
- If alien ship isn't attacked then it is the alien's turn
- If the user survives the alien attack then User can `attack` or `retreat`
- If user retreats the game is over 
