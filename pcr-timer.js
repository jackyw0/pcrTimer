let countdownInterval;
 let isPaused = false;
 let remainingTime = 0;

  function startTimer() {
    clearInterval(countdownInterval);

    const initialization = parseInt(document.getElementById('initialization').value);
    const cycles = parseInt(document.getElementById('cycles').value);
    const denaturation = parseInt(document.getElementById('denaturation').value);
    const annealing = parseInt(document.getElementById('annealing').value);
    const extension = parseInt(document.getElementById('extension').value);
      if (isPaused) {
      isPaused = false;
    }

    const totalTime =
      initialization + cycles * (denaturation + annealing + extension); 

    remainingTime = totalTime;
    countdownInterval = setInterval(() => {
      if (!isPaused) {
        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("display").textContent = "PCR is complete!";
          document.getElementById("pcrSound").play();
        } else {
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;
          document.getElementById("display").textContent =
            `Time Remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
          remainingTime--;
        }
      }
    }, 1000);
  }
  function pauseTimer() {
    isPaused = true;
  }

  function resumeTimer() {
    if (isPaused) {
      isPaused = false;
    }
  }
  function resetTimer() {
    clearInterval(countdownInterval);      
    remainingTime = 0;                     
    isPaused = false;                       
    document.getElementById("display").textContent = "Time Remaining: 0:00";
  }
  document.getElementById("display").textContent = "Time Remaining: 0:00";

