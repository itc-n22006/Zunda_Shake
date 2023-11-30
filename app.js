// app.js
document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.querySelector('.quiz-container');
    const startPage = document.querySelector('.start-page');
    const startButton = document.getElementById('start-button');
    const countdownElement = document.getElementById("countdown");
    const nextButton = document.getElementById("next-button");
    const reviewLink = document.getElementById('review-link');
    const reviewQuestions = document.getElementById('review-questions');
    const endPage = document.querySelector('.end-page');
    const endButton = document.getElementById('end-button');
    const showScoreButton = document.getElementById('show-score-button');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let countdownInterval;
    let quizStarted = false;
    let correctAnswersCount = 0;
    let shuffledQuestions; // ランダムに並び替えられた問題データ

    function startCountdown() {
        clearInterval(countdownInterval);
        let secondsRemaining = 3;

        function updateCountdown() {
            countdownElement.textContent = secondsRemaining + "秒";
            if (secondsRemaining <= 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = "0秒";
                displayAnswerAndShowNextButton();
            }
        }
        updateCountdown();
        countdownElement.style.display = "block";
        //カウントダウンの間隔
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

    reviewButton.addEventListener('click', function () {
        showReviewQuestions();
    });

    endButton.addEventListener('click', function () {
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
        hideScorePopup();

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
        const questionElement = document.getElementById(`question${shuffledQuestions[currentQuestionIndex] + 1}`);

        // 要素が存在するか確認
        if (questionElement) {
            questionElement.style.display = 'block';

            const answerElement = document.getElementById(`answer${shuffledQuestions[currentQuestionIndex] + 1}`);
            if (answerElement) {
                answerElement.style.display = 'none'; // 答えを非表示に
            }

            const checkboxElement = document.getElementById(`checkbox${shuffledQuestions[currentQuestionIndex] + 1}`);
            if (checkboxElement) {
                checkboxElement.style.display = 'block';
            }
        }
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        shuffledQuestions = shuffleQuestions(); // 問題データをシャッフル
        hideAnswers();
    }

    function shuffleQuestions() {
        const shuffledArray = Array.from(Array(quizData.length).keys());
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
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
        if (percentage < 30) {
            message = 'もうちょっと頑張ろう！';
        } else if (percentage < 50) {
            message = '良いね！その調子！';
        } else if (percentage < 80) {
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
        }, 1000);
    }

    function hideScorePopup() {
        const scorePopup = document.querySelector('.score-popup');
        if (scorePopup) {
            scorePopup.remove();
            clearTimeout(scorePopup);
        }

        // スコア表示を非表示にする
        scoreElement.textContent = '';
    }
});
