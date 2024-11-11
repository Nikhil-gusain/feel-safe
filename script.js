document.addEventListener('DOMContentLoaded', function() {
    var timer = document.getElementById('timer');

    function updateTimer() {
        var now = new Date(); // Get the current date and time
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Format the time to ensure two digits for hours, minutes, and seconds
        timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update the timer every 1000ms (1 second)
        setTimeout(updateTimer, 1000);
    }

    // Start the timer once the DOM is loaded
    updateTimer();
});
