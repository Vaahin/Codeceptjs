Feature("headerMenu");

Before(async I => {
  I.amOnPage("/");
});

Scenario("Header Menu", homePage => {
  homePage.clickDropdown("Helpers");
});
