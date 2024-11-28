function calculateScore() {
    let totalQuestions = 10;
    let correctAnswers = 0;
    let attemptedQuestions = 0;

    // Define correct answers
    const correctAnswersMap = {
        q1: 1, q2: 1, q3: 1, q4: 1, q5: 1,
        q6: 1, q7: 1, q8: 1, q9: 1, q10: 1
    };

    // Combine both forms
    const forms = ['quiz-form-left', 'quiz-form-right'];
    forms.forEach(formId => {
        const form = document.forms[formId];
        for (let i = 1; i <= totalQuestions; i++) {
            const answer = form[`q${i}`];
            if (answer && answer.value !== '') {
                attemptedQuestions++;
                if (parseInt(answer.value) === correctAnswersMap[`q${i}`]) {
                    correctAnswers++;
                }
            }
        }
    });

    let incorrectAnswers = attemptedQuestions - correctAnswers;

    // Display popup result
    document.getElementById('result-text').innerHTML = `
        You attempted ${attemptedQuestions} questions.<br>
        Correct answers: ${correctAnswers}.<br>
        Incorrect answers: ${incorrectAnswers}.
    `;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}