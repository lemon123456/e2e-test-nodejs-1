# e2e-test-nodejs

##Introduction
```bash
WebdriverIO + webdriverio-cucumber-js + chai

This project uses WebdriverIO not WDIO, start selenium-standalone manually. 
```

## Install
```bash
yarn install 

# To run your test locally, you'll need a local selenium server running, you can install and launch a selenium standalone server with chrome, firefox and phantomjs drivers via the following commands in a seperate terminal:

npm install selenium-standalone@latest -g --save
selenium-standalone install
selenium-standalone start
```

##Usage
```bash
Headless mode: 
node index.js -t @purchase headless
Non-headless mode 
node index.js -t @purchase
```


