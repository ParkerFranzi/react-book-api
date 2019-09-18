import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={this.props.search}
                    onChange={e => this.props.searchChange(e.target.value)}
                />
                <button type="submit" onClick={e => this.props.handleSearch(e)}>Search</button>
            </div>
        )
    }
}

export default Search