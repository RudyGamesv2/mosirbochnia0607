$(".hamburger").click(function(){
    $(this).toggleClass("active")
    $(".navigation-menu").toggleClass("active");
});

$(".navigation-item").click(function(){
    $(".hamburger").toggleClass("active")
    $(".navigation-menu").toggleClass("active");
})

function alertSoon(){
    alert("Wkrótcę...");
}

const cookies = document.querySelector('.CybotMultilevel.CybotCloseButtonEnabled.CybotCookiebotDialogActive');

$(".cookies-info-on").click(function(){
    $("#CookiebotWidget").toggleClass("CookiebotWidget-open")
    $(".CybotMultilevel .CybotCloseButtonEnabled").toggleClass("CybotMultilevel CybotCloseButtonEnabled CybotCookiebotDialogActive")
    cookies.style.opacity = '1';
    cookies.style.display = 'flex';
})