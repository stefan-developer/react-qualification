import React from "react";
import renderer from "react-test-renderer";

import Input from "./Input.component";

test("Input renders as expected", () => {
    const component = renderer.create(
        <Input placeholder="Test example" onChange={() => null} value="Test value" />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});