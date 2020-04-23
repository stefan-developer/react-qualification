import React from "react";
import renderer from "react-test-renderer";

import IGithubRepo from "../../../models/GithubRepo";

import List from "./List.component";

test("List renders as expected", () => {
  const data = [
    { name: "my" },
    { name: "github" },
    { name: "repo" },
    { name: "list" },
  ] as IGithubRepo[];

  const component = renderer.create(<List data={data} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
