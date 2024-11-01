import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utility/addToStore';
import { parse } from 'postcss';
import Book from '../Book/Book';
const ListedBooks = () => {
  const allBooks = useLoaderData();
  
  const [readBooks, setReadBooks] = useState([])
  const [sort, setSort] = useState('');
  useEffect(() => {
    const readList = getStoredList();
    const readListInt = readList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => readListInt.includes(book.bookId));
    setReadBooks(readBookList);

    console.log(readList, allBooks);
    


  }, []);
  const handleSort = sortType => {
    setSort(sortType);
    if (sortType === 'sort by pages') {
      const readSortList = [...readBooks].sort((a, b) => b.totalPages - a.totalPages)
      setReadBooks(readSortList);
    } else {
      const readWishList = [...readBooks].sort((a, b) => b.rating - a.rating);
      setReadBooks(readWishList);
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold my-8"> From LIstedBooks.jsx</h2>

      <div className='flex items-center justify-center'>
         <details className="dropdown">
  <summary className="btn m-1">Sort By</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {
                sort?`sort By: ${sort}`: 'sort By'
            }
            <li onClick={()=>handleSort('sort by pages')}><a>
            Sort By pages</a></li>
            <li onClick={()=>handleSort('sort by ratings')}><a>Sort By ratings</a></li>
  </ul>
</details>
     </div>
        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
          <h2 className='text-2xl font-bold'>Books I Read:{ readBooks.length}</h2>
          <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
              {
            readBooks.map(book=><Book key={book.id} book={book}></Book>)
          }
        </div>
    </TabPanel>
    <TabPanel>
      <h2 className='text-2xl font-bold'>Wish List</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;