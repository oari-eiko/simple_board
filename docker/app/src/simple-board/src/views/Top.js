import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Top() {
  // state
  const [userItems, setUserItems] = useState();

  // effect
  useEffect(() => {
    // 全ユーザー取得API
    axios.get('http://localhost:8080/api/users/')
    .then(res => {
      let UserList = res.data.map(user => {
        return (
          <tr key={user.id}>
            <td className='border border-white py-3 px-4'>{user.id}</td>  
            <td className='border border-white py-3 px-4'>{user.name}</td>  
            <td className='border border-white py-3 px-4'>{new Date(user.created_at).toLocaleString()}</td>  
          </tr>
        );
      });
      setUserItems(UserList);
    })
    .catch(err => console.log(err));
  }, []);

  // JSX
  return (
    <div className='flex flex-col my-3'>
      {/* ユーザーリスト */}
      <table className='max-w-1/3 my-3 mx-auto bg-gray-300'>
        <thead className='bg-gray-400'>
          <tr>
            <th className='border border-white py-3 px-4'>ID</th>
            <th className='border border-white py-3 px-4'>Name</th>
            <th className='border border-white py-3 px-4'>Date</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {userItems}
        </tbody>
      </table>

      <div className='flex mx-auto my-2'>
        {/* サインアップ */}
        <Link to="/signup">
          <button className='w-32 btn bg-yellow-700 text-gray-200 py-2 px-5 mx-3 font-bold rounded text-md'>
            Sign Up
          </button>
        </Link>
        {/* ログイン */}
        <Link to="/login">
          <button className='w-32 btn bg-cyan-700 text-gray-200 py-2 px-5 mx-3 font-bold rounded text-md'>
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Top;
