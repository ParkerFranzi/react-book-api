import React, {Component} from 'react';
import Book from '../books/Books'
import './List.css'

class List extends Component {
    
    render() {
        const books = this.props.books.map((book, i) => <Book { ...book } key={i} />)
        return (
            <div className="list">
                {books}
            </div>
        )
    }
}
List.defaultProps = {
    books: []
}
export default List