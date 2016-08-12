

// var $t = $(".item:nth-child(2)").offset()
// var $m = $(".item:nth-child(2)").height()


// $(".item:nth-child(5)").css({
//   width: ("300px"),
//   position: "absolute",
//   top: $m ,
//   left: ("300px")
// })
//
// var $t = $(".item:nth-child(1)").offset()
// var $m = $(".item:nth-child(1)").height()
// $(".item:nth-child(4)").css({
//   width: ("300px"),
//   position: "absolute",
//   top: $m ,
//   left: "0"
// })
$(".item").css({
  position: "absolute",
  width: "300px",
  boxSizing: "border-box"
})
$(".item:nth-child(2)").css('left', '33.3333%');
$(".item:nth-child(3)").css('left', '66.6666%');

// Top and left defination

var a = 0;
for( a = 0; a<$(".item").length; a=a+3){
  var f = [Math.floor($(".item:nth-child("+(a + 1) + ")").offset().top) + $(".item:nth-child("+(a + 1) + ")").height(),Math.floor($(".item:nth-child("+(a + 1) + ")").offset().left) - Math.floor($(".main").offset().left)];
  console.log(f)
  var s = [Math.floor($(".item:nth-child("+(a + 2) + ")").offset().top) + $(".item:nth-child("+(a + 2) + ")").height(),Math.floor($(".item:nth-child("+(a + 2) + ")").offset().left) - Math.floor($(".main").offset().left)];
  console.log(s)
  var t = [Math.floor($(".item:nth-child("+(a + 3) + ")").offset().top) + $(".item:nth-child("+(a + 3) + ")").height(),Math.floor($(".item:nth-child("+(a + 3) + ")").offset().left) - Math.floor($(".main").offset().left)];
  console.log(t)

  // Variables sorting from highest to lowest

  if (s[0] > f[0]) {
    var tmp = f;
    f = s;
    s = tmp;
  }
  if(t[0] > s[0]){
    var tmp = s;
    s = t;
    t = tmp;
  }
  if (s[0] > f[0]) {
    var tmp = f;
    f = s;
    s = tmp;
  }



  $(".item:nth-child("+(a + 4) + ")").css({
    top:t[0] ,
    left: t[1]
  })
  $(".item:nth-child("+(a + 5) + ")").css({
    top: s[0],
    left: s[1]
  })
  $(".item:nth-child("+(a + 6) + ")").css({
    top: f[0],
    left: f[1]
  })
}
