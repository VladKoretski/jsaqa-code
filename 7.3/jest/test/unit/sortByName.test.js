const sorting = require("../../app");

describe("Test 1. Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const books = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = sorting.sortByName(books);
    const result = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    expect(result).toEqual(expected);
  });
});

describe("Test 2. Books with the same names test suit", () => {
  it("Books with the same names should be kept unordered", () => {
    const books = ["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"];
    const expected = sorting.sortByName(books);
    const result = ["Гарри Поттер", "Гарри Поттер", "Гарри Поттер"];

    expect(result).toEqual(expected);
  });
});
