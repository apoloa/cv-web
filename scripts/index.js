var form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
    var inputFullName = document.getElementById('full-name');
    var inputFullNameContainer = document.getElementById('full-name-container');

    var inputEmail = document.getElementById('email');
    var inputEmailContainer = document.getElementById('email-container');

    var acknowledgeTwitter = document.getElementById('acknowledge-1');
    var acknowledgeLinkedin = document.getElementById('acknowledge-2');
    var acknowledgeGithub = document.getElementById('acknowledge-3');
    var acknowledgeOther = document.getElementById('acknowledge-4');
    var inputAcknowledgeContainer = document.getElementById('acknowledge-container');

    var inputPhone = document.getElementById('phone');
    var inputPhoneContainer = document.getElementById('phone-container');

    var inputMessage = document.getElementById('message');
    var inputMessageContainer = document.getElementById('message-container');


    if (!inputFullName.checkValidity()) {
        inputFullName.focus();
        inputFullNameContainer.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        inputFullNameContainer.style.borderColor = 'transparent';
    }

    if (!inputEmail.checkValidity()) {
        inputEmail.focus();
        inputEmailContainer.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        inputEmailContainer.style.borderColor = 'transparent';
    }

    if (!acknowledgeTwitter.checked && !acknowledgeLinkedin.checked && !acknowledgeGithub.checked && !acknowledgeOther.checked) {
        inputAcknowledgeContainer.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        inputAcknowledgeContainer.style.borderColor = 'transparent';
    }

    if (!inputPhone.checkValidity()) {
        inputPhone.focus();
        inputPhoneContainer.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else if (isNaN(inputPhone.value)) {
        inputPhone.focus();
        inputPhoneContainer.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        inputPhoneContainer.style.borderColor = 'transparent';
    }
    debugger;
    if (!inputMessage.value.length > 0) {
        inputMessage.focus();
        inputMessageContainer.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        inputMessageContainer.style.borderColor = 'transparent';
    }

});

var nav = document.getElementById('nav');
var distanceHeader = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

window.addEventListener('scroll', function () {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > distanceHeader) {
        console.log('a');
        nav.className = 'color-nav'
    } else {
        nav.className = 'transparent-nav'
    }

}, false);

var navItems = document.getElementsByClassName('nav-item');
document.getElementsByClassName('nav-item');
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function (event) {
        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if (sectionToGo.length > 1) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            scrollToId(goTo);
        }
    });
}

function scrollToId (name) {
    var element;
    if (name == '') {
        element = document.getElementsByClassName('header')[0];
    } else {
        element = document.getElementById(name);
    }
    scrollToElement(element);
}

function scrollToElement (element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.2);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        element.lastJump = Math.abs(jump);
        setTimeout(function () {
            scrollToElement(element);
        }, 60);
    } else {
        element.lastJump = null;
    }
}