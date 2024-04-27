import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import PageWrapper from '../templates/PageWrapper';

function AuthWrapper() {
    return (
			<PageWrapper>
				<Outlet />
			</PageWrapper>
		
	);
}

export default AuthWrapper