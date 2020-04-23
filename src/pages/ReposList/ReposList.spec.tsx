import React from "react";
import renderer from "react-test-renderer";
import IGithubRepo from "../../models/GithubRepo";
import ReposList, { filterGithubRepos } from "./ReposList.page";

test("ReposList renders as expected", () => {
  const component = renderer.create(<ReposList />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("filterGithubRepos function filter the githubRepo array based on search term value", () => {
  const data = [
    { name: "Stefan", html_url: "https://github.com/stefan-developer/react-qualification" },
    { name: "github", html_url: "http://test.com" },
    { name: "repo", html_url: "http://test.com" },
    { name: "Stefan FE", html_url: "https://github.com/stefan-developer/react-qualification" }
  ] as IGithubRepo[];

  const expectedResult: IGithubRepo[] = [
    {
      name: "Stefan",
      html_url: "https://github.com/stefan-developer/react-qualification",
    },
    {
      name: "Stefan FE",
      html_url: "https://github.com/stefan-developer/react-qualification",
    },
  ];

  const actualResult = filterGithubRepos(data, "Stefan");

  expect(actualResult).toEqual(expectedResult);
});
