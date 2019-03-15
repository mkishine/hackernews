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

const isSearched = (query) => (item) => !query|| item.title.indexOf(query) !== -1;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list,
            query: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({query: event.target.value});
    }
    render() {
        const {query, list} = this.state;
        return (
            <div className="App">
                <form>
                    <input type="text" value={query} onChange={this.onSearchChange}/>
                </form>
                {list.filter(isSearched(query)).map(item =>
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
