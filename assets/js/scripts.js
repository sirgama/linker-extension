
let getStartedBtn = document.getElementById("start")

// Function to change content of the button when the mouse hovers over it

function hoverEffect(){
    getStartedBtn.textContent = "Let's do this!🦁"
}
function outEffect(){
    getStartedBtn.textContent = "Get started 🐥"
};

let savedLinks = [];
let saveBtn = document.getElementById("save");
let deleteBtn = document.getElementById("deleted");
let orderedList = document.getElementById("listitems");
let inputel = document.getElementById("inputData");
const RetrievedLinks = JSON.parse(localStorage.getItem("links"))
// localStorage.clear()
console.log(RetrievedLinks)
if (RetrievedLinks){
    savedLinks = RetrievedLinks
    renderData()
}

saveBtn.addEventListener("click", ()=>{
    
    savedLinks.push(inputel.value);
    inputel.value = "";
    localStorage.setItem("links", JSON.stringify(savedLinks));
    console.log(savedLinks);
    renderData();
})
deleteBtn.addEventListener("click", () => {
    localStorage.clear(RetrievedLinks)
    localStorage.clear()
    savedLinks = []
    orderedList.textContent = ""
})

function renderData(){
    let emojis = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁","🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
    let randomEmoji = Math.floor(Math.random()*emojis.length)
    
    let lists = ""
    for(let i = 0; i<savedLinks.length; i++){
        lists += `<a  href="${savedLinks[i]}" target="_blank"><li>${emojis[randomEmoji]} - ${savedLinks[i]}</li></a>`
    }
    orderedList.innerHTML=lists

}