// import
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <div className="text-center bg-gray-600 py-3">
      <Link to="/">
        <p className="text-xl text-white font-bold tracking-widest">SIMPLE BOARD</p>
      </Link>
    </div>
  );
}

export default MainHeader;
