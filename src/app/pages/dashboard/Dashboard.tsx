import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <button>Click me</button>
    );
};

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/login">Login</Link>
        </div>
    );
}