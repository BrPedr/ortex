import React, { useEffect } from "react";
import { auth } from "./firebase";
import * as te from "tradingeconomics";
import SignInPage from "./pages/Login";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  useEffect(() => {
    auth.signOut();
  }, []);

  useEffect(() => {
    let ws = new WebSocket(
      "ws://stream.tradingeconomics.com/?client=guest:guest"
    );

    ws.onopen = function () {
      console.log("SOCKET CONNECTED");
      ws.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
    };

    ws.onmessage = function (data) {
      console.log(data);
    };
  });

  return (
    <>
      <SignInPage />
      <GlobalStyles />
    </>
  );
}

export default App;
