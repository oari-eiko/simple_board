// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Topコンポーネント
function Top() {
  
  // jsxを返す
  return (
    <div className="Test container mx-auto">
      <div className='flex flex-col bg-gray-200'>
        <div className='mx-auto'>
          {/* セットボタン */}
          <Link to="/signup">
            <button className='btn bg-cyan-600 py-2 px-5 my-2 font-bold rounded text-xl'>
              Sign Up
            </button>  
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Top;
