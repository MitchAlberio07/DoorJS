function openDoor(){
    document.getElementById("Image").src = "crying-removebg-preview.png";
    document.getElementById("bossBaby").innerHTML = "Feed Boss Baby";
    document.getElementById('mp3-crying').play();
}
function closeDoor(){
    document.getElementById("Image").src = "okay-removebg-preview.png";
    document.getElementById("bossBaby").innerHTML = "Yeheyy!";
    document.getElementById('mp3-crying').pause();
    document.getElementById('mp3-full').play();
}