import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggedInSelector } from '../../redux/selectors';

export const ProtectedRoute = ({ children }) => {
	const isAdminLoggedIn = useSelector(isLoggedInSelector);

	if (!isAdminLoggedIn) {
		return <Navigate to='/login' replace />;
	}

	return children;
};
