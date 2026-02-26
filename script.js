const Tanks = ["T-34E", "KV-1", "Tiger H1", "Panther F", "M4A3E2", "M26 Pershing"];
const Tank_Storage = JSON.stringify(Tanks);
localStorage.setItem("Tanks", Tank_Storage);
const Tank_Retrieve = localStorage.getItem("Tanks");
const Tank_Array = JSON.parse(Tank_Retrieve);
console.log(Tank_Array);

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", function() {
    window.location.href = "page.html";
});