const teamsDropdownList = document.getElementById("teams");
const typeOfSport = document.getElementById("sport");
const preLeague = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const premierLeagueTeam = {};

const myFavoriteFootballTeam = {
  team: "Manchester United",
  sport: "Football",
  year: "2023 - 2024",
  isFACupWinner: true,
  headCoach: {
    coachName: "Erik Ten Hag",
    matches: 35,
  },
  players: [
    {
      image: "./imagesMU/garnacho.jpg",
      name: "Alejandro Garnacho",
      position: "FW",
      number: 1,
      isCaptain: false,
      national: "Argentina",
      team: "MU",
    },
    {
      image: "./imagesMU/onana.jpg",
      name: "André Onana",
      position: "GK",
      number: 2,
      isCaptain: false,
      national: "Cameroon",
      team: "MU",
    },
    {
      image: "./imagesMU/Bayındır.jpg",
      name: "Altay Bayındır",
      position: "GK",
      number: 3,
      isCaptain: false,
      national: "Türkiye",
      team: "MU",
    },
    {
      image: "./imagesMU/Heaton.jpg",
      name: "Tom Heaton",
      position: "GK",
      number: 4,
      isCaptain: false,
      national: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/Martínez.jpg",
      name: "Lisandro Martínez",
      position: "DF",
      number: 5,
      isCaptain: false,
      national: "Argentina",
      team: "MU",
    },
    {
      image: "./imagesMU/Varane.jpg",
      name: "Raphaël Varane",
      position: "DF",
      number: 6,
      isCaptain: false,
      nickname: "France",
      team: "MU",
    },
    {
      image: "./imagesMU/Maguire.jpg",
      name: "Harry Maguire",
      position: "DF",
      number: 7,
      isCaptain: false,
      national: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/victor.jpg",
      name: "Victor Lindelöf",
      position: "DF",
      number: 8,
      isCaptain: false,
      national: "Sweden",
      team: "MU",
    },
    {
      image: "./imagesMU/jonny.jpg",
      name: "Jonny Evans",
      position: "DF",
      number: 9,
      isCaptain: false,
      national: "N. Ireland",
      team: "MU",
    },
    {
      image: "./imagesMU/shaw.jpg",
      name: "Luke Shaw",
      position: "DF",
      number: 10,
      isCaptain: false,
      national: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/diogo.jpg",
      name: "Diogo Dalot",
      position: "DF",
      number: 11,
      isCaptain: false,
      national: "Portugal",
      team: "MU",
    },
    {
      image: "./imagesMU/wan.jpg",
      name: "Wan-Bissaka",
      position: "DF",
      number: 12,
      isCaptain: false,
      national: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/scott.jpg",
      name: "Scott McTominay",
      position: "MF",
      number: 13,
      isCaptain: false,
      national: "Scotland",
      team: "MU",
    },
    {
      image: "./imagesMU/case.jpg",
      name: "Casemiro",
      position: "MF",
      number: 14,
      isCaptain: false,
      national: "Brazil",
      team: "MU",
    },
    {
      image: "./imagesMU/amrabat.jpg",
      name: "Sofyan Amrabat",
      position: "MF",
      number: 15,
      isCaptain: false,
      national: "Morocco",
      team: "MU",
    },
    {
      image: "./imagesMU/mainoo.jpg",
      name: "Kobbie Mainoo",
      position: "MF",
      number: 16,
      isCaptain: false,
      national: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/eriksen.jpg",
      name: "Christian Eriksen",
      position: "MF",
      number: 17,
      isCaptain: false,
      national: "Denmark",
      team: "MU",
    },
    {
      image: "./imagesMU/bruno.jpg",
      name: "Bruno Fernandes",
      position: "MF",
      number: 18,
      isCaptain: true,
      national: "Portugal",
      team: "MU",
    },
    {
      image: "./imagesMU/mason.jpg",
      name: "Mason Mount",
      position: "MF",
      number: 19,
      isCaptain: false,
      nickname: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/rashford.jpg",
      name: "Marcus Rashford",
      position: "FW",
      number: 20,
      isCaptain: false,
      national: "England",
      team: "MU",
    },
    {
      image: "./imagesMU/antony.jpg",
      name: "Antony",
      position: "FW",
      number: 21,
      isCaptain: false,
      national: "Brazil",
      team: "MU",
    },
    {
      image: "./imagesMU/amad.jpg",
      name: "Amad Diallo",
      position: "FW",
      number: 22,
      isCaptain: false,
      national: "Ivory Coast",
      team: "MU",
    },
    {
      image: "./imagesMU/rasmus.jpg",
      name: "Rasmus Højlund",
      position: "FW",
      number: 23,
      isCaptain: false,
      national: "Denmark",
      team: "MU",
    },
    {
      image: "./imagesMU/martial.jpg",
      name: "Anthony Martial",
      position: "FW",
      number: 24,
      isCaptain: false,
      national: "France",
      team: "MU",
    },
    {
      image: "./imagesMU/willy.jpg",
      name: "Willy Kambwala",
      position: "DF",
      number: 25,
      isCaptain: false,
      national: "France",
      team: "MU",
    },
    {
      image: "./imagesMU/tyrell.jpg",
      name: "Tyrell Malacia",
      position: "DF",
      number: 26,
      isCaptain: false,
      national: "Netherlands",
      team: "MU",
    },
    {
      image: "./imagesMU/shola.jpg",
      name: "Shola Shoretire",
      position: "MF",
      number: 27,
      isCaptain: false,
      national: "Englands",
      team: "MU",
    },
    {
      image: "./imagesMC/ederson.jpg",
      name: "Ederson",
      position: "GK",
      number: 1,
      isCaptain: false,
      national: "Brazil",
      team: "MC",
    },
    {
      image: "./imagesMC/ortega.jpg",
      name: "Stefan Ortega",
      position: "GK",
      number: 2,
      isCaptain: false,
      national: "Germany",
      team: "MC",
    },
    {
      image: "./imagesMC/carson.jpg",
      name: "Scott Carson",
      position: "GK",
      number: 3,
      isCaptain: false,
      national: "England",
      team: "MC",
    },
    {
      image: "./imagesMC/dias.jpg",
      name: "Rúben Dias",
      position: "DF",
      number: 4,
      isCaptain: false,
      national: "Portugal",
      team: "MC",
    },
    {
      image: "./imagesMC/josko.jpg",
      name: "Josko Gvardiol",
      position: "DF",
      number: 5,
      isCaptain: false,
      national: "Croatia",
      team: "MC",
    },
    {
      image: "./imagesMC/akanji.jpg",
      name: "Manuel Akanji",
      position: "DF",
      number: 6,
      isCaptain: false,
      national: "Switzerland",
      team: "MC",
    },
    {
      image: "./imagesMC/nathan.jpg",
      name: "Nathan Aké",
      position: "DF",
      number: 7,
      isCaptain: false,
      national: "Netherlands",
      team: "MC",
    },
    {
      image: "./imagesMC/stones.jpg",
      name: "John Stones",
      position: "DF",
      number: 8,
      isCaptain: false,
      national: "England",
      team: "MC",
    },
    {
      image: "./imagesMC/Sergio.jpg",
      name: "Sergio Gómez",
      position: "DF",
      number: 9,
      isCaptain: false,
      national: "Spain",
      team: "MC",
    },
    {
      image: "./imagesMC/Rico.jpg",
      name: "Rico Lewis",
      position: "DF",
      number: 10,
      isCaptain: false,
      national: "England",
      team: "MC",
    },
    {
      image: "./imagesMC/Kyle.jpg",
      name: "Kyle Walker",
      position: "DF",
      number: 11,
      isCaptain: true,
      national: "England",
      team: "MC",
    },
    {
      image: "./imagesMC/Rodri.jpg",
      name: "Rodri",
      position: "MF",
      number: 12,
      isCaptain: false,
      national: "Spain",
      team: "MC",
    },
    {
      image: "./imagesMC/Matheus.jpg",
      name: "Matheus Nunes",
      position: "MF",
      number: 13,
      isCaptain: false,
      national: "Portugal",
      team: "MC",
    },
    {
      image: "./imagesMC/Mateo.jpg",
      name: "Mateo Kovacic",
      position: "MF",
      number: 14,
      isCaptain: false,
      national: "Croatia",
      team: "MC",
    },
    {
      image: "./imagesMC/Silva.jpg",
      name: "Bernardo Silva",
      position: "MF",
      number: 15,
      isCaptain: false,
      national: "Portugal",
      team: "MC",
    },
    {
      image: "./imagesMC/Kevin.jpg",
      name: "Kevin De Bruyne",
      position: "MF",
      number: 16,
      isCaptain: false,
      national: "Belgium",
      team: "MC",
    },
    {
      image: "./imagesMC/Jack.jpg",
      name: "Jack Grealish",
      position: "FW",
      number: 17,
      isCaptain: false,
      national: "England",
      team: "MC",
    },
    {
      image: "./imagesMC/Doku.jpg",
      name: "Jérémy Doku",
      position: "FW",
      number: 18,
      isCaptain: false,
      national: "Belgium",
      team: "MC",
    },
    {
      image: "./imagesMC/Foden.jpg",
      name: "Phil Foden",
      position: "FW",
      number: 19,
      isCaptain: false,
      national: "England",
      team: "MC",
    },
    {
      image: "./imagesMC/Bobb.jpg",
      name: "Oscar Bobb",
      position: "FW",
      number: 20,
      isCaptain: false,
      national: "Norway",
      team: "MC",
    },
    {
      image: "./imagesMC/Álvarez.jpg",
      name: "Julián Álvarez",
      position: "FW",
      number: 21,
      isCaptain: false,
      national: "Argentina",
      team: "MC",
    },
    {
      image: "./imagesMC/Haaland.jpg",
      name: "Erling Haaland",
      position: "FW",
      number: 22,
      isCaptain: false,
      national: "Norway",
      team: "MC",
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
preLeague.textContent = year;
headCoach.textContent = coachName;

//setTeams
const setTeamMU = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-${position}">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};

const setTeamMC = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-${position}">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};

//setPlayerCards
const setPlayerCardsFW = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-FW">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};

const setPlayerCardsMF = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-MF">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};
const setPlayerCardsDF = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-DF">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};

const setPlayerCardsGK = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-GK">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(({ image, name, position, number, isCaptain, national }) => {
      return `
        <div class="player-card-${position}">
          <img src="${image}"></img>
          <div class="info">
            <h2>${isCaptain ? "(C)" : ""} ${name}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>National: ${national}</p>
          </div>
        </div>
      `;
    })
    .join("");
};

teamsDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "MU":
      setTeamMU(players.filter((player) => player.team === "MU"));
      break;
    default:
      setTeamMC(players.filter((player) => player.team === "MC"));
      break;
  }
});

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "FW":
      setPlayerCardsFW(
        players.filter(
          (player) =>
            player.position === "FW" && player.team === teamsDropdownList.value
        )
      );
      break;
    case "MF":
      setPlayerCardsMF(
        players.filter(
          (player) =>
            player.position === "MF" && player.team === teamsDropdownList.value
        )
      );
      break;
    case "DF":
      setPlayerCardsDF(
        players.filter(
          (player) =>
            player.position === "DF" && player.team === teamsDropdownList.value
        )
      );
      break;
    case "GK":
      setPlayerCardsGK(
        players.filter(
          (player) =>
            player.position === "GK" && player.team === teamsDropdownList.value
        )
      );
      break;
    default:
      setPlayerCards(
        players.filter((player) => player.team === teamsDropdownList.value)
      );
      break;
  }
});
