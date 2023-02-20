const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const chai = require('chai');
const expect = require('chai').expect;

async function example(){
 
       var searchString = "Do code test with selenium and javascript";
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://todomvc-app-for-testing.surge.sh/");
            
        //To send a search query by passing the value in searchString.
        const isDisplayed = await driver.findElement(By.css("input.new-todo")).isDisplayed();
        expect(isDisplayed).to.be.true;
        await driver.findElement(By.css("input.new-todo")).sendKeys(searchString,Key.RETURN);
        const Text = await driver.findElement(By.css("div.view label")).getText();
        expect(Text).to.equal('Do code test with selenium and javascript');
        await driver.findElement(By.css("input.toggle")).click();
        var title = await driver.getTitle();
        expect(title).to.equal('TodoMVD');
 
        //Verify the page title and print it
        
        console.log('Title is:',title);
 
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
 
}

example()