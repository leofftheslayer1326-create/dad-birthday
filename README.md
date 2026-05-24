# dad-birthday

Поздравительная страница для отца. Открывается по QR-коду. Хостится на GitHub Pages.

---

## Что поправить перед публикацией

Все тексты, имя, дата ДР и срок поездки — в **одном месте**: верх файла [script.js](script.js), объект `PAPA`.

```js
const PAPA = {
  name: "Иван",                  // как обращаться в hero
  nameFull: "Иван Сергеевич",    // получатель в сертификате
  birthDate: "24 июля 2026",     // дата ДР под именем
  certNumber: "0724",            // номер сертификата
  tripDates: "июль 2026",        // срок поездки
  from: "твоя семья",            // от кого
  letter: [                      // абзацы поздравления — каждый отдельной строкой
    "Папа, ты — ...",
    "В этот день мы хотим ...",
  ],
};
```

Если `letter: []` оставить пустым — возьмётся дефолтный текст из `index.html`.

---

## Фото

Складывай в `assets/photos/`. В `index.html` найди блок `<div class="gallery" ...>` и замени плейсхолдеры:

```html
<figure class="gallery__item gallery__item--tall">
  <img src="assets/photos/01.jpg" alt="">
</figure>
```

Классы-модификаторы для красивой раскладки:
- `gallery__item--tall` — фото в две клетки по вертикали
- `gallery__item--wide` — фото в две клетки по горизонтали

6 фото — оптимально. Лучше горизонтальные и вертикальные вперемешку.

---

## GitHub Pages

1. Создай репозиторий, например `dad-birthday`. Можно приватным — Pages всё равно отдаст публичную страницу.
2. Залей содержимое этой папки:
   ```sh
   cd dad-birthday
   git init
   git add .
   git commit -m "init"
   git branch -M main
   git remote add origin git@github.com:<твой-логин>/dad-birthday.git
   git push -u origin main
   ```
3. На GitHub: `Settings → Pages → Build and deployment → Source: Deploy from a branch → main / (root) → Save`.
4. Через минуту страница появится по адресу `https://<твой-логин>.github.io/dad-birthday/`.

---

## QR-код

Любым из способов — содержимое одинаковое: ссылка на страницу.

**Онлайн** (быстро): https://qrcode.tec-it.com/ru или https://www.qr-code-generator.com/ — вставь URL, скачай PNG/SVG, печатай.

**Через CLI** (если хочется без чужих сайтов):
```sh
brew install qrencode
qrencode -o qr.png -s 12 -m 2 "https://<твой-логин>.github.io/dad-birthday/"
```

Совет: для печати возьми SVG — масштабируется без потерь.

---

## Локальный просмотр

Просто открой `index.html` в браузере. Или через любой статичный сервер:
```sh
cd dad-birthday
python3 -m http.server 8000
# затем http://localhost:8000
```
