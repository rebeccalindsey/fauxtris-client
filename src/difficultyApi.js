class DifficultyApi {
  static fetchLeaderboard() {
    fetch("http://localhost:4000/api/leaderboard")
      .then((response) => response.json())
      .then((data) => DifficultyApi.createDifficultyScores(data));
  }

  static createDifficultyScores(scoreObj) {
    Difficulty.allDifficulties = [];
    for (const difficulty of scoreObj) {
      const scoreArray = [];
      for (const score of difficulty.scores) {
        scoreArray.push(
          new Score(score.points, score.initials, score.id, score.difficultyId)
        );
      }
      new Difficulty(difficulty.level, scoreArray, difficulty.id);
    }
  }
}
