import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "./articleDetails";
describe("get profile data test", function () {
    test("get data", function () {
        var data = {
            id: '1',
            title: 'title'
        };
        var state = {
            articleDetails: {
                data: data,
            },
        };
        expect(getArticleDetailsData(state)).toEqual(data);
    });
    test("if error", function () {
        var errorValue = 'Some error';
        var state = {
            articleDetails: {
                error: errorValue,
            }
        };
        expect(getArticleDetailsError(state)).toEqual(errorValue);
    });
    test("if isLoading true", function () {
        var state = {
            articleDetails: {
                isLoading: true,
            }
        };
        expect(getArticleDetailsIsLoading(state)).toEqual(true);
    });
    test("if isLoading empty", function () {
        var state = {};
        expect(getArticleDetailsIsLoading(state)).toEqual(false);
    });
});
