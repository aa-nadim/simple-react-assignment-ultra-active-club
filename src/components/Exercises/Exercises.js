import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Cart from '../Cart/Cart';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('exercises.json')
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    //console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((exercise) => exercise.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (exercise) => exercise.id === selectedProduct.id
      );
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
  };

  return (
    <div className='container '>
      <div className='  '>
        <div className='row '>
          <div className='col-9 row bg-light bg-gradient'>
            <h3 className=' mt-5 my-3'>UTRA-ACTIVE-CLUB</h3>
            <h6 className='mb-3'>Select today's exercise</h6>
            {exercises.map((exercise) => (
              <Exercise
                key={exercise.id}
                exercise={exercise}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className='col-3 bg-white'>
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
