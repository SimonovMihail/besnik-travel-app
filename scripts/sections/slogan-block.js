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

        // burgerButton.appendChild(sideMenuWrap);
        document.body.appendChild(sideMenuWrap)
        currentMenu = sideMenuWrap;

        const closeBtn = sideMenuWrap.querySelector('[data-js-slogan-close-button]');
        closeBtn.addEventListener('click', () => {
            removeMenu();
        });

        document.addEventListener('click', closeMenu);
    })
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