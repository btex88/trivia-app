const answerShuffler = (questions) => (questions.reduce((gather, currObj) => {
  const answers = [currObj.correct_answer, ...currObj.incorrect_answers];
  const shuffledAnswers = answers.map((value) => ({ value, randIndex: Math.random() }))
    .sort((value1, value2) => value1.randIndex - value2.randIndex)
    .map(({ value }) => value);
  gather.push(shuffledAnswers.reduce((acc, curr, index) => {
    acc.push({ index, answer: curr, isCorrect: currObj.correct_answer === curr });
    return acc;
  }, []));
  return gather;
}, []));

export default answerShuffler;
