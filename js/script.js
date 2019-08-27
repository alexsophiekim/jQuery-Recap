const id = $('#heading');
console.log(id);

const listItems = $('.listItem');
console.log(listItems);

const element = $('p');
console.log(element);


$("#heading").click(function(){
  // console.log('you clicked on heading');
  // $("p").hide();
  let currentHeading = $(this).text()
  console.log($(this).text());
  $(this).text(currentHeading + ' has been clicked');
});

$('.listItem').click(function(){
  $(this).hide();
  $("p").show();
});

$(".blueBtn").click(function(){
  $(".blue").toggle();
});

$(".yellowBtn").click(function(){
  $(".yellow").toggle();
});

$(".tealBtn").click(function(){
  $(".teal").toggle();
});

$("#hideBtn").click(function(){
  $(".box").hide();
})

$("#showBtn").click(function(){
  $(".box").show();
})

$("input").blur(function(){
  let val = $("input").val();
  if (val === 'teal') {
    $(".boxGrp").append(`<div class="box bg-info teal"> </div>`);
  } else if (val === 'yellow') {
    $(".boxGrp").append(`<div class="box bg-warning yellow"> </div>`);
  } else if (val === 'blue') {
    $(".boxGrp").append(`<div class="box bg-primary blue"> </div>`);
  } else {
    console.log('error');
  }
  $(this).val(null)
});
