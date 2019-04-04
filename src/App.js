//React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Resources
import logo from './logo.svg';
import './App.css';
//Components
import PostList from './components/PostList';

class App extends Component {
  state = {
    posts: []
  }

  getPosts = () => {
    return fetch('https://michalakweb.000webhostapp.com/wp-json/wp/v2/posts')
      .then(response => response.json()).then(responseJSON => {
        this.setState(() => ({
          posts: responseJSON
        }));
      }).then(() => {
        // Render another component once the posts get fetched
        ReactDOM.render(<PostList posts={this.state.posts}/>, document.getElementById('root'));
      })
      .catch(error => console.log(error));
  }

  componentDidMount = () => {
    this.getPosts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Posts are being fetched...</p>
        </header>
      </div>
    );
  }
}

export default App;
