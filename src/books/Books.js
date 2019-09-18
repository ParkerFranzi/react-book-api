import React from 'react';

export default function Book(props) {
    const bookUrl = `https://books.google.com/books?id=${props.id}`
    const authors = (props.volumeInfo.authors === undefined)
        ? ""
        : (props.volumeInfo.authors.length > 1)
        ? <p>Authors: {props.volumeInfo.authors.join(', ')}</p>
        : <p>Author: {props.volumeInfo.authors}</p>
    const price = (props.saleInfo.listPrice === undefined)
        ? <p>{props.saleInfo.saleability}</p>
        : <p>Price: ${props.saleInfo.listPrice.amount.toFixed(2)}</p>
    const text = (props.searchInfo === undefined)
        ? <p>No description available</p>
        : <p>{props.searchInfo.textSnippet}</p>
    return (
        <div className="book">
            <h2 className="book-title">{props.volumeInfo.title}</h2>
            <div className="book-thumbnail">
                <a href={bookUrl} target="_blank" rel="noopener noreferrer"><img src={props.volumeInfo.imageLinks.thumbnail} alt="book-thumbnail"/></a>
            </div>
            <div className="book-info">
                {authors}
                {price}
                {text}
            </div>
            
        </div>
    )
}


