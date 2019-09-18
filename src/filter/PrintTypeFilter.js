import React, {Component} from 'react';
import './PrintTypeFilter.css'
/*

    filter=partial - Restrict results to volumes where at least part of the text are previewable.
    filter=full - Restrict results to volumes where all of the text is viewable.
    filter=free-ebooks - Restrict results to free Google eBooks.
    filter=paid-ebooks - Restrict results to Google eBooks with a price for purchase.
    filter=ebooks - Restrict results to Google eBooks, paid or free.Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines.
*/
class PrintTypeFilter extends Component {
    render() {
        return (
            <div className="printFilter">
            <form>
                <label htmlFor="printFilter">Print Type</label>
                <select
                    id="printType"
                    name="printType"
                    onChange={e => this.props.printTypeChange(e.target.value)}
                >
                    <option value="">No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free ebooks</option>
                    <option value="paid-ebooks">Paid ebooks</option>
                    <option value="ebooks">Ebooks</option>
                </select>
            </form>

        </div>
        )
    }
}

export default PrintTypeFilter