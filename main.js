let arrOfPeople = [
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

const skillsetList = ["jump rope", "acrobatics", "boom-a-rang throwing", "pipe fitting", "tic tac toe", "fishing", "welding"]
const placeBornList = ["Baton Rouge, Louisiana", "San Francisco, California", "Sydney, Australia", "Buffalo, New York", "Austin, Texas", "Omaha, Nebraska", "Louisville, Kentucky"]
const listOfPlayers = []
const blueTeam = []
const redTeam = []
const greenTeam = []
const pinkTeam = []
let idNumber = 9;

class player{
    constructor(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
        this.id = id;
        this.name = name;
        this.skillSet = skillSet
        this.canThrowBall = canThrowBall;
        this.canDodgeBall = canDodgeBall;
        this.hasPaid = hasPaid;
        this.isHealthy = isHealthy;
        this.yearsExperience = yearsExperience;
    }
}
class blueTeammate extends player{
    constructor(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        super(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
        this.mascot = "Leap Frog";
        this.teamColor = "Blue";
    }
}
class redTeammate extends player{
    constructor(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        super(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
        this.mascot = "Dragon";
        this.teamColor = "Red";
    }
}

class greenTeammate extends player{
    constructor(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        super(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
        this.mascot = "Gecko";
        this.teamColor = "Green";
    }
}

class pinkTeammate extends player{
    constructor(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
        super(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
        this.mascot = "Salmon";
        this.teamColor = "Pink";
    }
}

const addNewPerson = () => {
    let newPerson = document.getElementById("createPerson").value;
    document.getElementById("createPerson").value = null;
    let randomAge = Math.floor(Math.random() * 45) + 17;
    let randomSkill = skillsetList[Math.floor(Math.random() * skillsetList.length)]
    let randomHome = placeBornList[Math.floor(Math.random() * placeBornList.length)]
    let newPersonToAdd = {
        id: idNumber,
        name: newPerson,
        age: randomAge,
        skillSet: randomSkill,
        placeBorn: randomHome
    }
    arrOfPeople.push(newPersonToAdd)
    idNumber++
    const listElement = document.getElementById('people');
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        li.appendChild(button)
        li.appendChild(document.createTextNode(`${newPersonToAdd.name} -  ${newPersonToAdd.age} - ${newPersonToAdd.skillSet} - ${newPersonToAdd.placeBorn}`))
        listElement.append(li)
        // document.getElementById("listButton").style.display = "none"
        button.addEventListener('click', function() {
            makePlayer(newPersonToAdd.id)
            this.parentElement.remove()
            let index = arrOfPeople.indexOf(idNumber - 2)
            arrOfPeople.splice(index, 1)
        }) 
}

document.getElementById("newPersonSubmit").addEventListener("click", function() {
    addNewPerson()
})

const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    document.getElementById("playerList").innerHTML = "Assign each player to a team.  4 players per team."
    document.getElementById("peopleList").innerHTML = "Select people to make them players."
    document.getElementById("newPersonInput").style.display = "block";
    arrOfPeople.map(person => {
        const li = document.createElement("li")
        const button = document.createElement("button")
        button.innerHTML = "Make Player"
        li.appendChild(button)
        li.appendChild(document.createTextNode(`${person.name} -  ${person.age} - ${person.skillSet} - ${person.placeBorn}`))
        listElement.append(li)
        document.getElementById("listButton").style.display = "none"
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
            let baller = new player(id, person.name, person.skillSet, true, false, true, true, 3)
            listOfPlayers.push(baller)
        }
    }
    const listElement = document.getElementById('players')
    listElement.innerHTML = null;
    listOfPlayers.map(person => {
        const li = document.createElement("li")
        const redButton = document.createElement("button")
        const blueButton = document.createElement("button")
        const greenButton = document.createElement("button")
        const pinkButton = document.createElement("button")
        redButton.innerHTML = "Red Team"
        blueButton.innerHTML = "Blue Team"
        greenButton.innerHTML = "Green Team"
        pinkButton.innerHTML = "Pink Team"
        li.appendChild(blueButton)
        li.appendChild(redButton)
        li.appendChild(greenButton)
        li.appendChild(pinkButton)
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
        listElement.append(li)
        redButton.addEventListener('click', function() {
            if (redTeam.length < 4) {
                console.log("red click")
                makeRedTeam(person.id)
                this.parentElement.remove()
                let index = listOfPlayers.indexOf(person)
                listOfPlayers.splice(index, 1)
            }
        })
        blueButton.addEventListener('click', function() {
            if (blueTeam.length < 4) {
                console.log("blue click")
                makeBlueTeam(person.id)
                this.parentElement.remove()
                let index = listOfPlayers.indexOf(person)
                listOfPlayers.splice(index, 1)
            }
        }) 
        greenButton.addEventListener('click', function() {
            if (greenTeam.length < 4) {
                console.log("red click")
                makeGreenTeam(person.id)
                this.parentElement.remove()
                let index = listOfPlayers.indexOf(person)
                listOfPlayers.splice(index, 1)
            }
        })
        pinkButton.addEventListener('click', function() {
            if (pinkTeam.length < 4) {
                console.log("blue click")
                makePinkTeam(person.id)
                this.parentElement.remove()
                let index = listOfPlayers.indexOf(person)
                listOfPlayers.splice(index, 1);
            }
        }) 
    })
}

const makeRedTeam = (id) => {
    const listElement = document.getElementById('red')
    listElement.innerHTML = null;
    for (let person of listOfPlayers) {
        if (person.id === id) {
            let redPlayer = new redTeammate(person.id, person.name, person.skillSet, true, false, true, true, 3)
            redTeam.push(redPlayer)
            console.log(redTeam)
        }
    }
    redTeam.map(person => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${person.name} - ${person.teamColor} team - Go ${person.mascot}s!`))
        listElement.append(li)
        li.addEventListener("click", function() {
            console.log("click red player")
            let baller = {
                id: person.id,
                name: person.name,
                age: person.age,
                skillSet: person.skillSet,
                placeBorn: person.placeBorn
            }
            arrOfPeople.push(baller)
            this.remove()
            let index = redTeam.indexOf(person)
            redTeam.splice(index, 1)
            makePlayer(person.id);
         })
    })
}


const makeBlueTeam = (id) => {
    const listElement = document.getElementById('blue')
    listElement.innerHTML = null;
    for (let person of listOfPlayers) {
        let bluePlayer = new blueTeammate(person.id, person.name, person.skillSet, true, false, true, true, 3)
        if (person.id === id) {
                blueTeam.push(bluePlayer)
                console.log(blueTeam)
        }
    }
    blueTeam.map(person => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${person.name} - ${person.teamColor} team - Go ${person.mascot}s!`))
        listElement.append(li)
        li.addEventListener("click", function() {
            console.log("click blue player")
            let baller = {
                id: person.id,
                name: person.name,
                age: person.age,
                skillSet: person.skillSet,
                placeBorn: person.placeBorn
            }
            baller.constructor = class player{
                constructor(id, name, skillSet, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
                    this.id = id;
                    this.name = name;
                    this.skillSet = skillSet
                    this.canThrowBall = canThrowBall;
                    this.canDodgeBall = canDodgeBall;
                    this.hasPaid = hasPaid;
                    this.isHealthy = isHealthy;
                    this.yearsExperience = yearsExperience;
                }
            }
            arrOfPeople.push(baller)
            this.remove()
            let index = redTeam.indexOf(person)
            blueTeam.splice(index, 1)
            makePlayer(person.id);
         })
    })
    
}
const makeGreenTeam = (id) => {
    const listElement = document.getElementById('green')
    listElement.innerHTML = null;
    for (let person of listOfPlayers) {
        if (person.id === id) {
            let greenPlayer = new greenTeammate(person.id, person.name, person.skillSet, true, false, true, true, 3)
            greenTeam.push(greenPlayer)
            console.log(greenTeam)
        }
    }
    greenTeam.map(person => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`${person.name} - ${person.teamColor} team - Go ${person.mascot}s!`))
        listElement.append(li)
        li.addEventListener("click", function() {
            console.log("click green player")
            let baller = {
                id: person.id,
                name: person.name,
                age: person.age,
                skillSet: person.skillSet,
                placeBorn: person.placeBorn
            }
            arrOfPeople.push(baller)
            this.remove()
            let index = redTeam.indexOf(person)
            greenTeam.splice(index, 1)
            makePlayer(person.id);
         })
    })
}


const makePinkTeam = (id) => {
    const listElement = document.getElementById('pink')
    listElement.innerHTML = null;
    for (let person of listOfPlayers) {
        let pinkPlayer = new pinkTeammate(person.id, person.name, person.skillSet, true, false, true, true, 3)
        if (person.id === id) {
                pinkTeam.push(pinkPlayer)
                console.log(pinkTeam)
        }
    }
    pinkTeam.map(person => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${person.name} - ${person.teamColor} team - Go ${person.mascot}s!`))
        listElement.append(li)
        li.addEventListener("click", function() {
            console.log("click pink player")
            let baller = {
                id: person.id,
                name: person.name,
                age: person.age,
                skillSet: person.skillSet,
                placeBorn: person.placeBorn
            }
            arrOfPeople.push(baller)
            this.remove()
            let index = redTeam.indexOf(person)
            pinkTeam.splice(index, 1)
            makePlayer(person.id);
         })
    })
    
}