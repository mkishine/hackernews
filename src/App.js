import React, {Component} from 'react';
import './App.css';

const list = [
    {
        title: 'React',
        author: 'Jordan Wake',
        url: 'https://facebook.github.io/react/',
        objectId: 1
    },
    {
        title: 'Redux',
        author: 'Dan Abramov',
        url: 'https://github.com/reactjs/redux',
        objectId: 2
    },
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list
        };
    }

    render() {
        return (
            <div className="App">
                {this.state.list.map(item =>
                    <div key={item.objectId}>
                        <span><a href={item.url}>{item.title}</a></span>
                        <span>{item.author}</span>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
