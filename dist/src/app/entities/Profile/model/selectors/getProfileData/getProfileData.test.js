import { Country } from "app/entities/Country";
import { Currency } from "app/entities/Currency";
import { getProfileData } from "./getProfileData";
var data = {
    username: "Dima",
    age: 25,
    country: Country.Russia,
    lastName: "Zamulin",
    firstName: "Dmitriy",
    city: "Samara",
    currency: Currency.RUB,
};
describe("get profile data test", function () {
    test("get data", function () {
        var state = {
            profile: {
                data: data,
            },
        };
        expect(getProfileData(state)).toEqual(data);
    });
    test("if state is undefined", function () {
        var state = {};
        expect(getProfileData(state)).toBe(undefined);
    });
});
