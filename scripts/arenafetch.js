// var arenadata;

// fetch('  https://api.are.na/v2/channels/visual-feed-6j98rvjedrm/contents/?direction=desc&sort=position&per=5')
//   .then((response) => response.json())
//   // .then((data) => console.log(data))
//   .then((data) => arenadata);

// console.log(arenadata)  

var arenablocks = document.querySelectorAll('div.aboutarenacontent');

// console.log(arenablocks[0])


async function arenafetch() {
  var arenablocks = document.querySelectorAll('div.aboutarenacontent');

  let obj;

  const res = await fetch('https://api.are.na/v2/channels/visual-feed-6j98rvjedrm/contents/?direction=desc&sort=position&per=5')

  arenadata = await res.json();

  arenadata.contents.forEach((num, index) => {
    // console.log(num.image.square.url)
    arenablocks[index].style.backgroundImage=`url(${num.image.square.url})`;
    // console.log(arenablocks[index])
  });

  
}


