# DevCycle JavaScript CDN Example App

An example app built using the [DevCycle JavaScript CDN](https://docs.devcycle.com/sdk/client-side-sdks/javascript/)


## Creating a Demo Feature
This example app requires that your project has a feature with the expected variables, as well as some simple targeting rules. 

#### ⇨ [Click here](https://app.devcycle.com/r/create?resource=feature&key=hello-togglebot) to automatically create the feature in your project ⇦

When you run the example app and switch your identity between users, you'll be able to see the feature's different variations.

## Running the Example
### Setup

Create a `.env` file and set `DEVCYCLE_CLIENT_SDK_KEY` to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).

### Development

`npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### Testing

For examples of mocking and testing with DevCycle, see the test suite in the [DevCycle JS Module Example](https://github.com/DevCycleHQ-Sandbox/example-javascript/blob/main/src/devcycle.test.js) 
