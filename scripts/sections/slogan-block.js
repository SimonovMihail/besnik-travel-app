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