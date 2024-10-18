function selectAnswer(button, answer, isCorrect) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.add('disabled'));

    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
    }
}