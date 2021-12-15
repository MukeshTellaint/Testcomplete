dsghfhd

function SimpleTest_Sample()
{
  //This is a sample of what a keyword test looks like within TestComplete after a recording has been done. Please feel free to tinker with the steps and the values within them!
  //Test case: Search for an item on the website, add to cart, validate the price of the item, close the browser.
  //Click 'Run Test' above to execute this test.
  //This step opens a browser and navigates to a webpage
  //			
  Browsers.Item(btChrome).Run("https://services.smartbear.com/samples/TestComplete14/smartstore");
  //This step activates the search box
  Aliases.Browser.FrontPage.FrontPageSearchBox.Click();
  //This step searches for the product
  Aliases.Browser.FrontPage.FrontPageSearchBox.SetText("chronograph");
  //This step simulates a click on the search button
  Aliases.Browser.FrontPage.SearchButton.ClickButton();
  //This step selects a product on the search page
  //
  Aliases.Browser.SearchPage.FoundProduct.Click();
  //Pauses the script execution until the specified Web page is downloaded or until the specified time limit elapses.
  Aliases.Browser.ProductPage.Wait();
  //Checks whether the 'Visible' property of the Aliases.Browser.ProductPage.AddToCartButton object equals True.
  aqObject.CheckProperty(Aliases.Browser.ProductPage.AddToCartButton, "Visible", cmpEqual, true);
  //Simulates one or several keypresses.
  Aliases.Browser.ProductPage.panelContentWrapper.Keys("[Down][Down][Down][Down][Down]");
  //This step adds the selected product to the cart
  //
  //
  Aliases.Browser.ProductPage.AddToCartButton.ClickButton();
  //This step removes the product from the cart
  //
  Aliases.Browser.ProductPage.Cart.RemoveFromCartLink.ClickButton();
  //This step closes the current browser
  //
  Aliases.Browser.Close(30000);
}