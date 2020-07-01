//Pseduo
//create charactors in battle
//set different values input
//captain has first hit, create in that order
//alien attacks next if captain fails/ break
//create options for player to retreat
//creat option to Attack
//loop to generate new ships


    class Ship { // created Alien in a class give multiple properties, which makes it easier to call on
    constructor() {
    // this.name = name;
    this.hull = Math.floor(Math.random()*4) + 3// hitpoits
    this.firepower = Math.floor(Math.random()*3) + 2 // firepower
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10 // target accuracy, this method will generate random numbers between the set inputs
    
    }

    }
    
    
    const USS = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
    
}

     //Bonus
    // function BonusAiens() {
    //     let Range = [7, 8, 9, 10]
    //     let bAliens = Range[Math.floor(Math.random() * Range.length)]
    //     return bAliens
    //     }
      // console.log (this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10) just for testing purposes
    //random alien generator created
    let aShip = []
    function aGenerator(n) {
    for (let i = 0; i < n; i++) {
    let alien = new Ship()
    aShip.push(alien)
    console.log(aShip)
   
    }
    }
   aGenerator(BonusAiens())
    console.log(USS)

    // Begin game with alert to welcome player, creating functions as well
    function Game() {
    alert("Welcome to Elmira's Universe! Are you ready to save this planet from Aliens? Get ready, you're now in charge of the USS ship!")
    Action()
    
    }
    Game()

    function Action() {
        if (USS.hull > 0) {
            let player = prompt(`These guys are starting to move in, Do you want to 'attack' or 'run'? The choice is yours`) 
            if (player === "attack") {
                Battle()
            }else if (player === "run"){
                run()
            } else {
                alert(`Only answer "attack" or "run"`) 
            }
        
        }
         
        Action()
            
    }
     
    function Battle() {
           if (Math.random() < USS.accuracy) {
        aShip[0].hull -= USS.firepower
        if (aShip[0].hull <= 0) {
        aShip.shift()
          if (aShip.length >= 1) {
           Progress()
            Action()
        } else {
        Win()
        }
             } else {
              enemy()
            }
             } else {
             Missed()
              enemy()
           }
          }
    
    
    

    function enemy() {
    if (Math.random() < this.accuracy) {
   USS.hull -= alienArmy[0].firepower
    if (Uss.hull <= 0) {
    Lose()
    } else {
    win()
    Battle()
     }
    } else {
    Battle()
    }

    }

    
    // Fuctions we're going to call during game
    
    function Progress() {
    alert(
     `Victory, you're safe for now!still ${aShip.length} more out there!`
    )
    }
    
    function Missed() {
    alert(`Missed, Try again`)

    }
    
    function run() {
       alert(`Come on the fun just started! well, Goodbye for now`)
     }

    function Win() {
    alert(
        `Victory, you're safe for now!`)
    }

    function Lose() {
    alert(`Not this time buddy, Maybe another round, You lost!`)
    
}


 
//trying the bonus to generate new range of attacks from alien
function BonusAiens() { // empty parma to since its random we can past new ships
    let Range = [7, 8, 9, 10]
    let bAliens = Range[Math.floor(Math.random() * Range.length)]// randomizing 
    return bAliens // returning what we requested
    }



    //I wanted to do two separate class for each character, but ran into some issues.
    //lots of try and errors