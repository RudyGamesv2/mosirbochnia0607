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