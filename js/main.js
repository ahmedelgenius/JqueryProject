$("#open").click(function () {
    $("#leftNav").fadeIn(1000);
    $("#open").css({left: "255px"});
    $(".text").animate({left: "60%" ,top:"50%"});

})
$("#closeIcon").click(function () {
    $("#leftNav").fadeOut(1000);
    $("#open").css({left: "10px"});
    $(".text").css({left: "50%" ,top:"50%"} );
})

$("h3").click(function (e) {
    let dltclick = e.target;
    // $( dltclick ).next().css({display:"block"})
$(dltclick).next().toggle()

})

// smooth scroll 
$("a[href^='#']").click(function (e) {
    
    let aHref = $(e.target).attr('href');
    let sectionOffset = $(aHref).offset().top;
  
    $("html,body").animate({scrollTop:sectionOffset} ,2000)
   
    // $(window).scrollTop(detailsOffset)
})

// start duration
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date ().getTime();
    
    let dateDiff = countDownDate - dateNow;

    // Time Units 
    // let days = Math.floor(dateDiff / 1000/60/60/24);
    let days = Math.floor(dateDiff / (1000*60*60*24));
    let hours = Math.floor((dateDiff % (1000*60*60 *24)) / (1000 * 60 * 60));
    let minutes= Math.floor((dateDiff % (1000*60*60 )) / (1000 * 60));
    let seconds= Math.floor((dateDiff % (1000*60)) / (1000));
    
    $(".days").html( days + ` D`)
    $(".hours").html( hours + ` H`)
    $(".minutes").html( minutes + ` M`)
    $(".seconds").html( seconds + ` S`)
    // document.querySelector(".days").innerHTML = days + ` D`;
    // document.querySelector(".hours").innerHTML = hours + ` H`;
    // document.querySelector(".minutes").innerHTML = minutes + ` M`
    // document.querySelector(".seconds").innerHTML = seconds + ` S`
},1000) 

// end duration

let maxText = $('textarea').attr('maxLength');
let messageChars = $('.message');
messageChars.html(`<span class="text-danger fs-4">${maxText}</span> Characters `);

$('textarea').keyup(function () {
    let textLength = $(this).val().length;
   let remChars = maxText - textLength;
   messageChars.html(`<span class="text-danger fs-4">${remChars}</span> Characters `);

})