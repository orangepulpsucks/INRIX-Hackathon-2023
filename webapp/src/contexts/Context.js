import react, { createContext, Component } from 'react';

export const visibleContext = createContext();

class visContextProvider extends Component {
  state = {
    visible: false
  }
  render() {
    return(
      <visibleContext.Provider value={{...this.state}}>
        {this.props.children}
      </visibleContext.Provider>
     );
  }
}

export default visContextProvider;