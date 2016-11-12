import React from 'react';
import { render } from 'react-dom';
import styles from './styles/global.css';

class App extends React.Component{
  render(){
    return(<h1 className={styles.hello} >hello React</h1>)
  }
}

render( <App />, document.getElementById('app'))