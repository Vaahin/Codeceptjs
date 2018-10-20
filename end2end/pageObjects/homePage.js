const I = actor();
module.exports = {
  dropdown: {
    xpath: "(//a[contains(text(),'Helpers')])[2]"
  },
  clickDropdown(dropdown) {
    I.retry(3).waitForElement(
      "xpath: (//a[contains(text(),'" + dropdown + "')])[2]",
      5
    );
    I.click("xpath: (//a[contains(text(),'" + dropdown + "')])[2]");
  }
};
