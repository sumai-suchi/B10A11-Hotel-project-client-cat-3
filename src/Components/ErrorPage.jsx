
import { Link } from 'react-router-dom';
import ErrorImg from '../../src/assets/Security Research.gif'
const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col md:flex-row'>
            <div className='w-6/12'>
            <img src={ErrorImg } alt="" />
            </div>
            <div className='w-5/12 text-center justify-center items-center md:'>
                 <h1 className='text-2xl font-bold'>Page is not available</h1>
                 <Link to={'/'} className='btn'>Go Home </Link >
            </div>
        </div>
    );
};

export default ErrorPage;