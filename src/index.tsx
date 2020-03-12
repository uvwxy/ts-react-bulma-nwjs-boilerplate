// @ts-check
// above is for http://docs.nwjs.io/en/latest/For%20Users/FAQ/#how-do-i-get-intellisense-auto-complete-in-vscode-for-nw
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MyApp } from "./app/myapp";

declare const nw: any;

ReactDOM.render(<MyApp />, document.getElementById("app"));

if (process.env.NODE_ENV != "production") {

    const fs: typeof import("fs") = nw.require("fs");

    var path = './';
    fs.readdirSync("./", "utf-8").forEach((f: string) => console.log(f));
    console.log("App will reload on changes...");

    var reloadWatcher = fs.watch(path, function () {
        location.reload();
        reloadWatcher.close();
    });
}
