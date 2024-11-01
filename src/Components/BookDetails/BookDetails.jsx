import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
 
  const id = parseInt(bookId);

  const detailsBook = data.find(book => book.bookId === id);
  
  console.log(detailsBook);
  const { bookName,yearOfPublishing,publisher,tags,category,rating,totalPages,review,image,author } = detailsBook;
  return (
   <div className="hero  my-5 rounded-lg">
  <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="bg-base-200 p-5 rounded-2xl ">
           <img className="h-[564px] "
      src={image} />
   </div>
    <div className="space-y-4">
          <h1 className="text-5xl font-bold">{bookName} </h1>
          <p className="">{author} </p>
          <hr className="border-2" />
          <p>{ tags}</p>
          <hr className="border-2" />
          <p className="py-6 w-[700px] text-wrap">
            <span className="text-xl font-bold">Review:</span>
       {review}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default BookDetails;