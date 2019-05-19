import React, { Component } from "react";
import { Utils } from "../../utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { withState } from "..";
import { UIState, AppRoute } from "../../../Services/UIState/UIState";
import { RouteListener } from "../RouteListener";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory, createMemoryHistory, History } from "history";

Enzyme.configure({ adapter: new Adapter() });

describe("RouteListener", () => {
  it("should correctly create HOC withState", () => {
    let result = 0;
    const t = mount(
      <div>
        <Router history={UIState.History}>
          <Route exact path={AppRoute.Home} component={() => { result = 1; return <div>0</div> }} />
          <Route path={AppRoute.Calendar} component={() => { result = 2; return <div>1</div> }} />
        </Router>
      </div>
    );
    expect(result).toEqual(1);
    UIState.RouterState.setState({ location: AppRoute.Calendar });
    expect(result).toEqual(2);
  });
});
