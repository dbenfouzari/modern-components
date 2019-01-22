import { getMonth } from "./utils";

describe("Calendar utils", () => {
  describe("`getMonth` helper", () => {
    it("should return correct value", () => {
      const month = new Date(2019, 0, 1);

      const result = getMonth(month);
      const expectedResult = [
        [
          new Date(2018, 11, 31),
          new Date(2019, 0, 1),
          new Date(2019, 0, 2),
          new Date(2019, 0, 3),
          new Date(2019, 0, 4),
          new Date(2019, 0, 5),
          new Date(2019, 0, 6),
        ],
        [
          new Date(2019, 0, 7),
          new Date(2019, 0, 8),
          new Date(2019, 0, 9),
          new Date(2019, 0, 10),
          new Date(2019, 0, 11),
          new Date(2019, 0, 12),
          new Date(2019, 0, 13),
        ],
        [
          new Date(2019, 0, 14),
          new Date(2019, 0, 15),
          new Date(2019, 0, 16),
          new Date(2019, 0, 17),
          new Date(2019, 0, 18),
          new Date(2019, 0, 19),
          new Date(2019, 0, 20),
        ],
        [
          new Date(2019, 0, 21),
          new Date(2019, 0, 22),
          new Date(2019, 0, 23),
          new Date(2019, 0, 24),
          new Date(2019, 0, 25),
          new Date(2019, 0, 26),
          new Date(2019, 0, 27),
        ],
        [
          new Date(2019, 0, 28),
          new Date(2019, 0, 29),
          new Date(2019, 0, 30),
          new Date(2019, 0, 31),
          new Date(2019, 1, 1),
          new Date(2019, 1, 2),
          new Date(2019, 1, 3),
        ],
      ];

      expect(result).toEqual(expectedResult);
    });
  });
});
