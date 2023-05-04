import { Country } from "app/entities/Country";
import { Currency } from "app/entities/Currency";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";

const data = {
  username: "Dima",
  age: 25,
  country: Country.Russia,
  lastName: "Zamulin",
  firstName: "Dmitriy",
  city: "Samara",
  currency: Currency.RUB,
};

describe("get profile data test", () => {
  test("get data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("if state is undefined", () => {
    const state = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
