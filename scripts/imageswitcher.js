

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


function imageswitchon(src, img) {
  // console.log(src.getElementsByTagName('img')[0].src)
  var imgnamestring = `/img/${img}.png`
  // console.log(imgnamestring)

  src.getElementsByTagName('img')[0].src = imgnamestring;
  src.getElementsByTagName('img')[0].style='mix-blend-mode:normal'
}

function imageswitchoff(src, img) {
  var imgnamestring = `/img/${img}-d.png`
  src.getElementsByTagName('img')[0].src = imgnamestring; 
  src.getElementsByTagName('img')[0].style='mix-blend-mode:screen'
}