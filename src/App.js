import React, { Component } from 'react';
import PrintTypeFilter from './filter/PrintTypeFilter'
import BookTypeFilter from './filter/BookTypeFilter'
import Search from './search/Search'
import List from './list/List'

const api = "AIzaSyAuTdJx0CxCTevW9q7Ii04_hs3wjN6AFwI"
const url = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + api
console.log(url)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: "", 
      bookType: 'all',
      books: [],
      search: "",
    }
  }
  searchChange(search) {
    this.setState({
      search
    });
  }
  bookFilterChange(bookType) {
    this.setState({
      bookType
    });
  }
  printFilterChange(printType) {
    this.setState({
      printType
    });
  }
  handleSearch(e) {
    console.log("search started", this.state)
    e.preventDefault();
    const api = `&key=AIzaSyAuTdJx0CxCTevW9q7Ii04_hs3wjN6AFwI`
    const {printType, bookType, search} = this.state
    const print = `&filter=${printType}`
    const book = `&printType=${bookType}`
    const searchTerm = `q=${encodeURIComponent(search)}`
    const url = (print === '&filter=')
      ? "https://www.googleapis.com/books/v1/volumes?" + searchTerm + book + api
      : "https://www.googleapis.com/books/v1/volumes?" + searchTerm + print + book + api
    fetch(url) 
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        const books = Object.keys(data.items)
            .map(key => data.items[key]);
            console.log(books)
        this.setState({
          books,
          error: null
        })

      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
  }

  render() {
    const error = this.state.error
    ? <div className="error">{this.state.error}</div>
    : "";
    
  return (
    <main className='App'>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <section className="search">
        
        <Search 
          search={this.state.search}
          searchChange={search => this.searchChange(search)}
          handleSearch={searchSubmit => this.handleSearch(searchSubmit)}
        />
        <PrintTypeFilter
          filters={this.state.printType}
          printTypeChange={printType => this.printFilterChange(printType)}
        />
        <BookTypeFilter
          filters={this.state.bookType}
          bookTypeChange={bookType => this.bookFilterChange(bookType)}
        />
      </section>
      <section className="results">
        {error}
        
        <List 
          books={this.state.books}
        />
      </section>
      {/* content goes here */}
    </main>
  );
  }
}

export default App;