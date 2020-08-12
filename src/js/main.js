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
});