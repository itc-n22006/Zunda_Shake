document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.querySelector('.quiz-container');
    const startPage = document.querySelector('.start-page');
    const startButton = document.getElementById('start-button');
    const countdownElement = document.getElementById("countdown");
    const nextButton = document.getElementById("next-button");
    const reviewLink = document.getElementById('review-link');
    const reviewQuestions = document.getElementById('review-questions');
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');
    const checkboxes = document.querySelectorAll('.review-checkbox');
    const endPage = document.querySelector('.end-page');
    const endButton = document.getElementById('end-button');
    const showScoreButton = document.getElementById('show-score-button');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let countdownInterval;
    let quizStarted = false;
    let correctAnswersCount = 0;
    let scorePopup;

    function startCountdown() {
        clearInterval(countdownInterval);
        let secondsRemaining = 3;

        function updateCountdown() {
            countdownElement.textContent = secondsRemaining + "秒";
            if (secondsRemaining <= 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = "0秒";
                displayAnswerAndShowNextButton();                                                                                                                                               AnswerAndShowNextButton();
            }
        }

        updateCountdown();
        countdownElement.style.display = "block";

        countdownInterval = setInterval(function () {
            secondsRemaining--;
            updateCountdown();
        }, 1000);
    }

    function displayAnswerAndShowNextButton() {
        countdownElement.style.display = "none";
        answers[currentQuestionIndex].style.display = "block";
        checkboxes[currentQuestionIndex].style.display = "block";
        nextButton.style.display = "block";

        if (currentQuestionIndex === questions.length - 1) {
            showEndButton();
        }
    }

    function showEndButton() {
        endButton.style.display = 'block';
        showScoreButton.style.display = 'block';
    }

    nextButton.addEventListener('click', function () {
        if (currentQuestionIndex < questions.length - 1) {
            hideCurrentQuestion();
            currentQuestionIndex++;
            startCountdown();
            showCurrentQuestion();
        } else {
            endQuiz();
        }
    });

    startButton.addEventListener('click', function () {
        if (!quizStarted) {
            quizStarted = true;
            startPage.style.display = 'none';
            quizContainer.style.display = 'block';
            startCountdown();
            showCurrentQuestion();
        }
    });

    reviewLink.addEventListener('click', function () {
        showReviewQuestions();
    });

    endButton.addEventListener('click', function () {
        document.getElementById("show-score-button").disabled = false;
        returnToStartPage();
    });

    showScoreButton.addEventListener('click', function () {
        showScorePopup();
        document.getElementById("show-score-button").disabled = true;
    });

    function endQuiz() {
        hideCurrentQuestion();
        quizContainer.style.display = 'none';
        endPage.style.display = 'block';
        answers[currentQuestionIndex].style.display = "block";
        checkboxes[currentQuestionIndex].style.display = "block";
        showScore();
    }

    function showReviewQuestions() {
        reviewQuestions.innerHTML = '';
        checkboxes.forEach(function (checkbox, index) {
            if (checkbox.checked) {
                const question = document.createElement('p');
                const answer = document.createElement('p');
                const questionText = checkbox.getAttribute('data-question');
                const answerText = checkbox.getAttribute('data-answer');
                question.textContent = questionText;
                answer.textContent = answerText;
                reviewQuestions.appendChild(question);
                reviewQuestions.appendChild(answer);
            }
        });
    }

    function returnToStartPage() {
        endPage.style.display = 'none';
        quizStarted = false;
        startPage.style.display = 'block';
        resetQuiz();
        hideScorePopup(); // 終了時にスコアを非表示

        // スコア表示を非表示にする
        scoreElement.textContent = '';

        // スタートボタンが押せないバグを修正
        startButton.disabled = false;
    }

    function hideCurrentQuestion() {
        questions[currentQuestionIndex].style.display = 'none';
        answers[currentQuestionIndex].style.display = 'none';
        checkboxes[currentQuestionIndex].style.display = 'none';
    }

    function showCurrentQuestion() {
        questions[currentQuestionIndex].style.display = 'block';
        answers[currentQuestionIndex].style.display = 'none';
        checkboxes[currentQuestionIndex].style.display = 'block';
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        hideAnswers();
    }

    function hideAnswers() {
        answers.forEach(answer => {
            answer.style.display = 'none';
        });
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'none';
            checkbox.checked = false;
        });
    }

    function showScore() {
        const checkedCount = document.querySelectorAll('.review-checkbox:checked').length;
        const score = questions.length - checkedCount;
        console.log(`スコア: ${score} / ${questions.length}`);
        scoreElement.textContent = `スコア: ${score} / ${questions.length}`;
    }

    function showScorePopup() {
        const checkedCount = document.querySelectorAll('.review-checkbox:checked').length;
        const score = questions.length - checkedCount;
        const percentage = (score / questions.length) * 100;

        let message = '';
        if (percentage <= 30) {
            message = 'もうちょっと頑張ろう！';
        } else if (percentage <= 50) {
            message = '良いね！その調子！';
        } else if (percentage <= 99) {
            message = 'あと100%まであと少し！頑張って！';
        } else {
            message = 'おめでとう！満点💯！';
        }

        const popup = document.createElement('div');
        popup.className = 'score-popup';
        popup.innerHTML = `<p>スコア: ${score} / ${questions.length}</p><p>${message}</p>`;

        // ポップアップをbodyに追加
        document.body.appendChild(popup);

        // スコアポップアップを非表示にする
        scorePopup = setTimeout(function () {
            hideScorePopup();
        }, 1000000);
    }

    function hideScorePopup() {
        const scorePopup = document.querySelector('.score-popup');
        if (scorePopup) {
            scorePopup.remove();
        }
    }
});
