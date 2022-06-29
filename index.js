let sentence = ["Hello", "my", "name", "is", "Pavel"]
let greetingEl = document.getElementById("greeting-el")

for (let sent = 0; sent < sentence.length; sent++){
    greetingEl.textContent += sentence[sent] + " "
}
