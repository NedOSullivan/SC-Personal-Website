var pictureIndex = 0; 

//Image Carousel

function changeImage(n) { 
    var i; 
    var pictures = document.getElementsByClassName("images"); 
     for (i=0; i < pictures.length; i++) { 
        pictures[i].style.display = "none"; 
    }
    pictureIndex++; 
    if (pictureIndex > pictures.length) {pictureIndex = 1} 
    pictures[pictureIndex-1].style.display = "block"; 
    var myTimer = setInterval(changeImage, 3000, 1); //added in lines here but not working and introduced bugs
    var pausePlayBtn = document.getElementById("pause-play-timer");
    if (pausePlayBtn.classList.contains("play-timer")) {
    clearInterval(myTimer);
    myTimer = setInterval(changeImage, 3000, 1);
}
}

//Change Image Every 4000ms

setInterval(changeImage, 4000); 

//Keyboard Arrow Key Functionality

document.addEventListener('keydown', function(event) { 
    if(event.key == "ArrowLeft") { 
        changeImage(-1)
    }
    else if(event.key == "ArrowRight") { 
        changeImage(1)
    }
});

function pausePlayTimer() { //added in this function but has caused bugs
clearInterval(myTimer);
var pausePlayBtn = document.getElementById("pause-play-timer");
pausePlayBtn.classList.toggle("play-timer");
pausePlayBtn.classList.contains("play-timer") ? myTimer = setInterval(changeImage, 3000, 1) : clearInterval(myTimer);
pausePlayBtn.classList.contains("play-timer") ? pausePlayBtn.innerHTML = "&#9646;&#9646;" : pausePlayBtn.innerHTML = "&#9654;";
}





