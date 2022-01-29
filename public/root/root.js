// let mainHeaderHeight = $("#main-header").height();
// $("#website-wrapper").css("max-height", `calc(100vh - ${mainHeaderHeight ? mainHeaderHeight : 0}px)`)

// ----- Ripple effect on button -----
// $("button").on("click", function (e) {

//   $(".ei-ripple").remove();
//   $(this).children(".loader-span").remove(); // to avoid multiple loaders

//   var posX = $(this).offset().left,
//     posY = $(this).offset().top,
//     buttonWidth = $(this).width(),
//     buttonHeight = $(this).height();

//   $(this).prepend("<span class='ei-ripple'></span>");

//   if (buttonWidth >= buttonHeight) {
//     buttonHeight = buttonWidth;
//   } else {
//     buttonWidth = buttonHeight;
//   }

//   var x = e.pageX - posX - buttonWidth / 2;
//   var y = e.pageY - posY - buttonHeight / 2;

//   $(".ei-ripple").css({
//     width: buttonWidth,
//     height: buttonHeight,
//     top: y + 'px',
//     left: x + 'px'
//   }).addClass("ei-rippleEffect");

// });


// const buttons = document.querySelectorAll('button')

// buttons.forEach(btn => {
//   btn.addEventListener('click', function (e) {
//     // document.querySelector('.ei-ripple').remove();

//     var posX = this.offsetLeft(),
//       posY = this.offsetTop(),
//       buttonWidth = this.clientWidth(),
//       buttonHeight = this.clientHeight();

//     this.prepend("<span class='ei-ripple'></span>");

//     if (buttonWidth >= buttonHeight) {
//       buttonHeight = buttonWidth;
//     } else {
//       buttonWidth = buttonHeight;
//     }

//     var x = e.pageX - posX - buttonWidth / 2;
//     var y = e.pageY - posY - buttonHeight / 2;

//     let ripple = document.querySelector('.ei-ripple')
//     ripple.style.width = buttonWidth;
//     ripple.style.height = buttonHeight;
//     ripple.style.top = y + 'px';
//     ripple.style.left = x + 'px';
//     ripple.classList.add('ei-rippleEffect')
//   })
// })



//ripple effect for navLinks
// $(".navItem").on("click", function (e) {

//   $(".ei-ripple").remove();
//   $(this).children(".loader-span").remove(); // to avoid multiple loaders

//   var posX = $(this).offset().left,
//     posY = $(this).offset().top,
//     buttonWidth = $(this).width(),
//     buttonHeight = $(this).height();

//   $(this).prepend("<span class='ei-ripple'></span>");

//   if (buttonWidth >= buttonHeight) {
//     buttonHeight = buttonWidth;
//   } else {
//     buttonWidth = buttonHeight;
//   }

//   var x = e.pageX - posX - buttonWidth / 2;
//   var y = e.pageY - posY - buttonHeight / 2;

//   $(".ei-ripple").css({
//     width: buttonWidth,
//     height: buttonHeight,
//     top: y + 'px',
//     left: x + 'px'
//   }).addClass("ei-rippleEffect");

// });

/* ----- Loader on buttons ----- */
function addLoader(buttonID) {
  let clickButton = $("#" + buttonID);
  clickButton.children(".loader-span").remove(); // to avoid multiple loaders
  clickButton.addClass("ei-btn-loader").prepend(`<span class='loader-span'></span>`);
}
function removeLoader(buttonID) {
  let clickButton = $("#" + buttonID);
  clickButton.children(".loader-span").remove();
  clickButton.removeClass("ei-btn-loader");
}