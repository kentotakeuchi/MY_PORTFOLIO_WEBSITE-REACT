import React, { Component } from 'react';

// Create new context
export const MyContext = React.createContext()

// Then create a Provider Component
export class MyProvider extends Component {
  state = {
    darkMode: false
  }

  changeMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeMode: this.changeMode
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}