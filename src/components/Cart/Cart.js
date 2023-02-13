import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import profileImage from '../../images/Abdul Awal Nadim.png';

const Cart = (cart) => {
  //console.log(cart.cart);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    // console.log(getStoredCart());
    setBreakTime(getStoredCart());
  }, []);

  const handleBreakTime = (props) => {
    setBreakTime(props);
    addToDb(props);
  };

  let totalTime = 0;
  for (const exercise of cart.cart) {
    totalTime += parseInt(exercise.time_required) * exercise.quantity;
  }

  return (
    <div className='mt-3'>
      <div className='row'>
        <img
          className='rounded-circle col-6'
          src={profileImage}
          alt=''
          style={{ width: '100px', height: '80px' }}
        />
        <div className='col-6 pt-2'>
          <h5>Mr. Nadim</h5>
          <p>
            <i class='fas fa-map-marker-alt'></i>Sydney,Australia
          </p>
        </div>
      </div>
      <div className='mt-5 d-flex justify-content-around align-items-center border border-secondary'>
        <div className=''>
          <h3>75kg</h3>
          <p>Weight</p>
        </div>
        <div className=''>
          <h3>6.5</h3>
          <p>Height</p>
        </div>
        <div className=''>
          <h3>25yrs</h3>
          <p>Age</p>
        </div>
      </div>
      <div className='mt-5'>
        <h3>Add A Break</h3>
        {/* locaStorage a store hoba */}
        <div className='d-flex justify-content-around align-items-center border border-secondary'>
          <p
            onClick={() => handleBreakTime(10)}
            className='border border-secondary rounded-circle btn btn-primary'
          >
            10s
          </p>
          <p
            onClick={() => handleBreakTime(20)}
            className='border border-secondary rounded-circle btn btn-primary'
          >
            20s
          </p>
          <p
            onClick={() => handleBreakTime(30)}
            className='border border-secondary rounded-circle btn btn-primary'
          >
            30s
          </p>
          <p
            onClick={() => handleBreakTime(40)}
            className='border border-secondary rounded-circle btn btn-primary'
          >
            40s
          </p>
          <p
            onClick={() => handleBreakTime(50)}
            className='border border-secondary rounded-circle btn btn-primary'
          >
            50s
          </p>
        </div>
      </div>
      <div className='mt-5'>
        <h3>Exercise Details</h3>
        <div className='d-flex justify-content-around border border-secondary'>
          <h5>Exercise time </h5>
          <p>{totalTime} seconds</p>
        </div>
        <div className='mt-3 d-flex justify-content-around border border-secondary'>
          <h5>Break time </h5>
          <p>{breakTime} seconds</p>
        </div>
      </div>
      <div className='mt-5 '>
        <a href='#' className='w-100 btn btn-primary'>
          Activity Completed
        </a>
      </div>
    </div>
  );
};

export default Cart;
