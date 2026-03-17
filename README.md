RU:
Это адаптивный лендинг для поиска и бронирования путешествий.

Технологический стек:
1. HTML/CSS (собственная верстка по макету из Figma).
2. Vanilla JavaScript.

Проект реализован без использования сторонних библиотек и фреймворков.

Ключевые особенности и технические решения:

1. Самостоятельный дизайн адаптива: Так как макет не содержал мобильной версии, все решения по адаптивности, дизайну сайдбара и выпадающих меню были разработаны и отрисованы мной "с нуля".
2. Пошаговый поиск: На мобильных устройствах реализована механика динамического появления полей поиска. Новые этапы формы открываются постепенно по мере заполнения данных пользователем.
3. Динамическая отрисовка контента: Для практики работы с асинхронностью (fetch, async/await), данные для карточек туров и отзывов не "захардкожены" в HTML, а загружаются из JSON-файлов («псевдо-бэкенд») и рендерятся скриптом.
4. State Management (управление состоянием): Реализована синхронизация данных между десктопной и мобильной версиями поисковика.

EN:
This is a responsive landing page for travel search and booking.

Technology stack:
1. HTML/CSS (custom layout based on a Figma layout).
2. Vanilla JavaScript.

The project was implemented without the use of third-party libraries or frameworks.

Key features and technical solutions:

1. Custom responsive design: Since the layout did not include a mobile version, all solutions for responsiveness, sidebar design, and drop-down menus were developed and designed from scratch.
2. Step-by-step search: On mobile devices, a dynamic search field mechanic is implemented. New form steps open gradually as the user enters data.
3. Dynamic content rendering: To practice working with asynchronous (fetch, async/await), data for tour cards and reviews is not hardcoded into HTML, but loaded from JSON files (a "pseudo-backend") and rendered by a script. 4. State Management: Data synchronization between the desktop and mobile versions of the search engine has been implemented.
