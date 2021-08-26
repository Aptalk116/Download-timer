// Donload Timer
const downloadBtn = document.querySelector(".flsdlbtn");
const countdown = document.querySelector(".countdown");
const loadingText = document.querySelector(".lodingtxt");
const DownloadLink = document.querySelector(".dllink");

var timeLeft = 10; // Change Countdown time

downloadBtn.addEventListener("click", () => {
  downloadBtn.style.display = "none";
  countdown.innerHTML = "Download link generating in <span>" + timeLeft + "</span> seconds."; //for quick start of countdown

  var downloadTimer = setInterval(function timeCount(){
    timeLeft -= 1;
    countdown.innerHTML = "Download link generating in <span>" + timeLeft + "</span> seconds.";

    if(timeLeft <= 0){
      clearInterval(downloadTimer);
      loadingText.style.display = "block";

      setTimeout(() => {
        loadingText.style.display = "none";
        DownloadLink.style.display = "block";
      }, 1000);
    }
  }, 1000);
});
