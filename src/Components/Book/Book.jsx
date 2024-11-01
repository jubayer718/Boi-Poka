import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { yearOfPublishing, publisher, tags, category, rating, totalPages, image, author, bookName ,bookId} = book
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card card-compact bg-base-100 border-2 p-8">
      <figure className='p-6 rounded-2xl bg-gray-400'>
        <img className='h-56  object-cover'
          src={image}
          alt={bookName} />
      </figure>
      <div className=" py-3 space-y-4">
        <div className='flex justify-center gap-3'>
          {tags.map((tg,index) => <button key={index} className="btn btn-xs bg-green-100 text-green-500">{tg} </button>)}
        </div>
        <h2 className="text-lg font-bold text-nowrap">{bookName}</h2>
        <p className=' '>By: {author} </p>

        <div className="border-t-2 border-dashed">

        </div>
        <div className='flex items-center justify-between mt-4'>

          <button className="btn btn-sm">{category} </button>

            <div>
              <p>Page: {totalPages}</p>
              <p> Rating: { rating}</p>
</div>
          <button className="btn btn-sm">
            <div className="rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
            </div>
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;