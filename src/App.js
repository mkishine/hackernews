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

const isSearched = (query) => (item) => !query || item.title.indexOf(query) !== -1;

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
                <Search value={query} onChange={this.onSearchChange}>
                    Filter items by entering a search pattern:
                </Search>
                <Table list={list} pattern={query}/>
            </div>
        );
    }
}

class Search extends Component {
    render() {
        const {value, onChange, children} = this.props;
        return (
            <form>
                {children} <input type="text" value={value} onChange={onChange}/>
            </form>
        );
    }
}

class Table extends Component {
    render() {
        const {list, pattern} = this.props;
        return (
            <div>
                {list.filter(isSearched(pattern)).map(item =>
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
