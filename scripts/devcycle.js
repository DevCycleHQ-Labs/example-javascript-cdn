// Edit the user properties here to see how they interact with your feature targeting rules
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
