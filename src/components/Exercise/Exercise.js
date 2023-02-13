import React from 'react';

const Exercise = ({ exercise, handleAddToCart }) => {
  //console.log(handleAddToCart);
  const { name, picture, time_required } = exercise;
  return (
    <div className='col-4 my-3'>
      <div className='card p-3' style={{ width: '18rem' }}>
        <img src={picture} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            dicta.
          </p>
          <h6>For Age: 20-25</h6>
          <h6>Time required : {time_required}s</h6>
        </div>
        <a
          onClick={() => handleAddToCart(exercise)}
          href='#'
          className=' btn btn-primary'
        >
          Add to list
        </a>
      </div>
    </div>
  );
};

export default Exercise;
