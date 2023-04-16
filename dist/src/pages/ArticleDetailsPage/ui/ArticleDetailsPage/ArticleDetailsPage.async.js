import { lazy } from "react";
export var ArticleDetailsPageAsync = lazy(function () {
    return new Promise(function (resolve) {
        // @ts-ignore
        setTimeout(function () { return resolve(import("./ArticleDetailsPage")); }, 1500);
    });
});
