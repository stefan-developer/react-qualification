import React from "react";

import { storiesOf } from "@storybook/react";

import Page from "./Page.component";

storiesOf("Page", module).add("default", () => (
  <Page>
    <p>This is page wrapper for different content presentation.</p>
  </Page>
));
