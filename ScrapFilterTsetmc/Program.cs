using System.Linq;
using HtmlAgilityPack;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace Program;

public class Program
{
  public static void Main(string[] args)
  {
    // Create a new ChromeDriver instance

    using (var driver = new ChromeDriver())
    {
      driver.Manage().Window.Maximize();
      driver.Navigate().GoToUrl("http://www.tsetmc.com/Loader.aspx?ParTree=15131F");
      var doc = new HtmlDocument();

      System.Console.WriteLine("Set your settings then press enter:");
      Console.ReadKey();

      doc.LoadHtml(driver.PageSource);
      var node = doc.DocumentNode.SelectNodes("//*[@id='main']")
                  .Select(x => x.ChildNodes.Select(x => x.ChildNodes[0].InnerText)).First().ToList();

      using (TextWriter tw = new StreamWriter("./SavedList.txt"))
      {
        foreach (String s in node)
          tw.WriteLine(s);
      }
    }



  }
}
