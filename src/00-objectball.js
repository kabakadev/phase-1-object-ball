function gameObject() {
  const newObj = {
    home: {
      teamName: "Broklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turqoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return newObj;
}
// console.log(gameObject());
function numPointScored(playerName) {
  const game = gameObject();
  // console.log(game);
  for (const team in game) {
    // console.log("Team: ", team);

    const players = game[team].players;
    for (const player in players) {
      if (player === playerName) {
        console.log(
          `The following player ${playerName} has ${players[playerName].points} points`
        );
      }
    }
  }
}
// numPointScored("Ben Gordon");

function shoeSize(newPlayer) {
  const shoe = gameObject();
  for (const feet in shoe) {
    const player = shoe[feet].players;
    console.log(player);
    for (const player_name in player) {
      if (player_name === newPlayer) {
        // console.log(
        //   `The shoe size for ${newPlayer}, is ${player[newPlayer].shoe} `
        // );
      }
    }
  }
}
// shoeSize("Ben Gordon");

function teamColors(team_name) {
  const teamColor = gameObject();
  for (const newTeam in teamColor) {
    const teamUp = teamColor[newTeam].teamName;

    if (team_name === teamUp) {
      console.log(
        `The following team: ${team_name} is of team ${newTeam} has the color ${teamColor[newTeam].colors}`
      );
    }
  }
}

// teamColors("Broklyn Nets");
// teamColors("Charlotte Hornets");

function teamNames() {
  const getTeam = gameObject();
  const new_array = [];
  for (const teamArr in getTeam) {
    const teamNameAr = getTeam[teamArr].teamName;

    new_array.push(teamNameAr);
  }
  console.log(new_array);
}

// teamNames();

function playerNumbers(argTeam) {
  arrayJersey = [];
  const game = gameObject();
  // console.log(game);
  for (const team in game) {
    // console.log("Team: ", team);

    // arrayJersey.push(game[team].players.number);
    const playerTeam = game[team].teamName;
    const players = game[team].players;
    // console.log(playerTeam);
    if (argTeam === playerTeam) {
      for (let itPlay in players) {
        arrayJersey.push(players[itPlay].number);
      }
    }
  }
  console.log(arrayJersey);
}
playerNumbers("Charlotte Hornets");
playerNumbers("Broklyn Nets");
