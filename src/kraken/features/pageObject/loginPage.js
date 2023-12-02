class LoginPage {

    async enterCredentials(driver, email, password) {
      console.log(email + "  " + password);
      
      const elementEmail = await driver.$('input[id="identification"]');
      await elementEmail.setValue(email);
  
      const elementPassword = await driver.$('input[id="password"]');
      await elementPassword.setValue(password);
    }

    async clickSignIn(driver){
        let element = await driver.$("#ember5");
        await element.click();
    }
  }

  module.exports = new LoginPage();
