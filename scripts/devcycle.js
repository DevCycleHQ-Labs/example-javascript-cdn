if (typeof DEVCYCLE_CLIENT_SDK_KEY === 'undefined') {
    alert("Please create a .env file and set the DEVCYCLE_CLIENT_SDK_KEY environment variable.");
} 

const user = {
    // Edit the user properties here to see how they interact with your feature targeting rules
    user_id: "user1",
    email: "firstuser@email.com",
};

const newUser = {
    // Try editing your feature's targeting rules in the Development environment to serve Variation Off to this user 
    // then click the "Identify New User" button to see the new user's experience
    // Note: targeting rules are evaluated from top to bottom, so the first rule that matches will be used
    user_id: "user2",
    email: "newuser@email.com",
};

// Initialize the DevCycle client with your SDK key and user
const devcycleOptions = { logLevel: "debug" };
const devcycleClient = DevCycle.initializeDevCycle(
    DEVCYCLE_CLIENT_SDK_KEY,
    user,
    devcycleOptions
);


devcycleClient.onClientInitialized().then(({ config }) => {
    console.log("DevCycle client initialized with configuration: ", config);
});

document.getElementById("identify").onclick = function () {
    devcycleClient.identifyUser(newUser).then(updateUI);
};

document.getElementById("reset").onclick = function () {
    devcycleClient.resetUser().then(updateUI);
};


// Use DevCycle variables to control the UI 
const updateUI = () => {
    document.getElementById("user").innerHTML = `Current User: ${devcycleClient.user?.email || "Anonymous User"}`;

    const value = devcycleClient.variableValue("greeting", "default");
    document.getElementById("greeting").innerHTML = value;

    const shouldSpin = devcycleClient.variableValue("spin-logo", false);
    document.getElementById("logo").className = shouldSpin ? "spin" : "";
};


// Update the app when DevCycle receives updates from the dashboard
devcycleClient.subscribe('configUpdated', () => {
    updateUI();
});
