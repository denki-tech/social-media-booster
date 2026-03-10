// Frontend application logic for Social Media Booster

// Importing necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Main application component
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            newPost: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({ newPost: event.target.value });
    };

    submitPost = () => {
        if (this.state.newPost) {
            this.setState(state => ({ 
                posts: [...state.posts, state.newPost],
                newPost: ''
            }));
        }
    };

    render() {
        return (
            <div className="app">
                <h1>Social Media Booster</h1>
                <input 
                    type="text" 
                    value={this.state.newPost} 
                    onChange={this.handleInputChange} 
                    placeholder="What's on your mind?" 
                />
                <button onClick={this.submitPost}>Post</button>
                <div className="posts">
                    <h2>Posts</h2>
                    <ul>
                        {this.state.posts.map((post, index) => (
                            <li key={index}>{post}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

// Rendering the application
ReactDOM.render(<App />, document.getElementById('root'));
