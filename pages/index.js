import Link from 'next/link';
import App from '../components/App';

const HomePage = () => {
    return (
        <div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About Us!</a></Link>
            {/* <h2>I am Home!</h2> */}
            <App />
        </div>
    );
}

export default HomePage;