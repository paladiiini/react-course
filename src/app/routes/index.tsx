import { BrowserRouter ,Router, Routes as Switch, Navigate, Route } from 'react-router-dom';
import { Dashboard, Login } from '../pages';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/home" element={<Dashboard />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/" element={<Navigate to="/home" />}  />
        </Switch>
        </BrowserRouter>
    );
    }