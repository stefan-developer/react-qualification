import React from "react";

import { storiesOf } from "@storybook/react";

import List from "./List.component";
import IGithubRepo from "../../../models/GithubRepo";

const data = [
  { name: "my" },
  { name: "github" },
  { name: "repo" },
  { name: "list" },
] as IGithubRepo[];

storiesOf("List", module).add("default", () => (
  <List data={data} />
));
