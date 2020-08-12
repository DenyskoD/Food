window.addEventListener("DOMContentLoaded" , () => {
    
    // tabs

    let tabs = document.querySelectorAll(".tabcontent");
    let tabBtns = document.querySelectorAll(".tabheader__item");
    let tabsParent = document.querySelector(".tabheader__items");


    function hideTabs() {
        tabs.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabBtns.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabs(i = 0) {
        tabs[i].classList.add("show", "fade");
        tabs[i].classList.remove("hide", );
        tabBtns[i].classList.add("tabheader__item_active");
    }

    hideTabs();
    showTabs();

    tabsParent.addEventListener('click' , (event) => {

        let target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabBtns.forEach((item , i) => {
                if (target == item) {
                    hideTabs();
                    showTabs(i);
                }
            });
        }

    });


    // modal

    let modal = document.querySelector(".modal");
    let modalShowBtns = document.querySelectorAll("[data-modal]");
    let modalClose = document.querySelector("[data-close]")


    function modalShow() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    modalShowBtns.forEach(item => {
        item.addEventListener('click' , modalShow)
    });

    function modalHide() {
        modal.classList.remove("show");
        modal.classList.add("hide");
        document.body.style.overflow = "";
    }

    modalClose.addEventListener('click' , modalHide)

    modal.addEventListener('click' , (e) => {
        if(e.target == modal) {
            modalHide();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === "Escape") {
            modalHide();
        }
    });

    let modalTimerId = setTimeout(modalShow , 60000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalShow();
            window.removeEventListener('scroll' , showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // class for card

    class MenuCard {
        constructor(src, alt, title , desc , price, parentSelector , ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 25;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price *= this.transfer;
        }

        render() {
            const element = document.createElement('div');

            this.classes.forEach(className => element.classList.add(className));
            
            element.innerHTML += `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Премиум"',
        'Меню "Премиум" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        11,
        ".menu .container",
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню "Постное" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        13,
        ".menu .container",
        'menu__item'
    ).render();

});