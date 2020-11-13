const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
];

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
    constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = true;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}
class blueTeammate{
    constructor(id, name, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.mascot = "Leap Frog";
        this.teamColor = "Blue";
    }
}
class redTeammate{
    constructor(id, name, mascot, teamColor){
        this.id = id;
        this.name = name;
        this.mascot = "Dragon";
        this.teamColor = "Red";
    }
}

const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        li.appendChild(button)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
        button.addEventListener('click', function() {
            makePlayer(person.id)
            this.parentElement.remove()
            let index = arrOfPeople.indexOf(person)
            arrOfPeople.splice(index, 1)
        })  
    })
}

const makePlayer = (id) => {
    console.log(`li ${id} was clicked!`)
    for (let person of arrOfPeople) {
        if (person.id === id) {
            let baller = new player(id, person.name)
            listOfPlayers.push(baller)
        }
    }
    const listElement = document.getElementById('players')
    listElement.innerHTML = null;
    listOfPlayers.map(person => {
        const li = document.createElement("li")
        const redButton = document.createElement("button")
        const blueButton = document.createElement("button")
        redButton.innerHTML = "Red Team"
        blueButton.innerHTML = "Blue Team"
        li.appendChild(redButton)
        li.appendChild(blueButton)
        li.appendChild(document.createTextNode(person.name + " - " + person.hasPaid))
        listElement.append(li)
        redButton.addEventListener('click', function() {
            console.log("red click")
            makeRedTeam(person.id)
            this.parentElement.remove()
            let index = listOfPlayers.indexOf(person)
            listOfPlayers.splice(index, 1)
        })
        blueButton.addEventListener('click', function() {
            console.log("blue click")
            makeBlueTeam(person.id)
            this.parentElement.remove()
            let index = listOfPlayers.indexOf(person)
            listOfPlayers.splice(index, 1)
        }) 
    })
}

const makeRedTeam = (id) => {
    const listElement = document.getElementById('red')
    listElement.innerHTML = null;
    for (let person of listOfPlayers) {
        if (person.id === id) {
            let redPlayer = new redTeammate(person.id, person.name)
            redTeam.push(redPlayer)
            console.log(redTeam)
        }
    }
    redTeam.map(person => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${person.name} - ${person.teamColor} team - Go ${person.mascot}s!`))
        listElement.append(li)
    })
}


const makeBlueTeam = (id) => {
    const listElement = document.getElementById('blue')
    listElement.innerHTML = null;
    for (let person of listOfPlayers) {
        let bluePlayer = new blueTeammate(person.id, person.name)
        if (person.id === id) {
            blueTeam.push(bluePlayer)
            console.log(blueTeam)
        }
    }
    blueTeam.map(person => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${person.name} - ${person.teamColor} team - Go ${person.mascot}s!`))
        listElement.append(li)
    })
    
}

// const assignTeam = (x) => {
//     console.log(x.parentElement.lastChild)
// }