import { lazy } from "react";
export var LoginFormAsync = lazy(function () {
    return new Promise(function (resolve) {
        // @ts-ignore
        setTimeout(function () { return resolve(import("./LoginForm")); }, 1500);
    });
});
