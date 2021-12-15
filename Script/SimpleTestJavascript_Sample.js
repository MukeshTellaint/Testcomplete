//If you are interested in scripting, this is the SimpleTest_Sample test written in Javascript.

function Main() {
  OpenWebStore("https://services.smartbear.com/samples/TestComplete15/smartstore");
  
  FindProduct("Solar");
  AddToCart();
  VerifyProductPrice("969.0");
  RemoveFromCart();
  
  CloseBrowser();
}

function OpenWebStore(url) {
  //Launch the Internet Explorer and navigate to a webpage
  Browsers.Item(btIExplorer).Run(url); 
}

function FindProduct(productName) {
  Aliases.Browser.FrontPage.FrontPageSearchBox.SetText(productName);
  Aliases.Browser.FrontPage.SearchButton.ClickButton();
  Aliases.Browser.SearchPage.FoundProduct.Click();
}

function AddToCart() {
  //Wait until the web page is loaded completely to ensure the next click will be processed correctly by the web page
  Aliases.Browser.ProductPage.Wait();
  Aliases.Browser.ProductPage.AddToCartButton.ClickButton();
}

function VerifyProductPrice(price) {
  //Check that contentText property value contains the expected price
  aqObject.CheckProperty(Aliases.Browser.ProductPage.Cart.Subtotal, "contentText", cmpContains, price);
}

function RemoveFromCart() {
  Aliases.Browser.ProductPage.Cart.RemoveFromCartLink.ClickButton(); 
}

function CloseBrowser() {
  Aliases.Browser.Close();
}

function SimpleTest_Sample_1()
{
  //This is a sample of what a keyword test looks like within TestComplete after a recording has been done. Please feel free to tinker with the steps and the values within them!
  //Test case: Search for an item on the website, add to cart, validate the price of the item, close the browser.
  //Click 'Run Test' above to execute this test.
  Browsers.Item(btChrome).Run("https://services.smartbear.com/samples/TestComplete14/smartstore");
  Aliases.Browser.FrontPage.FrontPageSearchBox.Click();
  Aliases.Browser.FrontPage.FrontPageSearchBox.SetText("chronograph");
  Aliases.Browser.FrontPage.SearchButton.ClickButton();
  Aliases.Browser.SearchPage.FoundProduct.Click();
  Aliases.Browser.ProductPage.Wait();
  aqObject.CheckProperty(Aliases.Browser.ProductPage.AddToCartButton, "Visible", cmpEqual, true);
  Aliases.Browser.ProductPage.AddToCartButton.ClickButton();
  aqObject.CheckProperty(Aliases.Browser.ProductPage.Cart.Subtotal, "contentText", cmpEqual, "$24,110.00 excl tax");
  Aliases.Browser.ProductPage.Cart.RemoveFromCartLink.ClickButton();
  Aliases.Browser.Close(30000);
}