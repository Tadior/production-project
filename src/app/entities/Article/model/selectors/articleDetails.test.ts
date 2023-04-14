import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";

describe("get profile data test", () => {
  test("get data", () => {
    const data = {
      id: '1',
      title: 'title'
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test("if error", () => {
    const errorValue = 'Some error'
    const state = {
      articleDetails: {
        error: errorValue,
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual(errorValue);
  });
  test("if isLoading true", () => {
    const state = {
      articleDetails: {
        isLoading: true,
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test("if isLoading empty", () => {
    const state = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});