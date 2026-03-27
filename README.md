RU:
Это адаптивный лендинг для поиска и бронирования путешествий.

Стек проекта:
1. HTML/CSS.
2. Vanilla JavaScript.

Проект реализован без использования сторонних библиотек и фреймворков по вёрстке из Figma.

Ключевые особенности:

1) Самостоятельный дизайн адаптива: Так как макет не содержал мобильной версии, все решения по адаптивности, дизайну сайдбара и выпадающих меню были разработаны и отрисованы мной "с нуля".
2) Пошаговый поиск: На мобильных устройствах реализована механика динамического появления полей поиска. Новые этапы формы открываются постепенно по мере заполнения данных пользователем.
3) Динамическая отрисовка контента: Для практики работы с асинхронностью (async/await и fetch), данные для карточек туров, отзывов и прочих блоков не "захардкожены" в HTML, а загружаются из JSON-файлов ("псевдо-бэкенда") и рендерятся скриптом.
4) State Management: Реализована синхронизация данных между десктопной и мобильной версиями поисковика.

EN:
This is a responsive landing page for travel search and booking.

Project stack:
1. HTML/CSS.
2. Vanilla JavaScript.

The project was implemented without the use of third-party libraries or frameworks, using Figma as the layout.

Key features:

1) Responsive self-design: Since the layout did not include a mobile version, all responsiveness, sidebar, and drop-down menu design solutions were developed by me from scratch.
2) Step-by-step search: On mobile devices, a dynamic search field mechanic is implemented. New form steps open gradually as the user enters data.
3) Dynamic content rendering: To practice working with asynchronous (async/await and fetch), data for tour cards, reviews and other content blocks is not hardcoded into HTML, but loaded from JSON files (a "pseudo-backend") and rendered by a script.
4) State Management: Data synchronization between the desktop and mobile versions of the search engine has been implemented.
