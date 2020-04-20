import React from "react";

import { storiesOf } from "@storybook/react";

import List from "./List.component";

storiesOf("List", module).add("default", () => (
  <List data={["my", "github", "repo", "list"]} />
));
