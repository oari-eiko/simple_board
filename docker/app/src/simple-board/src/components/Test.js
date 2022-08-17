import { useState, useEffect } from 'react';

function Test(props) {
  // 値保持
  const [now, setNow] = useState(new Date().toLocaleString());
  const [msg, setMsg] = useState(props.msg);

  // レンダー後の処理
  useEffect(() => {
    setInterval(() => {
      setNow(new Date().toLocaleString());
    }, 1000);
  });

  // inputのchangeイベントハンドラ
  function handlerChange(event) {
    let inputValue = event.target.value;
    if (inputValue === '') inputValue = 'is empty!';    
    setMsg(inputValue);
  }
  
  // JSX
  return (
    <div className="Test container mx-auto">
      <div className='flex flex-col'>
        <div className='mx-auto'>
          <p className='text-2xl'>{msg}</p>
        </div>
        <div className='mx-auto'>
          <h2 className='text-xl'>Now: {now}</h2>
        </div>
        <div className='mx-auto'>
          {/* セットするフォーム */}
          <form>
            <input onChange={handlerChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Text"></input>
          </form>
          {/* セットボタン */}
          <button onClick={() => setMsg('')} className='btn bg-gray-300 py-2 px-5 my-2 font-bold rounded text-xl'>
            Set
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
