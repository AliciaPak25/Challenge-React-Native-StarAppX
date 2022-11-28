import React from "react";
import { StatusBar } from "expo-status-bar"; //importación status bar de expo
import Main from "./src/components/Main";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Main />
    </>
  );
}
/* status bar en modo claro */
/* componente principal main */
