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