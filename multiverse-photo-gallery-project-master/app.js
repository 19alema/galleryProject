// const image = document.querySelector(".img");
// const img = document.getElementsByTagName('.single-image');
// const photo = [
//     [img.src = "assets/images/01.jpg"],
//     [img.src = "assets/images/02.jpg"],
//     [img.src = "assets/images/03.jpg"],
//     [img.src = "assets/images/04.jpg"],
//     [img.src = "assets/images/05.jpg"],
//     [img.src = "assets/images/05.jpg"],
//     [img.src = "assets/images/07.jpg"],
//     [img.src = "assets/images/08.jpg"],
//     [img.src = "assets/images/09.jpg"],
//     [img.src = "assets/images/10.jpg"],
//     [img.src = "assets/images/11.jpg"],
//     [img.src = "assets/images/12.jpg"]
// ];

// const close = document.querySelector(".close")


// const sec = document.getElementsByTagName('section');

// img.addEventListener('click', function () {
//     photo[i]
// })

// close.onload = function () {
//      img.style.display = "none";
// }
const img = document.querySelectorAll('img')
const display = document.querySelector('.single-image');
const main = document.getElementsByTagName('section');
const modal = document.querySelector('.modal');

   for(let i = 0; i < img.length; i++) {
       img[i].addEventListener('click', function () {
        
            if (display.style.display === "block") {
                main.style.display ="none"
            } else {
                  
            }

      
    })
}
