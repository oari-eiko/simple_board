import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Top() {
  // state
  const [userItems, setUserItems] = useState();

  // effect
  useEffect(() => {
    // 全ユーザー取得API
    axios.get('http://localhost:8080/users/')
    .then(res => {
      let UserList = res.data.map(user => {
        return (
          <tr key={user.id}>
            <td>{user.id}</td>  
            <td>{user.name}</td>  
            <td>{user.created_at}</td>  
          </tr>
        );
      });
      setUserItems(UserList);
    })
    .catch(err => console.log(err));
  }, []);

  // JSX
  return (
    <div className='flex flex-col bg-gray-200'>
      {/* ユーザーリスト */}
      <table className='w-full my-3'>
        <thead className='bg-gray-400'>
          <tr>
            <th className='border border-white'>ID</th>
            <th className='border border-white'>Name</th>
            <th className='border border-white'>Day</th>
          </tr>
        </thead>
        <tbody>
          {userItems}
        </tbody>
      </table>

      {/* サインアップ */}
      <div className='mx-auto'>  
        <Link to="/signup">
          <button className='btn bg-cyan-600 py-2 px-5 my-2 font-bold rounded text-xl'>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Top;
