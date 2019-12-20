import React, { component, Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render(error, info) {
    if (this.state.hasError) {
      return <h1>Oops. That is no good.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
