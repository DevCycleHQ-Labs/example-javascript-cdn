const updateUI = require('./updateUI.js')

// Create DevCycle client and set up event listeners
const setUpDevCycle = () => {
    if (typeof process.env.DEVCYCLE_CLIENT_SDK_KEY === 'undefined') {
        alert('Set your DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle JavaScript SDK.')
    }
    
    // Initialize the DevCycle client with your SDK key and user
    const devcycleOptions = { logLevel: "debug" };
    const devcycleClient = DevCycle.initializeDevCycle(
        process.env.DEVCYCLE_CLIENT_SDK_KEY,
        // Edit the user properties to see how they interact with your feature targeting rules
        {
            user_id: 'user-1',
            name: 'User 1',
            email: 'user1@email.com'
        },
        devcycleOptions
    );

    // Update the app when DevCycle receives the first user config
    devcycleClient.onClientInitialized().then(({ config }) => {
        updateUI(devcycleClient);
    });

    // Update the app when DevCycle receives realtime updates from the dashboard
    devcycleClient.subscribe('configUpdated', () => {
        updateUI(devcycleClient);
    });
}

// You can use this function to change which user is identified. The new user will receive a different config, 
// depending on the user properties and your feature's targeting rules
const identifyNewUser = (devcycleClient) => {
    devcycleClient.identifyUser(users[1]).then(() => updateUI(devcycleClient));
}

module.exports = {
    setUpDevCycle,
    identifyNewUser
}