let wrongInput = 0;
function checkAnswer() {
    let image = document.getElementById("image");
    let yesAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
        "As I see it, yes", "Most likely", "Outlook good yessir", "Yes", "Signs point to yes"];
    let noAnswers = ["Dont bet on it, please", "Let's see.... how about y- NO!", "My reply is no",
        "My sources say no", "Outlook not so good sir", "I already said it's very doubtful"];
    let maybeAnswers = ["Idk go ask ur pet", "Reply hazy, try again","Ask again later, please", "Better not tell you now...", "Oopies, Cannot predict now",
        "Concentrate and ask again"];
    let answer = [...yesAnswers, ...noAnswers, ...maybeAnswers]; //ChatGPT said that I didn't need to repeat the merge list and I can use ... to unpack the list that I already made
    let random_answer = answer[Math.floor(Math.random() * answer.length)] // ChatGPT helped with this part by showing me the pieces that I need (math.floor and math.random) for me to be able to randomize my answer from the list
    let check = ["is", "are", "would", "will", "can", "could", "do","does", "have", "may", "might", "has", "should",
        "must", "am", "did", "was", "were", "shall"]
    let input = document.getElementById("answerInput").value;
    let feedback = document.getElementById("feedback")
    let firstWord = input.trim().split(" ")[0]; //ChapGPT said that using trim() could trim the extra space just to make sure that the code still works is the user accidentally add spaces
    input1 = false;
    for (let word of check) {
        if (word === firstWord.toLowerCase()) {
            input1 = true;
            break;
        }
    }
    if (input1)
    {
        wrongInput = 0;
        feedback.innerHTML = random_answer
        if (yesAnswers.includes(random_answer)){
            image.src = "happy-shark.png";
        }
        else if (noAnswers.includes(random_answer)){
            image.src = "sad-shark.png";
        }
        else if (maybeAnswers.includes(random_answer)){
            image.src = "awkward-shark.png";
        }
        else {
            image.src = "moon-bunny.png";
        }
    }
    else
    {
        wrongInput++;
        feedback.innerHTML = "That's not a question I can answer";
        if (wrongInput % 3 === 0){ // ChatGPT helped me with modulo operator % would help detecct every 5th wrong input
            image.src = "very-angry-shark.png";
        }
        else {
            image.src = "angry-shark.png";
        }
    }
}

document.getElementById("button").addEventListener("click", checkAnswer);

document.getElementById("answerInput").addEventListener("keydown", function (enter) {
    if (enter.key === "Enter") {
        checkAnswer();
    }
});
