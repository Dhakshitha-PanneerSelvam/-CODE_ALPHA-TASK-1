const API_KEY = "DHAK_API_KEY";

async function translateText() {
  const text = document.getElementById("inputText").value;
  const source = document.getElementById("sourceLang").value;
  const target = document.getElementById("targetLang").value;

  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: text,
      source: source,
      target: target,
      format: "text"
    })
  });

  const data = await response.json();
  document.getElementById("outputText").innerText = data.data.translations[0].translatedText;
}

function copyText() {
  const output = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(output);
  alert("Translated text copied to clipboard!");
}

function speakText() {
  const text = document.getElementById("outputText").innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
