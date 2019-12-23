const modal_window = document.getElementById('modal_window');
const register_tab = document.getElementById('modal-register');
const login_tab = document.getElementById('modal-login');

const logo_img = document.getElementById('hover-img-main');
const hover_top = document.getElementById('onhover-img-main-top');
const hover_bot = document.getElementById('onhover-img-main-bot');
const phone_top = document.getElementById('phone-img-main-top');
const phone_bot = document.getElementById('phone-img-main-bot');

if(navigator.userAgent.indexOf('Firefox') !== -1) {
    hover_top.style.marginLeft = '550px';
    hover_bot.style.marginRight = '600px';
    hover_bot.style.marginLeft = 'unset';
    phone_bot.style.marginLeft = '100px';
    phone_top.style.marginRight = '100px';
    phone_top.style.marginLeft = 'unset';
    if (window.matchMedia('(max-width: 1366px)').matches) {
        hover_top.style.marginLeft = '400px';
        hover_bot.style.marginRight = '420px';
        hover_bot.style.marginLeft = 'unset';
    } else {
        hover_top.style.marginLeft = '550px';
        hover_bot.style.marginRight = '600px';
        hover_bot.style.marginLeft = 'unset';
    }
}

window.onresize = function () {
    if(navigator.userAgent.indexOf('Firefox') !== -1) {
        if (window.matchMedia('(max-width: 1366px)').matches) {
            hover_top.style.marginLeft = '400px';
            hover_bot.style.marginRight = '420px';
            hover_bot.style.marginLeft = 'unset';
        }
        else{
            hover_top.style.marginLeft = '550px';
            hover_bot.style.marginRight = '600px';
            hover_bot.style.marginLeft = 'unset';
        }
    }
};

function open_modal() {
    modal_window.style.display = 'flex';
}

function close_modal() {
    modal_window.style.display = 'none';
}

function open_register_tab() {
    login_tab.style.display = 'none';
    register_tab.style.display = 'block';
    document.getElementById('modal-up').style.borderBottomColor = '#EB5757';
    document.getElementById('modal-in').style.borderBottomColor = '#999';
}

function open_login_tab() {
    register_tab.style.display = 'none';
    login_tab.style.display = 'block';
    document.getElementById('modal-in').style.borderBottomColor = '#EB5757';
    document.getElementById('modal-up').style.borderBottomColor = '#999';
}

function makeAllWithoutBorder() {
    document.getElementById('light').style.borderColor = "#111";
    document.getElementById('base').style.borderColor = "#111";
    document.getElementById('pro').style.borderColor = "#111";
}

function choose(id) {
    makeAllWithoutBorder();
    document.getElementById(id).style.borderColor = "#EB5757"
}

function handleMediaMenu() {
    document.getElementsByClassName('media-menu')[0].style.display = "block";
}

document.getElementById('hover-img-main').addEventListener('mouseover', function () {
    document.getElementById("onhover-img-main-top").style.opacity = '1';
    document.getElementById("onhover-img-main-bot").style.opacity = '1';
});

document.getElementById('hover-img-main').addEventListener('mouseleave', function () {
    document.getElementById("onhover-img-main-top").style.opacity = '0';
    document.getElementById("onhover-img-main-bot").style.opacity = '0';
});
