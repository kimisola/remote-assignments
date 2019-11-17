const message = document.getElementById("message");
const mainfooter = document.querySelector(".mainfooter");
const boxitemB = document.querySelectorAll(".box-itemB");



message.addEventListener("click", () => {
    message.innerHTML = "Have a Good Time!";
});

mainfooter.addEventListener("click", () => {
    for (var i=0; i<boxitemB.length; i++){

        if (boxitemB[i].style.display == 'block') {
        boxitemB[i].style.display = 'none';
        } else {
            boxitemB[i].style.display = 'block';

        }
    }
});  // 要用迴圈去access每個boxitemB
