import React from "react";
import Platform from "nuc-platform-vite/index";

import theme from "./config/theme";
import routes from "./config/routes";
import config from "./config/config";

export function App() {
  return <Platform theme={theme} routes={routes} />;
}
