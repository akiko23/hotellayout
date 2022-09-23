
const hiddenMenu = document.querySelector('#hidden_menu');
const openMenuIcon = document.querySelector('#hidden_menu_icon')

const firstIconLine = document.getElementById('first-line');
const secondIconLine = document.getElementById('second-line');

let openedStatus = false;

openMenuIcon.addEventListener('click', (e) => {
    hiddenMenu.classList.toggle('opened__menu');
    openedStatus = !openedStatus;

    console.log(openedStatus)

    hiddenMenu.style.animation = openedStatus ? 'move_down 1.2s ease forwards' : 'move_up 1.2s ease forwards';
    hiddenMenu.innerHTML = "<ul>\n" +
        "                    <li class=\"nav__item\"><p><a class=\"nav__item__link\" href=\"#\">Главная</a></p></li>\n" +
        "                    <li class=\"nav__item\"><p><a class=\"nav__item__link\" href=\"#\">О нас</a></p></li>\n" +
        "                    <li class=\"nav__item pr-3 mx-2\"><a class=\"nav__item__link\" href=\"#\">Номера и цены</a></li>\n" +
        "                    <li class=\"nav__item\"><p><a class=\"nav__item__link\" href=\"#\">Развлечения</a></p></li>\n" +
        "                    <li class=\"nav__item\"><p><a class=\"nav__item__link\" href=\"#\">Контакты</a></li>\n" +
        "                    <li class=\"btn bron__btn\"><a class=\"btn__item__link\" style=\"font-weight: 600\" href=\"#\">Забронировать</a></li>\n" +
        "                </ul>";

    firstIconLine.style.animation = openedStatus ? "makeafirstcrossline 1.2s ease forwards" : 'makeafirstbackline 1.2s ease forwards';
    secondIconLine.style.animation = openedStatus ? 'makeasecondcrossline 1.2s ease forwards' : 'makeasecondbackline 1.2s ease forwards';
})

