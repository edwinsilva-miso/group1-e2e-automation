class MainPage {

    async clickUserMenu(driver){
        let element = await driver.$("div[class='flex-auto flex items-center']");
        await element.click();
    }

    async clickMyProfile(driver){
        let element = await driver.$('a[data-test-nav="user-profile"]');
        await element.click();
    }
  }

  module.exports = new MainPage();
