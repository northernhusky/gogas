const mql = window.matchMedia('(max-width: 830px)');

function addHover(items) {
    const isTouch = !!('ontouchstart' in window) || window.navigator.msMaxTouchPoints > 0;
    if (isTouch) {
        return;
    }

    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('hoverable');
    }
}

function handleMenus() {
    let openItem;

    const items = document.querySelectorAll('.nav-item');

    const open = function(item) {
        openItem = item;
        item.classList.add('open');
    };
    const close = function(item) {
        item.classList.remove('open');
    };
    const toggle = function(item) {
        if (~item.className.indexOf('open')) {
            close(item);
        } else {
            open(item);
        }
    };

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(e) {
            const currentTarget = e.currentTarget;
            window.setTimeout(function() {
                toggle(currentTarget);
            });
        });
    }

    document.addEventListener('click', function(e) {
        if (openItem) {
            close(openItem);
        }
        openItem = null;
    });
    mql.addListener(function(e) {
        if (openItem) {
            close(openItem);
        }
        openItem = null;
    });
    addHover(items);
}

function handleBurger() {
    const burger = document.querySelector('.burger');
    const burgerOverlay = document.querySelector('.burger-overlay');

    const open = function() {
        burger.classList.add('open');
        burgerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };
    const close = function() {
        burger.classList.remove('open');
        burgerOverlay.classList.remove('open');
        document.body.style.overflow = 'auto';
    };
    const toggle = function() {
        if (~burger.className.indexOf('open')) {
            close();
        } else {
            open();
        }
    };

    burger.addEventListener('click', toggle);
    mql.addListener(close);
    burgerOverlay.addEventListener('click', function(event) {
        if (event.target.classList.contains('burger-overlay')) {
            close();
        }
    });
}

document.addEventListener('DOMContentLoaded', function(e) {
    handleBurger();
    handleMenus();
});
