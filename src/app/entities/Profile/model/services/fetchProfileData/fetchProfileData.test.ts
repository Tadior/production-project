import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "app/entities/Country";
import { Currency } from "app/entities/Currency";
import { fetchProfileData } from "./fetchProfileData";

const data = {
  username: "Dima",
  age: 25,
  country: Country.Russia,
  lastName: "Zamulin",
  firstName: "Dmitriy",
  city: "Samara",
  currency: Currency.RUB,
};

describe("fetch profile data tests", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
