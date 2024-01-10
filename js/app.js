let nav = document.querySelector ('.header__nav')
let navToggle = document.querySelector ('.navToggle')

navToggle.addEventListener ('click', function () {
    nav.classList.toggle ('header__show')
})

let header = document.querySelector ('.header')

window.addEventListener ('scroll', function () {
    let showScroll = scrollY

    if (showScroll > 740) {
        header.classList.add ('header__fixed')
    } else [
        header.classList.remove ('header__fixed')
    ]

    console.log (showScroll)

})