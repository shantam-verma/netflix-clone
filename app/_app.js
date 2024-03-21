"use client";
import React from "react";
import { Provider } from "react-redux";
import appStore from "./lib/redux/appStore";

export default function AppProvider({ children }) {
  return <Provider store={appStore}>{children}</Provider>;
}
