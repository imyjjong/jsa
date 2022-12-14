const myImage = document.getElementById('myImage');

let paintings = ["images/vangogh.jpeg", "images/starrynight.jpeg", "images/sunflowers.jpeg"]


function changeImage(index){
    myImage.src = paintings[index];
}
