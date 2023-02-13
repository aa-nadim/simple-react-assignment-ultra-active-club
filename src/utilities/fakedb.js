const addToDb = (breakTime) => {
  localStorage.setItem('break-time', JSON.stringify(breakTime));
};

const getStoredCart = () => {
  const storedCart = localStorage.getItem('break-time');
  // console.log(storedCart);
  return storedCart;
};

export { addToDb, getStoredCart };
