// ====== КОНФИГ ======
// Замени значения ниже — и страница обновится. Больше нигде ничего трогать не нужно.
const PAPA = {
  // Имя в hero и в обращении (например: "Иван", "папа", "дедушка")
  name: "папа",

  // Полное имя/обращение в сертификате (например: "Иван Сергеевич", "Папа")
  nameFull: "Папа",

  // Дата дня рождения (например: "24 июля 2026")
  birthDate: "лето 2026",

  // Номер сертификата (просто красивые цифры)
  certNumber: "0524",

  // Срок поездки (например: "июль 2026", "12–25 августа")
  tripDates: "лето 2026",

  // От кого подарок
  from: "твоя семья",

  // Текст поздравления — массив абзацев.
  // Если не нужно менять — оставь пустым, тогда возьмётся текст из HTML.
  letter: [
    // "Папа, ты — наш тихий маяк...",
    // "В этот день нам хочется подарить тебе не вещь, а время...",
  ],
};


// ====== ПОДСТАНОВКА ЗНАЧЕНИЙ ======
function setText(selector, value) {
  if (!value) return;
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = value;
  });
}

setText("[data-papa-name]", PAPA.name);
setText("[data-papa-name-full]", PAPA.nameFull);
setText("[data-papa-date]", PAPA.birthDate);
setText("[data-papa-cert-number]", PAPA.certNumber);
setText("[data-papa-trip]", PAPA.tripDates);
setText("[data-papa-from]", PAPA.from);

if (PAPA.letter && PAPA.letter.length) {
  const letterEl = document.querySelector("[data-papa-letter]");
  if (letterEl) {
    letterEl.innerHTML = PAPA.letter.map((p) => `<p>${p}</p>`).join("");
  }
}


// ====== ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ ======
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}
