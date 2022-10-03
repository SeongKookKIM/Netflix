$(function () {
  var timer = setInterval(random_move, 2000);

  function random_move() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;

    $("#main_sec .area > div:nth-child(1)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move1, 2000);

  function random_move1() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(2)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move2, 2000);

  function random_move2() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(3)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move3, 2000);

  function random_move3() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(4)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move4, 2000);

  function random_move4() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(5)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move5, 2000);

  function random_move5() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(6)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move6, 2000);

  function random_move6() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(7)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move7, 2000);

  function random_move7() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(8)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1000,
      "easeOutExpo"
    );
  }
  var timer = setInterval(random_move8, 2000);

  function random_move8() {
    var posX = Math.random() * 1921;
    var posY = Math.random() * 1080;
    var sca = Math.random() * 151;
    $("#main_sec .area > div:nth-child(9)").animate(
      {
        left: posX,
        top: posY,
        scale: sca + "%",
      },
      1500,
      "easeOutExpo"
    );
  }

  //   첫번째 메인 페이지
  $("#main_first .logo_box img").css({
    transform: "scale(" + 100 + "%)",
  });
  $("#main_first")
    .delay(3000)
    .animate(
      {
        opacity: "0",
        top: "-" + 100 + "vh",
      },
      1000,
      "easeOutExpo"
    );
});
