const message = document.getElementById("message");
const mainfooter = document.querySelector(".mainfooter");
const boxContainer3 = document.querySelector(".box-boxContainer3");
const boxitemB = document.querySelectorAll(".box-itemB");



message.addEventListener("click", () => {
    message.innerHTML = "Have a Good Time!";
});

mainfooter.addEventListener("click", () => {
    mainfooter.style.color = "red";
});   //為什麼這傢伙不動作QAQ?

mainfooter.style.color = "red";