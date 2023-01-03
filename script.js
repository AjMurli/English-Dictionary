const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("searchBtn");
let audion;


btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url} ${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
            <h3>${inpWord}</h3>
         
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p>${data[0].phonetic}</p>
        </div>
        <p class="wordMeaning">
      ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="wordExample">
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
            audion = new Audio(data[0].phonetics[0].audio);
        }).catch(() => {
            result.innerHTML = `<p class="error">Couldn't Find The Word <b> " ${inpWord} "</b>. Please,try to search for another word</p>`;
        })
});
btn.onclick = function () {
    setInterval(() => {
        sound.style.display = "block";
    }, 2500);
};

sound.addEventListener("click", () => {
    sound.style.color = "#00bbff";
    audion.play();
    setTimeout(() => {
        sound.style.color = "#00bbff";
    }, 1000);
});

/* <button>
<i class="fas fa-volume-up" id="sound"></i>
</button> */

