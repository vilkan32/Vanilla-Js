function stopwatch() {

    let startButton = document.getElementById('startBtn');

    startButton.addEventListener('click', startCount);

    let stopButton = document.getElementById('stopBtn');

    stopButton.addEventListener('click', restart);
    function restart() {

        clearInterval(t);

        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function startCount() {
        document.getElementById('time').innerHTML = '00:00';
        let initialTime = Date.now();

        function checkTime() {
            let timeDifference = Date.now() - initialTime;
            let formatted = convertTime(timeDifference);
            document.getElementById('time').innerHTML = '' + formatted;
        }

        function convertTime(miliseconds) {
            let totalSeconds = Math.floor(miliseconds / 1000);
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds - minutes * 60;
            if (minutes <= 9 && seconds > 9) {
                return '0' + minutes + ':' + seconds
            } else if (seconds <= 9 && minutes <= 9) {
                return '0' + minutes + ':' + '0' + seconds
            } else if (seconds > 9 && minutes <= 9) {
                return '0' + minutes + ':' + seconds
            } else {
                return minutes + ':' + seconds;
            }


        }

       t = setInterval(checkTime, 1000);

        startButton.setAttribute('disabled', 'true');
        stopButton.disabled = false;

    }

}