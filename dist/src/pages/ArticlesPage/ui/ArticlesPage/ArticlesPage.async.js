import { lazy } from "react";
export var ArticlesPageAsync = lazy(function () {
    return new Promise(function (resolve) {
        // @ts-ignore
        setTimeout(function () { return resolve(import("./ArticlesPage")); }, 1500);
    });
});
