// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Board() {
  // クッキー有効化
  axios.defaults.withCredentials = true;

  // state
  const [ boardItems, setBoardItems ] = useState([]);

  // effect
  useEffect(() => {
    // 全掲示板をAPIで取得
    axios.get('http://localhost:8080/api/board/')
    .then(res => {
      let boardList = res.data.map(board => {
        return (
          <li key={board.id} className="p-3 border border-b-gray-300 bg-gray-100">
            <div>
              <p className='text-xl font-bold'>{board.title}</p>
              <p className='text-sm'>{board.caption}</p>
            </div>
          </li>
        );
      });
      setBoardItems(boardList);
    })
    .catch(error => console.log(error));
    
  }, []);

  // JSX
  return (
    <div className='flex flex-col'>
      <ul className='mx-5 my-5'>
        {boardItems}
      </ul>
    </div>
  );
}

export default Board;
