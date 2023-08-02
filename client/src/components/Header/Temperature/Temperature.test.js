import React from "react";
import { shallow } from "enzyme";
import Temperature from "./Temperature";

describe("Temperature", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Temperature />);
    expect(wrapper).toMatchSnapshot();
  });
});
