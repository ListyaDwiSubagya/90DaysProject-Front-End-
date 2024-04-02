const userText = document.getElementById("input-text");
const speechBtn = document.getElementById("speak");

speechBtn.addEventListener("click", function () {
  speechText = userText.value;
  let speechData = new SpeechSynthesisUtterance();
  speechData.text = speechText;
  speechSynthesis.speak(speechData);
});
