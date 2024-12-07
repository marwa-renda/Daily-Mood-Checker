
function checkMood() {
    let name = document.getElementById("name").value.trim();
    let mood = document.getElementById("mood").value.trim().toLowerCase();


    let message;


    if (mood === "happy") {
        message = `Hello ${name}, it's great to see you're happy! Keep smiling! 😊`;
    } else if (mood === "sad") {
        message = `Hey ${name}, it's okay to feel sad sometimes. Better days are coming! 💙`;
    } else if (mood === "excited") {
        message = `Wow ${name}, excitement looks good on you! Go have some fun! 🎉`;
    } else if (mood === "tired") {
        message = `${name}, take some rest and recharge! You deserve it. 😴`;
    } else {
        message = `Hello ${name}, whatever you're feeling, stay positive and enjoy your day! 🌟`;
    }


    document.getElementById("result").innerHTML = message;
}
