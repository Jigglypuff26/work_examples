/*-- плавная прокрутка --*/

//выбираем элементы где в ссылках есть #
let anchors = document.querySelectorAll('.menu a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", slow_scroll)

    function slow_scroll(e) {
        e.preventDefault();
        const blokID = anchor.getAttribute('href');
        document.querySelector('' + blokID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/*-- действич при нажатии меню --*/

//получение значений
const burgr_item = document.querySelectorAll('.nav__menu_burger_item a[href*="#"]');
//получение класса
const menu = document.getElementById("menu_cont").classList;
const menu_btn = document.getElementById('nav__menu_btn').classList;


//присоение событий элементам переменной "burgr_item"
for (let burgr_anchors of burgr_item) {

    burgr_anchors.addEventListener("click", activ_menu_rmove)

    function activ_menu_rmove(e) {
        e.preventDefault();
        menu.remove("nav__menu_burger_wrap--activ");
    }
}

//событи при нажатии нка элемент бургер
const menu_active = document.querySelector('.nav__menu_burger_img');
menu_active.addEventListener("click", activ_menu);

function activ_menu(e) {
    e.preventDefault();

    const indicator_active = document.querySelector('.nav__menu_burger_wrap--activ');
    const indicator_btn = document.querySelector('.nav__menu_btn--activ');

    if (indicator_active == null && indicator_btn == null) {

        menu.add("nav__menu_burger_wrap--activ");

    } else {
        menu.remove("nav__menu_burger_wrap--activ");
    }
}




/*-- индикация меню --*/
//событи при прокрутке окрна
window.addEventListener("scroll", scroll_menu);
//получение класса
const menu_fix = document.getElementById('menu').classList;

let elementHeight_menu = document.getElementById("menu").scrollHeight += 10;

function scroll_menu(e) {
    //Получение высоты скролла клиента
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (elementHeight_menu >= windowScroll) {
        menu_fix.remove("nav__wrap--activ");
    } else {
        menu_fix.add("nav__wrap--activ");
    }
}


/*-- индикация пунктов меню --*/
//событие при прокрутке
window.addEventListener("scroll", indication_menu);
window.onload = indication_menu;

//классов элементов из меню
const item_clases = document.querySelectorAll('.menu a[href*="#"]');
//получение высоты контентых элементов сайта
const indicators_item = document.querySelectorAll('.indicator_menu');
//класс для элемента меню
const class_element = "nav__btn--activ";
//массив с классами кажного элемента меню
let item_clas = [];
//отметки старта включения индикатора
let item = [];
//погрешность
let minus = 150;

function elements_get() {

    for (let i = 0; i < indicators_item.length; i++) {
        let Height = indicators_item[i].scrollHeight;
        item_clas.push(item_clases[i].classList);

        if (i == 0) {
            item.push(Height - minus);
        } else {
            item.push(Height += (item[item.length - 1]));
        }
//        console.log('class' + item_clas[i]);
//        console.log(item[i]);
    }
}

function indication_menu(e) {
    //Получение высоты скролла клиента
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    elements_get()

    for (let i = 0; i < indicators_item.length; i++) {
        if (i == 0) {
            if (item[i] >= windowScroll) {
                item_clas[i].add(class_element);
            } else {
                item_clas[i].remove(class_element);
            }
        } else {
            if (item[i - 1] <= windowScroll && item[i] >= windowScroll) {
                item_clas[i - 1].remove(class_element);
                item_clas[i].add(class_element);
            } else {
                item_clas[i].remove(class_element);
            }

        }
    }
}
