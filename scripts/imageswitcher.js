

$("button").hover(function() {
    var image_1 = $("img#home-button");
    var img1_src = "https://tinyurl.com/hvbs9ch";
    var img2_src = "https://tinyurl.com/peyuec5";
      
    if (image_1.attr("src") == img1_src) {
        image_1.attr("src", img2_src);
      } else {
        image_1.attr("src", img1_src);
      }
  });