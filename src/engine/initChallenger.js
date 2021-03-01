export const initChallenger = (settings) => {
    const numQuestions = settings.numQuestions;
    const maxNumber = 12;

    const challenger = {
        baseNumber: settings.baseNumber,
        questions: [],
        answers: [],
        correctAnswers: [],
        userAnswers: [],
        score: 0,
        currentQuestion: 1,
    };

    for(let i = 0; i < numQuestions; i++){
        let question = Math.ceil(Math.random() * maxNumber);
        if(challenger.questions.length){
            // Making sure the last question is not the same as this new question
            while(challenger.questions[i - 1] === question){
                question = Math.ceil(Math.random() * maxNumber);
            }
        }
        challenger.questions.push(question);

        const correctAnswer = question + settings.baseNumber;
        challenger.correctAnswers.push(correctAnswer);

        let answers = [];
        answers.push(correctAnswer);
        answers.push(correctAnswer + Math.ceil(Math.random() * 2));
        answers.push(correctAnswer + Math.ceil(Math.random() * 4));
        answers.push(correctAnswer + Math.ceil(Math.random() - 2));
        answers.sort(() => Math.random() - 0.5);

        challenger.answers.push(answers);
    }

    return challenger;
}