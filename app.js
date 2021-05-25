const ca = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const a = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  a.forEach((ans, i) => {
    if (ans === ca[i]) score += 25;
  });
  scrollTo(0, 0);
  result.classList.remove("d-none");
  let i = 0;
  const timer = setInterval(() => {
    result.querySelector("span").innerText = i + "%";
    i++;
    if (i > score) {
      clearInterval(timer);
    }
  }, 15);
});
