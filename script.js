document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');
menuButton.addEventListener('click', function () {
  const opened = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opened));
  menu.classList.toggle('is-open', opened);
});
const filter = document.getElementById('course-filter');
if (filter) {
  filter.addEventListener('change', function () {
    let count = 0;
    document.querySelectorAll('.course').forEach(function (card) {
      card.hidden = filter.value !== 'all' && card.dataset.category !== filter.value;
      if (!card.hidden) count++;
    });
    document.getElementById('filter-status').textContent = 'Показано курсов: ' + count;
  });
}
const quiz = document.getElementById('quiz');
if (quiz) {
  quiz.addEventListener('submit', function (event) {
    event.preventDefault();
    const answers = new FormData(quiz);
    const correct = { q1: 'b', q2: 'a', q3: 'c' };
    let score = 0;
    for (const question in correct) {
      if (answers.get(question) === correct[question]) score++;
    }
    document.getElementById('quiz-result').textContent = 'Результат: ' + score + ' из 3. ' + (score === 3 ? 'Отлично, основы усвоены!' : 'Повторите материал: основной контент – main; сетка – display: grid; нажатие – click.');
  });
  quiz.addEventListener('reset', function () {
    document.getElementById('quiz-result').textContent = '';
  });
}
const feedback = document.getElementById('feedback');
if (feedback) {
  feedback.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('feedback-result').textContent = 'Данные корректны. Сообщение не отправлено.';
  });
}
