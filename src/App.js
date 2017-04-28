import React from 'react';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;
    return (
      <div className="App">
        <div className="App-header">
          <h2>{txt}</h2>
          <bold>{cat}</bold>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "This is the default text"
}

export default App;
