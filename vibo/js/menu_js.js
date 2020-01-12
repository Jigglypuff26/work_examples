/*---  юобычное  ---*/

/*-- плавная прокрутка --*/
//выбираем элементы где в ссылках есть #
let anchors = document.querySelectorAll('.nav__menu a[href*="#"]');

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

/*-- выделение меню при прокрутке --*/
//получение класса
const menu_fix = document.querySelector('.nav_wrap').classList;
//класс со стилями для меню
const menu_bg = "nav_wrap--activ";
//получение высоты меню
let elementHeight_menu = document.querySelector('.nav_wrap').scrollHeight;
//событи при прокрутке окрна
window.addEventListener("scroll", scroll_menu);

function scroll_menu(e) {
    //Получение высоты скролла клиента
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (elementHeight_menu >= windowScroll) {
        menu_fix.remove(menu_bg);
    } else {
        menu_fix.add(menu_bg);
    }
}

/*-- индикация пунктов меню --*/

//классов элементов из меню
const item_clases = document.querySelectorAll('.nav__menu a[href*="#"]');
//получение высоты контентых элементов сайта
const indicators_item = document.querySelectorAll('.indicator_menu');
//класс для элемента меню
const class_element = "nav__menu__btn--activ";
//массив с классами кажного элемента меню
let item_clas = [];
//отметки старта включения индикатора
let item = [];
//погрешность
let minus = 500;

//меню бургер
const item_tab_clases = document.querySelectorAll('.nav__menu_tab a[href*="#"]');
//массив с классами кажного элемента меню
let item_tab_clas = [];

//событие при прокрутке
window.addEventListener("scroll", indication_menu);
window.onload = indication_menu;

//console.log(item_clases);
//console.log(indicators_item);

function elements_get() {

    for (let i = 0; i < indicators_item.length; i++) {
        let Height = indicators_item[i].scrollHeight;
        let i_class = item_clases[i].classList;
        item_clas.push(i_class);

        //бургер
        let i_tab_class = item_tab_clases[i].classList;
        item_tab_clas.push(i_tab_class);

        if (i == 0) {
            item.push(Height - minus);
        } else {
            item.push(Height += (item[item.length - 1]));
        }
        //        console.log('class: ' + item_clas[i]);
        //        console.log('class: ' + item_tab_clas[i]);
        //        console.log(item[i]);
    }
}

function indication_menu(e) {
    //Получение высоты скролла клиента
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (indicators_item.length != item_clases.length) {
        console.log("Проверте равно ли колличество элеметнов меню с коллисечсовм блоков");
    } else {

        elements_get()

        for (let i = 0; i < indicators_item.length; i++) {
            if (i == 0) {
                if (item[i] >= windowScroll) {
                    item_clas[i].add(class_element);

                    item_tab_clas[i].add(class_element);
                } else {
                    item_clas[i].remove(class_element);

                    item_tab_clas[i].remove(class_element);
                }
            } else {
                if (item[i - 1] <= windowScroll && item[i] >= windowScroll) {
                    item_clas[i - 1].remove(class_element);
                    item_clas[i].add(class_element);

                    item_tab_clas[i - 1].remove(class_element);
                    item_tab_clas[i].add(class_element);
                } else {
                    item_clas[i].remove(class_element);

                    item_tab_clas[i].remove(class_element);
                }
            }
        }
    }
}


/*---  БУРГЕР МЕНЮ  ---*/


/*-- действич при нажатии меню --*/

//событи при нажатии нка элемент бургер
const menu_active = document.querySelector('.nav__menu_items_burger');
const menu_tab = document.querySelector(".nav__menu_tab").classList;
//получение класса
const tab_memu_class = "nav__menu_tab--activ";

menu_active.addEventListener("click", activ_menu);

function activ_menu(e) {
    e.preventDefault();

    const indicator_items = document.querySelector('.nav__menu_tab--activ');

    if (indicator_items == null) {

        menu_tab.add(tab_memu_class);

    } else {
        menu_tab.remove(tab_memu_class);
    }
}

//получение значений
const burgr_item = document.querySelectorAll('.nav__menu_tab a[href*="#"]');
//присоение событий элементам переменной "burgr_item"
for (let burgr_anchors of burgr_item) {

    burgr_anchors.addEventListener("click", activ_menu_rmove)

    function activ_menu_rmove(e) {
        e.preventDefault();
        menu_tab.remove(tab_memu_class);
    }
}

/*-- плавная прокрутка --*/

//выбираем элементы где в ссылках есть #
let anchors_tab = document.querySelectorAll('.nav__menu_tab a[href*="#"]');

for (let anchor of anchors_tab) {
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
