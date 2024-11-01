import React from 'react';

const Book = ({ book }) => {
  const {yearOfPublishing,publisher,tags,category,rating,totalPages,image,author,bookName}=book
  return (
    <div className="card card-compact bg-base-100 border-2 p-8">
  <figure className='p-6 rounded-2xl bg-gray-400'>
    <img className='h-56  object-cover'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
        <h2 className="card-title ">{bookName}</h2>
        <p className=' '>By: {author} </p>
  
  </div>
</div>
  );
};

export default Book;