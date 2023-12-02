const expect = require("chai").expect;

class ProfilePage {

    async enterLocation(driver, location) {

        let element = await driver.$(
            "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/div/input"
          );
        
          return await element.clearValue().then(() => {
            return element.setValue(location);
          });
    }

    async checkLocation(driver, message){

        let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[1]/span");
          let text = await element.getText();
          expect(element).to.not.equal(null);
          expect(text).to.contain(message);
    }

    async clickSaveAndClose(driver){

        let element = await driver.$('//span[text()="Save & close"]');
        element.click();
    }

    async enterWebsite(driver, website){

        let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[2]/div/input");
      
        const oldValue = await element.getValue();
        if (oldValue) {
          const backspaces = new Array(oldValue.length).fill("Backspace");
          await element.setValue(backspaces);
        }
      
        await element.setValue(website);
    }

    async checkWebsite(driver, message){

      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[2]/span");
      let text = await element.getText();
      expect(element).to.not.equal(null);
      expect(text).to.contain(message);
    }

    async checkWebsiteNotCorrect(driver, message){
      let text = await driver.$("#admin-x-settings > div:nth-child(1) > div > div");
  
      expect(text).to.not.equal(null);
    }

    async enterName(driver, name){
      
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[1]/div/input");
      const oldValue = await element.getValue();
      if (oldValue) {
        const backspaces = new Array(oldValue.length).fill("Backspace");
        await element.setValue(backspaces);
      }
      return await element.setValue(name);
    }

    async checkName(driver, message){
      
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[1]/span");
    
      let text = await element.getText();
      expect(element).to.not.equal(null);
      expect(text).to.contain(message);
    }

    async enterEmail(driver, email){

      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[2]/div/input");
      const oldValue = await element.getValue();
      if (oldValue) {
        const backspaces = new Array(oldValue.length).fill("Backspace");
        await element.setValue(backspaces);
      }
      return await element.setValue(email);
    }

    async checkEmail(driver, message){

      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[2]/span");
    
      let text = await element.getText();
      expect(element).to.not.equal(null);
      expect(text).to.contain(message);
    }

    async enterFaceookUrl(driver, url){
      
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[3]/div/input");
      const oldValue = await element.getValue();
      if (oldValue) {
        const backspaces = new Array(oldValue.length).fill("Backspace");
        await element.setValue(backspaces);
      }
      return await element.setValue(url);
    }

    async checkFacebookUrl(driver, message){
      
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[3]/span");
    
      let text = await element.getText();
      expect(element).to.not.equal(null);
      expect(text).to.contain(message);
    }


    async checkFacebookUrlIsNotCorrect (driver, message) {
      
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[3]/span");
  
      let text = await element.getText();
      expect(element).to.not.equal(null);
      expect(text).to.contain(message);
    }

    async enterTwitter (driver, url) {
      
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[4]/div/input");
      const oldValue = await element.getValue();
      if (oldValue) {
        const backspaces = new Array(oldValue.length).fill("Backspace");
        await element.setValue(backspaces);
      }
      return await element.setValue(url);
    }
    
    async checkTwitterUrl (driver, message) {
      let element = await driver.$(
        "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[4]/span"
      );
    
      let text = await element.getText();
      expect(element).to.not.equal(null);
      expect(text).to.contain(message);
    }
    
    async checkTwitterUrlIsNotCorrect (driver, message) {
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[4]/span"
        );
    
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }

    async enterBio (driver, bio) {
       
      let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[5]/textarea"
        );
        const oldValue = await element.getValue();
        if (oldValue) {
          const backspaces = new Array(oldValue.length).fill("Backspace");
          await element.setValue(backspaces);
        }
        return await element.setValue(bio);
      }
      
    async checkBio (driver, message) {
        
      let element = await driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[5]/span");
      
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }
      
    async checkBioIsNotCorrect (driver, message) {
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[2]/div[1]/div[2]/div[5]/span"
        );
      
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }
      
    async enterSlug (driver, bio) {

        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[3]/div/input"
        );
        const oldValue = await element.getValue();
        if (oldValue) {
          const backspaces = new Array(oldValue.length).fill("Backspace");
          await element.setValue(backspaces);
        }
        return await element.setValue(bio);
      }

      async slugCorrect (driver, message) {
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[1]/div[2]/div[3]/span"
        );
      
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }

      async changePassword (driver) {

        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/button/span"
        );
        element.click();;
      }
      
      async changeOldPassword (driver, password) {

        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[2]/div/input"
        );
        await element.setValue(password);;
      }

      async newPassword (driver, password) {
        
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[3]/div/input"
        );
        await element.setValue(password);
      }
      
      async verifyPassword (driver, password) {
          let element = await driver.$(
            "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[4]/div/input"
          );
          return await element.setValue(password);
        }
      
      async getErrorMessageOne (driver, message) {
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[2]/span"
        );
      
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }
      
      async getErrorMessageTwo (driver, message) {
        
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[3]/span"
        );
      
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }
      
      async getErrorMessageThree (driver, message) {
        let element = await driver.$(
          "/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div[1]/div/div[2]/div[4]/div[4]/span"
        );
      
        let text = await element.getText();
        expect(element).to.not.equal(null);
        expect(text).to.contain(message);
      }
  }

  module.exports = new ProfilePage();
