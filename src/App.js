import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            currentEvent: '---'
        }

        this.updateState = this.updateState.bind(this)
    }
    update(e){
        this.setState({txt: e.target.value})
    }

    updateState(e){
        this.setState({currentEvent: e.type})
    }

    render(){
        return (
            <div>
              <Title text="This is the Title" />
              <h1>{this.state.txt}</h1>
              <Widget update={this.update.bind(this)} />
              <Widget update={this.update.bind(this)} />
              <Widget update={this.update.bind(this)} />
              <Button>I <Heart /> React</Button>
              <br/>
              <textarea
                  onKeyPress={this.updateState}
                  onCopy={this.updateState}
                  onCut={this.updateState}
                  onPaste={this.updateState}
                  onFocus={this.updateState}
                  onBlur={this.updateState}
                  onDoubleClick={this.updateState}
                  onTouchStart={this.updateState}
                  onTouchMove={this.updateState}
                  onTouchEnd={this.updateState}
                  cols="30"
                  rows="10" />
              <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`)
        }
    }
}
const Button = (props) =>
    <button>{props.children}</button>


const Widget = (props) =>
    <input type="text" onChange={props.update}/>


App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "This is the default text"
}

export default App;
