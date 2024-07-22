class ScoreApi {
  static updateLeaderboard(scoreToAdd) {
    if (scoreToAdd.initials.length > 3) {
      scoreToAdd.initials = scoreToAdd.initials.substring(0, 3);
    } else if (scoreToAdd.initials.length < 3) {
      scoreToAdd.initials = scoreToAdd.initials.padEnd(3, "Z");
    }

    ScoreApi.addNewScoreToDatabase(scoreToAdd)
    .then(() => DifficultyApi.fetchLeaderboard())
    .then(() => alert("Your score has been saved!")
    )
  }

  static addNewScoreToDatabase(scoreToAdd) {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(scoreToAdd),
    };

    return fetch("http://localhost:4000/api/score", configObj)
      .then((response) => {
        return response.json();
      })
  }
}
