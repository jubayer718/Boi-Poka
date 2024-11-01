import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToStore";
const BookDetails = () => {

  const handleAddToStorage = (id) => {
    addToStoredReadList(id);
  }
  const handleAddWishList = (id) => {
    addToStoredWishList(id);
  }
  const { bookId } = useParams();
  const data = useLoaderData();

  const id = parseInt(bookId);

  const detailsBook = data.find(book => book.bookId === id);

  console.log(detailsBook);
  const { bookName, yearOfPublishing, publisher, tags, category, rating, totalPages, review, image, author } = detailsBook;
  return (
    <div className="hero  my-5 rounded-lg">
      <div className="hero-content flex-col lg:flex-row gap-5">
        <div className="bg-base-200 p-5 rounded-2xl ">
          <img className="h-[564px] "
            src={image} />
        </div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{bookName} </h1>
          <p className="">By: {author} </p>
          <hr className="border-2" />
          <p>{tags}</p>
          <hr className="border-2" />
          <p className="py-6 w-[700px] text-wrap">
            <span className="text-xl font-bold">Review:</span>  {review}

          </p>
          <div className=" flex gap-5 items-center"><span className="text-xl font-bold">Tag</span>
            {
              tags.map((tag, idx)=><p className="p-3 bg-green-100 text-green-500 rounded-2xl"  key={idx}>{tag} </p>)
          }
          </div>
          <hr className="border-2" />
          <div className="space-y-3">
            <p>Number of page: <span className="text-lg font-bold">{totalPages} </span> </p>
          <p>Publisher: <span className="text-lg font-bold">{publisher} </span> </p>
          <p>Year of Publish: <span className="text-lg font-bold">{yearOfPublishing} </span> </p>
          <p>Rating: <span className="text-lg font-bold">{rating} </span> </p>
          </div>
           {/* button */}
      <div className="flex items-center gap-4">
          <NavLink><button className="btn" onClick={()=>handleAddToStorage(bookId)}> Read</button></NavLink>
         <NavLink> <button className="btn" onClick={()=>handleAddWishList(bookId)}> Wish List</button></NavLink>
      </div>
        
        </div>

      </div>
     
    </div>
  );
};

export default BookDetails;