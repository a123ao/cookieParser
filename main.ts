import { CookieParams } from "./cookieParams.ts";

if (import.meta.main) {
    const params = new CookieParams("key1=value1; key2=value2; key3=value");

    if (params.has("session")) {
        console.log(params.get("session"));
    }

    const copy = params.copy();

    params.set("newKey", "newValue");

    console.log(params);
    console.log(copy);
}