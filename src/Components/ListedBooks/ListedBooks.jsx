import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utility/addToStore';
import { parse } from 'postcss';
import Book from '../Book/Book';
const ListedBooks = () => {
  const allBooks = useLoaderData();
  
  const [readBooks,setReadBooks]=useState([])
  useEffect(() => {
    const readList = getStoredList();
    const readListInt = readList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => readListInt.includes(book.bookId));
    setReadBooks(readBookList);

    console.log(readList,allBooks);
    


  },[])

  return (
    <div>
      <h2 className="text-3xl font-bold my-8"> From LIstedBooks.jsx</h2>

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