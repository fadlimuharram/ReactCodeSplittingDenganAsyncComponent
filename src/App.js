import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Page1 from "./components/Page1";
// import AsyncComponent from "./components/AsyncComponent";

class App extends Component {
  state = {
    route: "page1"
  };

  onRouteChange = route => {
    this.setState({ route });
  };

  render() {
    const { route } = this.state;
    const Page2 = React.lazy(() => import("./components/Page2"));
    const Page3 = React.lazy(() => import("./components/Page3"));
    if (route === "page1") {
      return <Page1 onRouteChange={this.onRouteChange} />;
    } else if (route === "page2") {
      // const AsyncPage2 = AsyncComponent(() => import("./components/Page2"));
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Page2 onRouteChange={this.onRouteChange} />
        </React.Suspense>
      );
    } else if (route === "page3") {
      // const AsyncPage3 = AsyncComponent(() => import("./components/Page3"));
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Page3 onRouteChange={this.onRouteChange} />
        </React.Suspense>
      );
    }
  }
}

export default App;
