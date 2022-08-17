import {useState, useEffect} from 'react';

function MainFooter() {
  // State
  const [now, setNow] = useState(new Date().toLocaleString());

  // Effect
  useEffect(() => {
    // 時間表示
    setInterval(() => { setNow(new Date().toLocaleString()) }, 1000);
  });

  // JSX
  return (
    <div className='bg-gray-600 text-right pr-3 py-1'>
      <p className='text-white text-sm font-bold tracking-widest'>{now}</p>
    </div>
  );
}

export default MainFooter;
