# DevCycle JavaScript CDN Example App

An example app built using the [DevCycle JavaScript CDN](https://docs.devcycle.com/sdk/client-side-sdks/javascript/)

## Getting Started

* Create a `.env` file and set `DEVCYCLE_CLIENT_SDK_KEY` to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard. [Learn more about environments](https://docs.devcycle.com/essentials/environments).
* [Create a new feature](https://docs.devcycle.com/introduction/quickstart#2-create-a-feature) on the dashboard with a string variable named `greeting` and a boolean variable named `spin-logo`

## Running the example

* Open `main.html` in a browser
* Open Developer Tools to see debug logs from the DevCycle client 
* If you added user targeting to your feature, update the user object in `devcycle.js` based on your targeting rules.

