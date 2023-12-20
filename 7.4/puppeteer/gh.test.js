let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("TASK 1. Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 160000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 160000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) =>
      link.textContent.trim()
    );
    expect(actual).toContain("Get started with Team");
  }, 160000);
});

describe("TASK 2. Three 3 new tests", () => {
  afterEach(() => {
    page.close();
  });

  test("Security Page Test", async () => {
    await page.goto("https://github.com/features/security");
    const title = await page.title();
    expect(title).toContain("Features · Security · GitHub");
  });

  test("Packages Page Title Test", async () => {
    await page.goto("https://github.com/features/packages");
    const mbSelector = ".color-fg-muted.h6-mktg.mb-1";
    await page.waitForSelector(mbSelector, {
      visible: true,
    });
    const actual = await page.$eval(mbSelector, (link) =>
      link.textContent.trim()
    );
    expect(actual).toContain("GitHub Packages");
  });

  test("Solutions for Enerprises Page Test", async () => {
    await page.goto("https://github.com/enterprise");
    const title = await page.title();
    expect(title).toContain("The AI Powered Developer Platform. · GitHub");
  });
});
