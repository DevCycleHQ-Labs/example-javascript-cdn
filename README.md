# DevCycle JavaScript CDN Example App

An example app built using the [DevCycle JavaScript CDN](https://docs.devcycle.com/sdk/client-side-sdks/javascript/)


## Creating a Demo Feature
This example app is designed to have 3 different experiences: one for `user-1`, one for `user-2`, and the default experience for all other users. This requires that your project has a feature with the expected variables, as well as some simple targeting rules. To set up that feature:

* [Create a new Release feature](https://docs.devcycle.com/introduction/quickstart#2-create-a-feature) on the DevCycle dashboard and add the following variables:
   * A string variable with the key `togglebot-greeting`
        * Set this to a different greeting message for each of your variations.
   * A boolean variable with the key `togglebot-wink`
        * Set this to `true` in one variation and `false` in the other.
   * A string variable with the key `togglebot-speed`
        * Set this to `fast` in one variation, and `off` in the other
* Create the following [targeting rules](https://docs.devcycle.com/essentials/targeting) in your Development environment:
    * A rule targeting the user with `User ID` `is` `user-1` 
        * Target this user with your first variation
    * A rule targeting the user with `User ID` `is` `user-2`
        *  Target this user with the other variation

Now when you run the example app and switch your identity between these users, you'll be able to see the different variations.


## Running the example

* Create a `.env` file and set `DEVCYCLE_CLIENT_SDK_KEY` to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).
* Open `main.html` in a browser
* Open Developer Tools to see debug logs from the DevCycle client 

If you added user targeting to your feature, update the user objects in `devcycle.js` based on your targeting rules.


## Testing

* For examples of mocking and testing with DevCycle, see the test suite in the [DevCycle JS Module Example](https://github.com/DevCycleHQ-Sandbox/example-javascript/blob/main/src/devcycle.test.js) 
