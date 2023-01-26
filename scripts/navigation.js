const bodyTag = document.querySelector("body")
const wiper = document.createElement("div")
const landingcontainer = document.querySelector("div.content")


wiper.classList.add("wiper")
bodyTag.appendChild(wiper)
 
barba.init({
    // debug: true,
    transitions: [
      {
        name: "next",
        leave({ current, next, trigger }) {
            return new Promise(resolve=> {
                const timeline = gsap.timeline({
                    onComplete() {
                        current.container.remove()
                        resolve()
                    }
                })
                const navigation = current.container.querySelectorAll("header, a.next, a.previous")
                const container = current.container.querySelectorAll("div.photos")

                timeline
                    .set(wiper, {x: "-100%"})
                    .to(navigation, {opacity: 0}, 0)
                    .to(container, {opacity: 0.25 , x: 500}, 0)
                    .to(wiper, {x: 0}, 0)


                    

            }) 
        },
        beforeEnter ({ current, next, trigger }) {

            const headerLinks = document.querySelectorAll("header a")
            const href = next.url.path
    
            headerLinks.forEach(link => {
              if (link.getAttribute("href") === href) {
                link.classList.add("selected")
              } else {
                link.classList.remove("selected")
              }
            })
    
            window.scrollTo({top: 0, behavior: "smooth"})
        },
        enter({ current, next, trigger }) {
            return new Promise(resolve=> {

                const timeline = gsap.timeline({
                    onComplete() {
                        resolve()
                    }
                })

                const navigation = next.container.querySelectorAll("header, a.next, a.previous")
                const container = next.container.querySelectorAll("div.photos")

                timeline
                    .set(navigation, {opacity:0})
                    .set(container, {opacity:0.25, x: -500})

                    .to(navigation, {opacity:1}, 0)
                    .to(container, {opacity:1, x: 0}, 0)
                    .to(wiper, {x: "100%"}, 0.5)
                 
            })
        },
        afterEnter: () => {
            adjustHeader();

            var currentLocation = window.location.pathname;
            if (currentLocation == '/about.html') {
                arenafetch();
            };

            if (currentLocation == '/index.html') {
                gsap.delayedCall(.25, moveGallery);
            }
            emailprotect();

        }
    }
],
views: []
})





const headerTitle = document.getElementById("navTitle")
var header = document.querySelector("header");


var el = document.getElementById('navTitle');
var comp = el.currentStyle || getComputedStyle(el, null);
headerSize = comp.fontSize
// console.log(headerSize)
// console.log(comp.lineHeight)


// el.style.fontSize = `1000pt`
// console.log(headerSize)


window.addEventListener("load", (event) => {
    var header = document.querySelector("header");
    landingcontainer.style.marginTop = `${header.offsetHeight}px`;

});

function scaleValue(value, from, to) {
	var scale = (to[1] - to[0]) / (from[1] - from[0]);
	var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
	return ~~(capped * scale + to[0]);
}


document.addEventListener("scroll", (event) => {

  if (window.scrollY < 100) {
    adjustHeader()
  }
});


function adjustHeader() {
    var headerlineheight = scaleValue(window.scrollY, [0,100], [80,25]);

    yPos = window.scrollY / 3;

    newSize = headerSize - yPos;

    headerSize = parseInt(headerSize, 10)

    fontSize = `${newSize}px`;

    el.style.fontSize = `${newSize}px`

    el.style.lineHeight = `${headerlineheight}px`

    var header = document.querySelector("header");

    landingcontainer.style.marginTop = `${header.offsetHeight}px`;
    // console.log(landingcontainer.style.marginTop);
    // console.log(`${header.offsetHeight}px`);
    // console.log('adjusted');
}

    