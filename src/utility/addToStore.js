const getStoredList = () => {
  
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
}
}

const addToStoredReadList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    return alert (`already exist`)
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
  }
}
export { addToStoredReadList,getStoredList };

const getWishList = () => {
  const WishListStr = localStorage.getItem('wish-list');
  if (WishListStr) {
    const storedWishList = JSON.parse(WishListStr
    );
    return storedWishList;
  } else {
    return [];
  }
}
const addToStoredWishList = (id) => {
  const storedWishList = getWishList(id);
  if (storedWishList.includes(id)) {
    return alert('This book already exist to wish list')
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list",storedWishListStr);
  }
}
export {addToStoredWishList}