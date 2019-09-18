import React, {Component} from 'react';
import './BookTypeFilter.css'
/*

    printType=all - Return all volume content types (no restriction). This is the default.
    printType=books - Return just books.
    printType=magazines - Return just magazines.

*/
class BookTypeFilter extends Component {
    render() {
        return (
            <div className="bookFilter">
                <form>
                    <label htmlFor="bookFilter">Book Type</label>
                    <select
                        id="bookType"
                        name="bookType"
                        onChange={e => this.props.bookTypeChange(e.target.value)}
                    >
                        <option value="all">No Filter</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </form>

            </div>
        )
    }
}

export default BookTypeFilter