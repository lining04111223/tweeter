$(document).ready(function() {
  $("textarea").on('input', function() {
  let remainNum = 140;
  const currentCount = $(this).val().length;
  remainNum  -= currentCount;
  const counter = $(this).parent().siblings(".formbottom").children("output")[0];
  counter.innerText = remainNum.toString();
  if (remainNum < 0) {
    $(counter).addClass("changeToRed");

  }else {
    $(counter).removeClass("changeToRed");
  }
  })
});


