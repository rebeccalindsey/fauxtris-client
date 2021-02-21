class ScoreApi {
  static updateDatabase(scoreToAdd, scoreToRemove) {
    if (scoreToAdd.initials.length > 3) {
      scoreToAdd.initials = "ZZZ";
    } else if (scoreToAdd.initials.length < 3) {
      while (scoreToAdd.initials.length < 3) {
        scoreToAdd.initials += "Z";
      }
    }
    ScoreApi.removeScoreFromDatabase(scoreToRemove);
    setTimeout(() => {
      ScoreApi.addNewScoreToDatabase(scoreToAdd);
    }, 200);
    alert("Your score has been saved!");
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

    fetch("http://127.0.0.1:3000/score", configObj)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  static removeScoreFromDatabase(scoreToRemove) {
    const configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(`http://127.0.0.1:3000/score/${scoreToRemove.id}`, configObj);
  }
}
