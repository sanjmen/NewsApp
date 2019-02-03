import React from 'react';
import DataSource from '../data/datasource';

/* https://reactjs.org/docs/higher-order-components.html */
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        error: null,
        isLoaded: false,
        data: []
      };
    }

    getData() {
      selectData(DataSource, this.props)
      .then(data => {
        this.setState({
          data: data,
          error: false,
          isLoaded: true
        })
      })
      .catch(e => {
        this.setState({
          error: e,
          isLoaded: true
        })
      });
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      this.getData();
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.getData();
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
}

export default withSubscription;