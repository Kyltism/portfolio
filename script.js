$(document).ready(function () {
  $(".button_action").click(function () {
    $(".actions_section.more").toggleClass("open-menu");
    $(".rotate_arrow").toggleClass("color");
    $(".button_action").toggleClass("open");
    $(".button_action_close").toggleClass("to_close");
  });
});

$(document).ready(function () {
  $(".button_action_close").click(function () {
    $(".actions_section.more").removeClass("open-menu");
    $(".rotate_arrow").removeClass("color");
    $(".button_action").removeClass("open");
    $(".button_action_close").removeClass("to_close");
  });
});

$(document).ready(function () {
  $(".close-question.why").click(function () {
    $(".close_text.why").toggleClass("open");
    $(".rotate_arrow.why").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.chip").click(function () {
    $(".close_text.chip").toggleClass("open");
    $(".rotate_arrow.chip").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.which").click(function () {
    $(".close_text.which").toggleClass("open");
    $(".rotate_arrow.which").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.include").click(function () {
    $(".close_text.include").toggleClass("open");
    $(".rotate_arrow.include").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.children").click(function () {
    $(".close_text.children").toggleClass("open");
    $(".rotate_arrow.children").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close_questions button").click(function () {
    $(".close_page_questions").toggleClass("open");
    $(".arrow_more").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.safety").click(function () {
    $(".close_text.safety").toggleClass("open");
    $(".rotate_arrow.safety").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.when").click(function () {
    $(".close_text.when").toggleClass("open");
    $(".rotate_arrow.when").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.alone").click(function () {
    $(".close_text.alone").toggleClass("open");
    $(".rotate_arrow.alone").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.disease").click(function () {
    $(".close_text.disease").toggleClass("open");
    $(".rotate_arrow.disease").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.way").click(function () {
    $(".close_text.way").toggleClass("open");
    $(".rotate_arrow.way").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.limited").click(function () {
    $(".close_text.limited").toggleClass("open");
    $(".rotate_arrow.limited").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.people").click(function () {
    $(".close_text.people").toggleClass("open");
    $(".rotate_arrow.people").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.take").click(function () {
    $(".close_text.take").toggleClass("open");
    $(".rotate_arrow.take").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.cabin").click(function () {
    $(".close_text.cabin").toggleClass("open");
    $(".rotate_arrow.cabin").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".close-question.late").click(function () {
    $(".close_text.late").toggleClass("open");
    $(".rotate_arrow.late").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".application").click(function () {
    $(".application_window").toggleClass("open");
    $("body").toggleClass("overflow");
  });
});

$(document).ready(function () {
  $(".div.application_window div.form input.send_forms").click(function () {
    $(".application_window").removeClass("open");
    $("body").removeClass("overflow");
  });
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    $(".application_window").removeClass("open");
    $("body").removeClass("overflow");
  }
});

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

// burger menu

$(document).ready(function () {
  $(".menu-burger_header").click(function () {
    $(".menu-burger_header").toggleClass("open-menu");
    $(".header_nav").toggleClass("open-menu");
  });
});

$(document).ready(function () {
  $(".burger_cruises.close").click(function () {
    $(".submenu_cruises").removeClass("close");
    $(".submenu_cruises").toggleClass("open");
    $(".burger_cruises").removeClass("close");
    $(".burger_cruises").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".burger_flot.close").click(function () {
    $(".submenu_flot").removeClass("close");
    $(".submenu_flot").toggleClass("open");
    $(".burger_flot").removeClass("close");
    $(".burger_flot").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".burger_placment.close").click(function () {
    $(".submenu_burger").removeClass("close");
    $(".submenu_burger").toggleClass("open");
    $(".burger_placment").removeClass("close");
    $(".burger_placment").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text.first.close").click(function () {
    $(".second_text_burger.one").removeClass("close");
    $(".second_text_burger.one").toggleClass("open");
    $(".dropdown_text.first").removeClass("close");
    $(".dropdown_text.first").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text.second.close").click(function () {
    $(".second_text_burger.two").removeClass("close");
    $(".second_text_burger.two").toggleClass("open");
    $(".dropdown_text.second").removeClass("close");
    $(".dropdown_text.second").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text_flot.second.close").click(function () {
    $(".second_flot").removeClass("close");
    $(".second_flot").toggleClass("open");
    $(".dropdown_text_flot.second").removeClass("close");
    $(".dropdown_text_flot.second").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text.third.close").click(function () {
    $(".second_text_burger.three").removeClass("close");
    $(".second_text_burger.three").toggleClass("open");
    $(".dropdown_text.third").removeClass("close");
    $(".dropdown_text.third").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text.fourth.close").click(function () {
    $(".second_text_burger.four").removeClass("close");
    $(".second_text_burger.four").toggleClass("open");
    $(".dropdown_text.fourth").removeClass("close");
    $(".dropdown_text.fourth").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text.fifth.close").click(function () {
    $(".second_text_burger.five").removeClass("close");
    $(".second_text_burger.five").toggleClass("open");
    $(".dropdown_text.fifth").removeClass("close");
    $(".dropdown_text.fifth").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".dropdown_text.sixth.close").click(function () {
    $(".second_text_burger.six").removeClass("close");
    $(".second_text_burger.six").toggleClass("open");
    $(".dropdown_text.sixth").removeClass("close");
    $(".dropdown_text.sixth").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".burger_premium.close").click(function () {
    $(".submenu_premium").removeClass("close");
    $(".submenu_premium").toggleClass("open");
    $(".burger_premium").removeClass("close");
    $(".burger_premium").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".burger_bort.close").click(function () {
    $(".submenu_bort_burger").removeClass("close");
    $(".submenu_bort_burger").toggleClass("open");
    $(".burger_bort").removeClass("close");
    $(".burger_bort").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".adaptive_button_right.first").click(function () {
    $(".adaptive_button_right.first").toggleClass("close");
    $(".adaptive_button_right.second").removeClass("close");
    $(".shell_adaptive.first").removeClass("open");
    $(".shell_adaptive.first").toggleClass("close");
    $(".shell_adaptive.second").removeClass("close");
    $(".shell_adaptive.second").toggleClass("open");
    $(".adaptive_button_left.first").toggleClass("close");
    $(".adaptive_button_left.fourth").removeClass("close");
  });
});

$(document).ready(function () {
  $(".adaptive_button_right.second").click(function () {
    $(".adaptive_button_right.second").toggleClass("close");
    $(".adaptive_button_right.third").removeClass("close");
    $(".shell_adaptive.second").removeClass("open");
    $(".shell_adaptive.second").toggleClass("close");
    $(".shell_adaptive.third").removeClass("close");
    $(".shell_adaptive.third").toggleClass("open");
    $(".adaptive_button_left.fourth").toggleClass("close");
    $(".adaptive_button_left.third").removeClass("close");
  });
});

$(document).ready(function () {
  $(".adaptive_button_right.third").click(function () {
    $(".adaptive_button_right.third").toggleClass("close");
    $(".adaptive_button_right.fourth").removeClass("close");
    $(".shell_adaptive.third").removeClass("open");
    $(".shell_adaptive.third").toggleClass("close");
    $(".shell_adaptive.fourth").removeClass("close");
    $(".shell_adaptive.fourth").toggleClass("open");
    $(".adaptive_button_left.third").toggleClass("close");
    $(".adaptive_button_left.second").removeClass("close");
  });
});


$(document).ready(function () {
  $(".adaptive_button_right.fourth").click(function () {
    $(".adaptive_button_right.fourth").toggleClass("close");
    $(".adaptive_button_right.first").removeClass("close");
    $(".shell_adaptive.fourth").removeClass("open");
    $(".shell_adaptive.fourth").toggleClass("close");
    $(".shell_adaptive.first").removeClass("close");
    $(".shell_adaptive.first").toggleClass("open");
    $(".adaptive_button_left.second").toggleClass("close");
    $(".adaptive_button_left.first").removeClass("close");
  });
});

$(document).ready(function () {
  $(".adaptive_button_left.first").click(function () {
    $(".adaptive_button_left.first").toggleClass("close");
    $(".adaptive_button_left.second").removeClass("close");
    $(".shell_adaptive.fourth").removeClass("close");
    $(".shell_adaptive.fourth").toggleClass("open");
    $(".shell_adaptive.first").removeClass("open");
    $(".shell_adaptive.first").toggleClass("close");
    $(".adaptive_button_right.first").toggleClass("close");
    $(".adaptive_button_right.fourth").removeClass("close");
  });
});

$(document).ready(function () {
  $(".adaptive_button_left.second").click(function () {
    $(".adaptive_button_left.second").toggleClass("close");
    $(".adaptive_button_left.third").removeClass("close");
    $(".shell_adaptive.third").removeClass("close");
    $(".shell_adaptive.third").toggleClass("open");
    $(".shell_adaptive.fourth").removeClass("open");
    $(".shell_adaptive.fourth").toggleClass("close");
    $(".adaptive_button_right.fourth").toggleClass("close");
    $(".adaptive_button_right.third").removeClass("close");
  });
});

$(document).ready(function () {
  $(".adaptive_button_left.third").click(function () {
    $(".adaptive_button_left.third").toggleClass("close");
    $(".adaptive_button_left.fourth").removeClass("close");
    $(".shell_adaptive.second").removeClass("close");
    $(".shell_adaptive.second").toggleClass("open");
    $(".shell_adaptive.third").removeClass("open");
    $(".shell_adaptive.third").toggleClass("close");
    $(".adaptive_button_right.third").toggleClass("close");
    $(".adaptive_button_right.second").removeClass("close");
  });
});

$(document).ready(function () {
  $(".adaptive_button_left.fourth").click(function () {
    $(".adaptive_button_left.fourth").toggleClass("close");
    $(".adaptive_button_left.first").removeClass("close");
    $(".shell_adaptive.first").removeClass("close");
    $(".shell_adaptive.first").toggleClass("open");
    $(".shell_adaptive.second").removeClass("open");
    $(".shell_adaptive.second").toggleClass("close");
    $(".adaptive_button_right.second").toggleClass("close");
    $(".adaptive_button_right.first").removeClass("close");
  });
});