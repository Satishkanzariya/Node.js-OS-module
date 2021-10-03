const os = require('os');
try {
 
    console.log("OS CPU architecture: " + os.arch());
    console.log("Free memory of the system: " + os.freemem());
    console.log("Total memory of the system: " + os.totalmem());
    console.log("OS Platform: " + os.type());
    console.log("Information about the current user: " + os.userInfo());
} catch (err) {
    console.log(": error occurred" + err);
}





