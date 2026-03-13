const createProsCardTemplate = (card) => {
    return `
        <div class="information-pros-card" data-js-pros-slider-card>
            <div class="information-pros-card__icon-container">
                <img class="information-pros-card__icon" src="${card.img}" alt="icon${card.id}">
            </div>
            <h4 class="information-pros-card__main-words">${card.title}</h4>
            <h5 class="information-pros-card__sub-words">${card.text}</h5>
        </div>
    `
}

// симуляция получения данных с бека для рендера кнопок (подобные функции будут далее)
export async function renderProsCards() {
    const prosCardContainer = document.querySelector('[data-js-pros-slider-container]');
    if (!prosCardContainer) return;

    try {
        const response = await fetch('/cards_info_pseudoback/information-pros-cards/data.json');

        if (!response.ok) throw new Error('Ошибка загрузки карточек блока information-pros');

        const data = await response.json();

        prosCardContainer.innerHTML = data.map(card => createProsCardTemplate(card)).join('');
    } catch(error) {
        console.log("ЖОПА: " + error);
    }
}

export function initProsSlider () {
    const prosSliderContainer = document.querySelector('[data-js-pros-slider-container]');

    if (!prosSliderContainer) return;

    const prosSliderPrevButton = document.querySelector('[data-js-pros-slider-button-prev]');
    const prosSliderNextButton = document.querySelector('[data-js-pros-slider-button-next]');

    const getScrollStep = () => {
        const card = prosSliderContainer.querySelector('[data-js-pros-slider-card]');
        const containerStyles = window.getComputedStyle(prosSliderContainer);
        const gap = parseInt(containerStyles.columnGap);

        return card.offsetWidth + gap;
    }

    prosSliderPrevButton.addEventListener('click', () => {
        prosSliderContainer.scrollBy({
            left: -getScrollStep(),
            behavior: "smooth",
        })
    })

    prosSliderNextButton.addEventListener('click', () => {
        prosSliderContainer.scrollBy({
            left: getScrollStep(),
            behavior: "smooth",
        })
    })
}

const createAboutCardTemplate = (card) => {
    return `
        <div class="information-about-card" data-js-about-slider-card>
            <img src="${card.quote}" alt="quote" class="information-about-card__quote-icon">
            <img src="${card.img}" alt="${card.title}" class="information-about-card__img">
            <div class="information-about-card-text-container">
                <h4 class="information-about-card-text-container__main-words">${card.title}</h4>
                <h5 class="information-about-card-text-container__sub-words">${card.text}</h5>
            </div>
        </div>
    `
}

export async function renderAboutCards() {
    const aboutCardContainer = document.querySelector('[data-js-about-slider-container]');

    if (!aboutCardContainer) return;

    try {
        const response = await fetch('/cards_info_pseudoback/information-about-cards/data.json');

        if (!response.ok) throw new Error('Ошибка загрузки карточек блока information-about-cards');

        const data = await response.json();

        aboutCardContainer.innerHTML = data.map(card => createAboutCardTemplate(card)).join('')
    } catch (error) {
        console.log("ЖОПА: " + error);
    }
}

export function initAboutSlider () {
    const aboutSliderContainer = document.querySelector('[data-js-about-slider-container]');

    if (!aboutSliderContainer) return;

    const aboutSliderPrevButton = document.querySelector('[data-js-about-slider-button-prev]');
    const aboutSliderNextButton = document.querySelector('[data-js-about-slider-button-next]');

    const getScrollStep = () => {
        const card = aboutSliderContainer.querySelector('[data-js-about-slider-card]');
        const containerStyles = window.getComputedStyle(aboutSliderContainer);
        const gap = parseInt(containerStyles.columnGap);

        return card.offsetWidth + gap;
    }

    aboutSliderPrevButton.addEventListener('click', () => {
        aboutSliderContainer.scrollBy({
            left: -getScrollStep(),
            behavior: "smooth",
        })
    })

    aboutSliderNextButton.addEventListener('click', () => {
        aboutSliderContainer.scrollBy({
            left: getScrollStep(),
            behavior: "smooth",
        })
    })
}

const createPlacesCardTemplate = (card) => {
    return `
        <div class="information-places-card" data-js-places-slider-card>
            <div class="information-places-card__img-container"></div>
            <h4 class="information-places-card__main-words">${card.title}</h4>
            <div class="information-places-card-text-container">
                <div class="information-places-card-text-container__time-text">
                    <svg class="information-places-card-time-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_233)">
                            <path d="M14.3164 4.20996C13.985 4.37028 13.8464 4.76904 14.0067 5.10026C14.4447 6.00505 14.6667 6.98031 14.6667 8C14.6667 11.6759 11.6759 14.6667 8 14.6667C4.32406 14.6667 1.33333 11.6759 1.33333 8C1.33333 4.32406 4.32406 1.33333 8 1.33333C9.52328 1.33333 10.9543 1.83073 12.1387 2.77165C12.4259 3.00098 12.846 2.95296 13.0754 2.66471C13.3047 2.37663 13.2567 1.95703 12.9683 1.72803C11.5661 0.613607 9.8016 0 8 0C3.58903 0 0 3.58903 0 8C0 12.411 3.58903 16 8 16C12.411 16 16 12.411 16 8C16 6.77767 15.7331 5.60628 15.2067 4.51969C15.0467 4.18766 14.6466 4.04932 14.3164 4.20996Z" fill="#7C8290"/>
                            <path d="M8 2.66675C7.632 2.66675 7.33334 2.96541 7.33334 3.33341V8.00008C7.33334 8.36808 7.632 8.66675 8 8.66675H11.3333C11.7013 8.66675 12 8.36808 12 8.00008C12 7.63208 11.7013 7.33342 11.3333 7.33342H8.66667V3.33341C8.66667 2.96541 8.368 2.66675 8 2.66675Z" fill="#7C8290"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_233">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p class="information-places-card-time-text">${card.time}</p>
                </div>
                <p class="information-places-card-text-container__price-text">$${card.price.toFixed(2)}</p>
            </div>
        </div>
    `
}

export async function renderPlacesCards() {
    const placesCardContainer = document.querySelector('[data-js-places-slider-container]');

    if (!placesCardContainer) return;

    try {
        const response = await fetch('/cards_info_pseudoback/information-places-cards/data.json');

        if (!response.ok) throw new Error('Ошибка загрузки карточек блока information-places-cards');

        const data = await response.json();

        placesCardContainer.innerHTML = data.map(card => createPlacesCardTemplate(card)).join('')
    } catch (error) {
        console.log("ЖОПА: " + error);
    }
}

export function initPlacesSlider () {
    const placesSliderContainer = document.querySelector('[data-js-places-slider-container]');

    if (!placesSliderContainer) return;

    const placesSliderPrevButton = document.querySelector('[data-js-places-slider-button-prev]');
    const placesSliderNextButton = document.querySelector('[data-js-places-slider-button-next]');

    const getScrollStep = () => {
        const card = placesSliderContainer.querySelector('[data-js-places-slider-card]');
        const containerStyles = window.getComputedStyle(placesSliderContainer);
        const gap = parseInt(containerStyles.columnGap) || 0;

        return card.offsetWidth + gap;
    }

    placesSliderPrevButton.addEventListener('click', () => {
        placesSliderContainer.scrollBy({
            left: -getScrollStep(),
            behavior: "smooth",
        })
    })

    placesSliderNextButton.addEventListener('click', () => {
        placesSliderContainer.scrollBy({
            left: getScrollStep(),
            behavior: "smooth",
        })
    })
}

const createCitiesCardTemplate = (card) => {
    return `
        <div class="information-cities-card" data-js-cities-slider-card>
            <div class="information-cities-card-country-container">
                <p class="information-cities-card-country-container__main-words">${card.title}</p>
            </div>
            <div class="information-cities-card-text-container">
                <h4 class="information-cities-card-text-container__main-words">${card.title}</h4>
                <p class="information-cities-card-text-container__sub-words">${card.text}</p>
            </div>
        </div>
    `
}

export async function renderCitiesCards() {
    const citiesCardContainer = document.querySelector('[data-js-cities-slider-container]');

    if (!citiesCardContainer) return;

    try {
        const response = await fetch('/cards_info_pseudoback/information-cities-cards/data.json');

        if (!response.ok) throw new Error('Ошибка загрузки карточек блока information-cities-cards');

        const data = await response.json();

        citiesCardContainer.innerHTML = data.map(card => createCitiesCardTemplate(card)).join('')
    } catch (error) {
        console.log("ЖОПА: " + error);
    }
}

export function initCitiesSlider () {
    const citiesSliderContainer = document.querySelector('[data-js-cities-slider-container]');

    if (!citiesSliderContainer) return;

    const citiesSliderPrevButton = document.querySelector('[data-js-cities-slider-button-prev]');
    const citiesSliderNextButton = document.querySelector('[data-js-cities-slider-button-next]');

    const getScrollStep = () => {
        const card = citiesSliderContainer.querySelector('[data-js-cities-slider-card]');
        const containerStyles = window.getComputedStyle(citiesSliderContainer);
        const gap = parseInt(containerStyles.columnGap) || 0;

        return card.offsetWidth + gap;
    }

    citiesSliderPrevButton.addEventListener('click', () => {
        citiesSliderContainer.scrollBy({
            left: -getScrollStep(),
            behavior: "smooth",
        })
    })

    citiesSliderNextButton.addEventListener('click', () => {
        citiesSliderContainer.scrollBy({
            left: getScrollStep(),
            behavior: "smooth",
        })
    })
}

const createReviewsStarsTemplate = (amount) => {
    return `<svg class="information-reviews-card__rate-star" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.60846 0L9.63044 5.21698L15.2169 5.52786L10.8801 9.06302L12.3107 14.4721L7.60846 11.44L2.90618 14.4721L4.33683 9.06302L7.15256e-06 5.52786L5.58648 5.21698L7.60846 0Z" fill="#FAB33F"/>
            </svg>`.repeat(amount)
}

const createReviewsCardTemplate = (card) => {
    return `
        <div class="information-reviews-card" data-js-reviews-slider-card>
            <div class="information-reviews-card-text-container">
                <h4 class="information-reviews-card-text-container__main-words">${card.name}</h4>
                <h5 class="information-reviews-card-text-container__sub-words">${card.role}</h5>
            </div>
            <svg class="information-reviews-card__separator" width="242" height="1" viewBox="0 0 242 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="242" y2="0.5" stroke="#EFEFEF"/>
            </svg>
            <div class="information-reviews-card__rating-stars-container">
                ${createReviewsStarsTemplate(card.rating)}
            </div>
            <p class="information-reviews-card__review-text">${card.text}</p>
        </div>
    `
}

export async function renderReviewsCards() {
    const reviewsCardContainer = document.querySelector('[data-js-reviews-slider-container]');

    if (!reviewsCardContainer) return;

    try {
        const response = await fetch('/cards_info_pseudoback/information-reviews-cards/data.json');

        if (!response.ok) throw new Error('Ошибка загрузки карточек блока information-cities-cards');

        const data = await response.json();

        reviewsCardContainer.innerHTML = data.map(card => createReviewsCardTemplate(card)).join('');
    } catch (error) {
        console.log("ЖОПА: " + error);
    }
}

export function initReviewsSlider () {
    const reviewsSliderContainer = document.querySelector('[data-js-reviews-slider-container]');

    if (!reviewsSliderContainer) return;

    const reviewsSliderPrevButton = document.querySelector('[data-js-reviews-slider-button-prev]');
    const reviewsSliderNextButton = document.querySelector('[data-js-reviews-slider-button-next]');

    const getScrollStep = () => {
        const card = reviewsSliderContainer.querySelector('[data-js-reviews-slider-card]');
        const containerStyles = window.getComputedStyle(reviewsSliderContainer);
        const gap = parseInt(containerStyles.columnGap) || 0;

        return card.offsetWidth + gap;
    }

    reviewsSliderPrevButton.addEventListener('click', () => {
        reviewsSliderContainer.scrollBy({
            left: -getScrollStep(),
            behavior: "smooth",
        })
    })

    reviewsSliderNextButton.addEventListener('click', () => {
        reviewsSliderContainer.scrollBy({
            left: getScrollStep(),
            behavior: "smooth",
        })
    })
}