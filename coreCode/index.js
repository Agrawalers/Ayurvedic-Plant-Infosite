const sub_AlertBtn = document.getElementById("sub_Alert");
sub_AlertBtn.addEventListener("click", ()=>{
    alert("You clicked the button");
});


// quiz
const Dailyquiz = document.getElementById("Dailyquiz");
Dailyquiz.addEventListener("click" , (e)=>{
    window.open("quiz.html", "_blank");
})

// search btn
document.getElementById('btnId').addEventListener('click', function() {
    alert("hellp");
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});
function closePopup() {
    // Hide popup and overlay
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}