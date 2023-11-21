const users = [
    {
        user_id: 'user-1',
        name: 'User 1',
        email: 'user1@email.com'
    },
    {
        user_id: 'user-2',
        name: 'User 2',
        email: 'user2@email.com'
    },
    {
        user_id: 'user-3',
        name: 'User 3',
        email: 'user3@email.com'
    }
]

// Create DevCycle client and set up event listeners
const setUpDevCycle = () => {
    if (typeof DEVCYCLE_CLIENT_SDK_KEY === 'undefined') {
        alert('Set your DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle JavaScript SDK.')
    }

    // Initialize the DevCycle client with your SDK key and user
    const devcycleOptions = { logLevel: "debug" };
    const devcycleClient = DevCycle.initializeDevCycle(
        DEVCYCLE_CLIENT_SDK_KEY,
        users[0], // identifying initial user as user-1
        devcycleOptions
    );

    setUpIdentifyDropdown(devcycleClient);
    document.getElementById("reset").onclick = () => {
        devcycleClient.resetUser().then(() => updateUI(devcycleClient));
        document.getElementById("identify").options[3].selected = true;
    };

    // Update the app when DevCycle receives the first user config
    devcycleClient.onClientInitialized().then(({ config }) => {
        updateUI(devcycleClient);
    });

    // Update the app when DevCycle receives realtime updates from the dashboard
    devcycleClient.subscribe('configUpdated', () => {
        updateUI(devcycleClient);
    });
}

const setUpIdentifyDropdown = (devcycleClient) => {
    const identifyDropdown = document.getElementById("identify");

    identifyDropdown.innerHTML = `
        ${users.map(user => (
         `<option key='${user.user_id}' value='${JSON.stringify(user)}'>${user.name}</option>`
        ))}
        <option key="anonymous" value='{}'>Anonymous User</option>
    `

    identifyDropdown.onchange = (event) => {
        devcycleClient.identifyUser(JSON.parse(event.target.value)).then(() => updateUI(devcycleClient));
    }
}

// Use DevCycle variables to control the UI 
const updateUI = (devcycleClient) => {
    const greeting = devcycleClient.variableValue('togglebot-greeting', 'Hello world!')
    const shouldWink = devcycleClient.variableValue('togglebot-wink', false)
    const spinSpeed = devcycleClient.variableValue('togglebot-speed', 'off')
    
    document.getElementById("greeting").innerHTML = greeting;
    const togglebot = document.getElementById("togglebot");
    togglebot.src = shouldWink ? "./images//togglebot-wink.png" : "./images/togglebot.png";

    togglebot.classList.remove("spin-slow", "spin-fast", "spin-super-fast", "spin-off");
    togglebot.classList.add(`spin-${spinSpeed}`);
};
