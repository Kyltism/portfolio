$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    $(".application_window_end").removeClass("open");
    $("body").removeClass("overflow");
  }
});

$(document).ready(function () {
  $(".button-footer").click(function () {
    $(".application_window_end").toggleClass("open");
    $("body").toggleClass("overflow");
  });
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    $(".application_window").removeClass("open");
    $("body").removeClass("overflow");
  }
});

$(document).ready(function () {
  $(".apply").click(function () {
    $(".application_window").toggleClass("open");
    $("body").toggleClass("overflow");
  });
});

// var theNum = "0";
// let arr = ["first", "second"];
// function go_to_right() {
//   theNum++;
//   if (theNum === arr.length) {
//     theNum = 0;
//   }
//   change_image.src = "../../img/liner-change-" + arr[theNum] + ".jpg";
// }

// function go_to_left() {
//   theNum--;
//   if (theNum == -1) {
//     theNum = arr.length - 1;
//   }
//   change_image.src = "../../img/liner-change-" + arr[theNum] + ".jpg";
// }

var a = "0";
let click = ["first", "second", "third", "fourth"];

function to_right() {
  a++;
  if (a === click.length) {
    a = 0;
  }
  first_photo.src = "../../img/virtuosa-left-" + click[a] + ".jpeg";
}

function to_left() {
  a--;
  if (a == -1) {
    a = click.length - 1;
  }
  first_photo.src = "../../img/virtuosa-left-" + click[a] + ".jpeg";
}

var b = "0";
let under = ["first", "second", "third","fourth", "fifth", "sixth", "seventh"];

function to_right_under() {
  b++;
  if (b === under.length) {
    b = 0;
  }
  second_photo.src = "../../img/virtuosa-right-" + under[b] + ".avif";
}

function to_left_under() {
  b--;
  if (b == -1) {
    b = under.length - 1;
  }
  second_photo.src = "../../img/virtuosa-right-" + under[b] + ".avif";
}
