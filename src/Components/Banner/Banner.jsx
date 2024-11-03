import React from 'react';
import bannerImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className='mb-8'>
            <div className="hero bg-base-200 min-h-screen p-12 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
     
      <button className="btn btn-primary mt-10">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;