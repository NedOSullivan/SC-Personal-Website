var pictureIndex = 0; 

function changeImage(n) { 
    var i; 
    var pictures = document.getElementsByClassName("images"); 
     for (i=0; i < pictures.length; i++) { 
        pictures[i].style.display = "none"; 
    }
    pictureIndex++; 
    if (pictureIndex > pictures.length) {pictureIndex = 1} 
    pictures[pictureIndex-1].style.display = "block"; 
}

setInterval(changeImage, 4000); 

document.addEventListener('keydown', function(event) { 
    if(event.key == "ArrowLeft") { 
        changeImage(-1)
    }
    else if(event.key == "ArrowRight") { 
        changeImage(1)
    }
});
