import { Country } from "app/entities/Country";
import { Currency } from "app/entities/Currency";
import { getProfileForm } from "./getProfileForm";
var data = {
    username: "Dima",
    age: 25,
    country: Country.Russia,
    lastName: "Zamulin",
    firstName: "Dmitriy",
    city: "Samara",
    currency: Currency.RUB,
};
describe("get profile form test", function () {
    test("get data", function () {
        var state = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state)).toEqual(data);
    });
    test("if state is undefined", function () {
        var state = {};
        expect(getProfileForm(state)).toBe(undefined);
    });
});
