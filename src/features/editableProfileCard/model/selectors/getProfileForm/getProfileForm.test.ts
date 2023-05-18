import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";

const data = {
  username: "Dima",
  age: 25,
  country: Country.Russia,
  lastName: "Zamulin",
  firstName: "Dmitriy",
  city: "Samara",
  currency: Currency.RUB
};

describe("get profile form test", () => {
  test("get data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test("if state is undefined", () => {
    const state = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
