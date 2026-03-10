export function initBurgerButton() {
    const burgerButton = document.querySelector('[data-js-slogan-burger-button]');

    if (!burgerButton) return;

    let currentMenu = null;

    const closeMenu = (e) => {
        if (currentMenu && !currentMenu.contains(e.target) && !burgerButton.contains(e.target)) {
            removeMenu();
        }
    }

    function removeMenu() {
        currentMenu.remove();
        currentMenu = null;
        document.removeEventListener('click', closeMenu);
    }

    burgerButton.addEventListener('click', (event) => {
        event.stopPropagation();

        if (currentMenu) {
            removeMenu();
            return;
        }

        const sideMenuWrap = document.createElement('div');
        sideMenuWrap.classList.add('slogan-side-menu-wrap');
        sideMenuWrap.innerHTML = `
            <aside class="slogan-side-menu">
                <div class="slogan-side-menu__close-and-create-container">
                    <button type="button" class="slogan-side-menu-close-button" data-js-slogan-close-button>close</button>
                    <button type="button" class="slogan-side-menu-create-button">Create account</button>
                </div>
                <ul class="slogan-side-menu__options-list">
                    <li class="slogan-side-menu__options-item">
                        <button type="button" class="slogan-side-menu__options-item-button">find a trip</button>
                    </li>
                    <li class="slogan-side-menu__options-item">
                        <button type="button" class="slogan-side-menu__options-item-button">destinations</button>
                    </li>
                    <li class="slogan-side-menu__options-item">
                        <button type="button" class="slogan-side-menu__options-item-button">why besnik</button>
                    </li>
                    <li class="slogan-side-menu__options-item">
                        <button type="button" class="slogan-side-menu__options-item-button">contact</button>
                    </li>
                </ul>
            </aside>
        `;

        // burgerButton.appendChild(sideMenuWrap); урок: всякие выпадающее меню, сайдбары и прочие вещи с position: absolute
        // привыязывай к body!
        document.body.appendChild(sideMenuWrap)
        currentMenu = sideMenuWrap;

        const closeBtn = sideMenuWrap.querySelector('[data-js-slogan-close-button]');
        closeBtn.addEventListener('click', () => {
            removeMenu();
        });

        document.addEventListener('click', closeMenu);
    });
}

export function initSearchStepByStep() {
    if (window.innerWidth > 625) return;

    const searchPanel = document.querySelector('[data-js-slogan-search-panel]');
    const searchBar = document.querySelector('[data-js-slogan-search-bar]');
    const destInput = document.querySelector('[data-js-slogan-search-destination-input]');

    if (!searchPanel || !searchBar || !destInput) return;

    let isLocationCreated = false;
    let isPeopleCreated = false;

    destInput.addEventListener('input', function handleDest() {
        if (destInput.value.trim().length > 0 && !isLocationCreated) {
            createLocationField();
            isLocationCreated = true;
        }
    });

    function createLocationField() {
        const locationSearchWrapMobile = document.createElement('div');
        locationSearchWrapMobile.classList.add('slogan-dynamic-field', 'slogan-search-bar__location-input-wrap-mobile');
        locationSearchWrapMobile.setAttribute('data-js-slogan-search-location-wrap-mobile', '');

        locationSearchWrapMobile.innerHTML = `
            <svg class="slogan-search-bar__location-icon-mobile" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7833 2.78191C10.5618 1.01409 8.62597 0 6.47251 0C4.31904 0 2.38319 1.01409 1.16172 2.78191C-0.053745 4.54078 -0.334401 6.76756 0.409474 8.73491C0.608443 9.27216 0.924724 9.79412 1.34729 10.2832L6.0466 15.8031C6.15288 15.928 6.3086 16 6.47251 16C6.63641 16 6.79213 15.928 6.89841 15.8031L11.5964 10.2847C12.0208 9.79281 12.3367 9.27141 12.534 8.73847C13.2794 6.76756 12.9988 4.54078 11.7833 2.78191ZM11.4864 8.34666C11.3343 8.75784 11.0858 9.16438 10.7485 9.55541C10.7476 9.55634 10.7466 9.55728 10.7459 9.55841L6.47251 14.5777L2.19651 9.55525C1.85935 9.16456 1.61094 8.75806 1.45729 8.34294C0.842099 6.71591 1.07557 4.87478 2.08201 3.41819C3.0916 1.95694 4.69197 1.11888 6.47251 1.11888C8.25301 1.11888 9.85319 1.95691 10.8628 3.41819C11.8694 4.87478 12.1031 6.71591 11.4864 8.34666Z" fill="#AFAEB4"/>
                <path d="M6.4729 3.31934C4.74553 3.31934 3.34003 4.72465 3.34003 6.45221C3.34003 8.17977 4.74534 9.58509 6.4729 9.58509C8.20046 9.58509 9.60578 8.17977 9.60578 6.45221C9.60578 4.72484 8.20028 3.31934 6.4729 3.31934ZM6.4729 8.46618C5.3624 8.46618 4.4589 7.56268 4.4589 6.45218C4.4589 5.34168 5.3624 4.43818 6.4729 4.43818C7.5834 4.43818 8.4869 5.34168 8.4869 6.45218C8.4869 7.56268 7.5834 8.46618 6.4729 8.46618Z" fill="#AFAEB4"/>
            </svg>
            <svg class="slogan-search-bar__divider-mobile" width="1" height="15" viewBox="0 0 1 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1" height="15" fill="#E5E5E5"></rect>
            </svg>
            <label for="location-input" data-js-slogan-search-location-label-mobile>
                <input placeholder="C. Location" class="slogan-search-location-input-mobile" id="location-input" type="text" data-js-slogan-search-location-input-mobile>
            </label>
        `;

        searchBar.after(locationSearchWrapMobile);

        const locationSearchInputMobile = locationSearchWrapMobile.querySelector('[data-js-slogan-search-location-input-mobile]');

        requestAnimationFrame(() => {
            locationSearchWrapMobile.classList.add('is-visible');
        });

        locationSearchInputMobile.addEventListener('input', function handleLocation() {
            if (locationSearchInputMobile.value.trim().length > 0 && !isPeopleCreated) {
                createPeopleField();
                isPeopleCreated = true;
            }
        });
    }

    function createPeopleField() {
        const peopleButtonWrapMobile = document.createElement('div');
        const locationSearchWrapMobile = searchPanel.querySelector('[data-js-slogan-search-location-wrap-mobile]');
        peopleButtonWrapMobile.classList.add('slogan-dynamic-field', 'slogan-search-bar__people-button-wrap-mobile');

        peopleButtonWrapMobile.innerHTML = `
            <div class="slogan-search-bar__people-dropdown-menu-mobile" data-js-slogan-people-dropdown-menu-mobile>
                <button class="slogan-people-dropdown-button" data-js-slogan-people-dropdown-menu-button>2 Person</button>
                <svg class="slogan-down-arrow-icon" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" data-js-slogan-people-dropdown-menu-arrow>
                    <path d="M0 2.25L4.50002 6.75002L9 2.25H0Z" fill="#BCBCBC"/>
                </svg>
            </div>
        `;

        locationSearchWrapMobile.after(peopleButtonWrapMobile);


        requestAnimationFrame(() => {
            peopleButtonWrapMobile.classList.add('is-visible');
        });

        initPeopleDropdownMenu();
    }
}

export function initPeopleDropdownMenu() {
    const peopleDropdownBlock = document.querySelector('[data-js-slogan-people-dropdown-menu]');

    if (!peopleDropdownBlock) return;

    const peopleDropdownButton = peopleDropdownBlock.querySelector('[data-js-slogan-people-dropdown-menu-button]');
    const peopleDropdownArrow = peopleDropdownBlock.querySelector('[data-js-slogan-people-dropdown-menu-arrow]')

    let currentMenu = null;

    const closeMenu = (e) => {
        if (currentMenu && !currentMenu.contains(e.target) && !peopleDropdownButton.contains(e.target)) {
            removeMenu();
        }
    }

    function removeMenu() {
        if (currentMenu) {
            peopleDropdownButton.classList.remove('is-clicked')
            peopleDropdownArrow.classList.remove('is-clicked')
            currentMenu.remove();
            currentMenu = null;
            document.removeEventListener('click', closeMenu)
        }
    }

    peopleDropdownButton.addEventListener('click', (event) => {
        event.stopPropagation();

        if (currentMenu) {
            removeMenu();
            return;
        }

        const dropdownMenu = document.createElement('div');
        dropdownMenu.innerHTML = `
            <ul class="people-dropdown">
                <li class="people-dropdown__item">
                    <button class="people-dropdown__item-button" type="button">1 Person</button>
                </li>
                <li class="people-dropdown__item">
                    <button class="people-dropdown__item-button" type="button">3 Person</button>
                </li>
                <li class="people-dropdown__item">
                    <button class="people-dropdown__item-button" type="button">4 Person</button>
                </li>
                <li class="people-dropdown__item">
                    <button class="people-dropdown__item-button" type="button">5 Person</button>
                </li>
            </ul>
        `;

        dropdownMenu.classList.add('people-dropdown-wrap')
        peopleDropdownButton.classList.add('is-clicked')
        peopleDropdownArrow.classList.add('is-clicked')

        peopleDropdownButton.appendChild(dropdownMenu);
        currentMenu = dropdownMenu;

        document.addEventListener('click', closeMenu)
    })
}