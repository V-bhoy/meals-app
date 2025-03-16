import { AppRegistry } from "react-native";
import { registerRootComponent } from "expo";
// import {name as}
import App from "./App.js";

AppRegistry.registerComponent("main", () => App);
registerRootComponent(App);
