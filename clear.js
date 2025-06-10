function clearInput(){
    let input = document.getElementById("answerInput");
    input.value = "";
    
    let feedback = document.getElementById("feedback");
    feedback.innerHTML = "";

    let image = document.getElementById("image");
    image.src = "moon-bunny.png";
}
