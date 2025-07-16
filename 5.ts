let answers: { [key: string]: any } = {};

function recordAnswer(questionId: string, answer: any): void {
    answers[questionId] = answer;
}

recordAnswer("q1", "Yes");
recordAnswer("q2", 42);
recordAnswer("q3", ["Option A", "Option B"]);

console.log("Recorded Answers:", answers);
