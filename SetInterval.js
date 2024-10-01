const intervalId = setInterval(() => {
    console.log("This message is logged every second.");
}, 5000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared.");
}, 10000); // Stops the interval after 5 seconds.