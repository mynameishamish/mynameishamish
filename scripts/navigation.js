const bodyTag = document.querySelector("body")
const wiper = document.createElement("div")
wiper.classList.add("wiper")
bodyTag.appendChild(wiper)
 
barba.init({
    debug: true,
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
    }
],
views: []
})






const headerTitle = document.getElementById("headerTitle");

var header = document.getElementById("header");
var headerSize = 50
headerTitle.style.fontSize = `${headerSize}pt`


document.addEventListener("scroll", (event) => {

  if (window.scrollY < 80) {

  yPos = window.scrollY / 3;
  newSize = headerSize - yPos;

  // console.log(newSize)

  fontSize = `${newSize}pt`;

  headerTitle.style.fontSize = `${newSize}pt`

  }

});

    