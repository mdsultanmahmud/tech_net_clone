import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className='grid place-items-center min-h-screen w-full'>
            <div>
                <h1 className='text-center font-bold text-3xl text-red-600'>404</h1>
                <Link to="/" className='cursor-pointer text-xl px-4 py-2 bg-red-500 rounded-lg font-semibold  text-white block'><button>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;