const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const premierLeague = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
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
      image: "./images/garnacho.jpg",
      name: "Alejandro Garnacho",
      position: "FW",
      number: 1,
      isCaptain: false,
      national: "Argentina",
    },
    {
      image: "./images/onana.jpg",
      name: "André Onana",
      position: "GK",
      number: 2,
      isCaptain: false,
      national: "Cameroon",
    },
    {
      image: "./images/Bayındır.jpg",
      name: "Altay Bayındır",
      position: "GK",
      number: 3,
      isCaptain: false,
      national: "Türkiye",
    },
    {
      image: "./images/Heaton.jpg",
      name: "Tom Heaton",
      position: "GK",
      number: 4,
      isCaptain: false,
      national: "England",
    },
    {
      image: "./images/Martínez.jpg",
      name: "Lisandro Martínez",
      position: "DF",
      number: 5,
      isCaptain: false,
      national: "Argentina",
    },
    {
      image: "./images/Varane.jpg",
      name: "Raphaël Varane",
      position: "DF",
      number: 6,
      isCaptain: false,
      nickname: "France",
    },
    {
      image: "./images/Maguire.jpg",
      name: "Harry Maguire",
      position: "DF",
      number: 7,
      isCaptain: false,
      national: "England",
    },
    {
      image: "./images/victor.jpg",
      name: "Victor Lindelöf",
      position: "DF",
      number: 8,
      isCaptain: false,
      national: "Sweden",
    },
    {
      image: "./images/jonny.jpg",
      name: "Jonny Evans",
      position: "DF",
      number: 9,
      isCaptain: false,
      national: "N. Ireland",
    },
    {
      image: "./images/shaw.jpg",
      name: "Luke Shaw",
      position: "DF",
      number: 10,
      isCaptain: false,
      national: "England",
    },
    {
      image: "./images/diogo.jpg",
      name: "Diogo Dalot",
      position: "DF",
      number: 11,
      isCaptain: false,
      national: "Portugal",
    },
    {
      image: "./images/wan.jpg",
      name: "Wan-Bissaka",
      position: "DF",
      number: 12,
      isCaptain: false,
      national: "England",
    },
    {
      image: "./images/scott.jpg",
      name: "Scott McTominay",
      position: "MF",
      number: 13,
      isCaptain: false,
      national: "Scotland",
    },
    {
      image: "./images/case.jpg",
      name: "Casemiro",
      position: "MF",
      number: 14,
      isCaptain: false,
      national: "Brazil",
    },
    {
      image: "./images/amrabat.jpg",
      name: "Sofyan Amrabat",
      position: "MF",
      number: 15,
      isCaptain: false,
      national: "Morocco",
    },
    {
      image: "./images/mainoo.jpg",
      name: "Kobbie Mainoo",
      position: "MF",
      number: 16,
      isCaptain: false,
      national: "England",
    },
    {
      image: "./images/eriksen.jpg",
      name: "Christian Eriksen",
      position: "MF",
      number: 17,
      isCaptain: false,
      national: "Denmark",
    },
    {
      image: "./images/bruno.jpg",
      name: "Bruno Fernandes",
      position: "MF",
      number: 18,
      isCaptain: true,
      national: "Portugal",
    },
    {
      image: "./images/mason.jpg",
      name: "Mason Mount",
      position: "MF",
      number: 19,
      isCaptain: false,
      nickname: "England",
    },
    {
      image: "./images/rashford.jpg",
      name: "Marcus Rashford",
      position: "FW",
      number: 20,
      isCaptain: false,
      national: "England",
    },
    {
      image: "./images/antony.jpg",
      name: "Antony",
      position: "FW",
      number: 21,
      isCaptain: false,
      national: "Brazil",
    },
    {
      image: "./images/amad.jpg",
      name: "Amad Diallo",
      position: "FW",
      number: 22,
      isCaptain: false,
      national: "Ivory Coast",
    },
    {
      image: "./images/rasmus.jpg",
      name: "Rasmus Højlund",
      position: "FW",
      number: 23,
      isCaptain: false,
      national: "Denmark",
    },
    {
      image: "./images/martial.jpg",
      name: "Anthony Martial",
      position: "FW",
      number: 24,
      isCaptain: false,
      national: "France",
    },
    {
      image: "./images/willy.jpg",
      name: "Willy Kambwala",
      position: "DF",
      number: 25,
      isCaptain: false,
      national: "France",
    },
    {
      image: "./images/tyrell.jpg",
      name: "Tyrell Malacia",
      position: "DF",
      number: 26,
      isCaptain: false,
      national: "Netherlands",
    },
    {
      image: "./images/shola.jpg",
      name: "Shola Shoretire",
      position: "MF",
      number: 27,
      isCaptain: false,
      national: "Englands",
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
premierLeague.textContent = year;
headCoach.textContent = coachName;

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

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "FW":
      setPlayerCardsFW(players.filter((player) => player.position === "FW"));
      break;
    case "MF":
      setPlayerCardsMF(players.filter((player) => player.position === "MF"));
      break;
    case "DF":
      setPlayerCardsDF(players.filter((player) => player.position === "DF"));
      break;
    case "GK":
      setPlayerCardsGK(players.filter((player) => player.position === "GK"));
      break;
    default:
      setPlayerCards();
      break;
  }
});
