const message = document.getElementById("message");
const mainfooter = document.querySelector(".mainfooter");
const boxitemB = document.querySelectorAll(".box-itemB");



message.addEventListener("click", () => {
    message.innerHTML = "Have a Good Time!";
});

mainfooter.addEventListener("click", () => {
    for (var i=0; i<boxitemB.length; i+=1){
        boxitemB[i].style.display = 'block';
        }
});  // 要用迴圈去access每個boxitemB
