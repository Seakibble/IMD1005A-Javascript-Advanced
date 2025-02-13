let $carousel = document.getElementById('carousel')

let index = 0
setInterval(() => {
    let $images = $carousel.children
    console.log($images)

    index++
    if (index >= $images.length) {
        index = 0
    }

    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            $images[i].classList.remove('hidden')
        } else {
            $images[i].classList.add('hidden')
        }
    }

    // for (let $image of $images) {
    // }
}, 5000)