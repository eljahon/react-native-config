import React, { createContext, useContext, useState } from 'react';

export enum Role {
	ADMIN = 'admin',
	USER = 'user'
}

interface AuthProps {
	authState: { authenticated: boolean | null; username: string | null; role: Role | null };
	onLogin: (username: string, password: string) => void;
	onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = (props: React.PropsWithChildren) => {
	const [authState, setAuthState] = useState<{
		authenticated: boolean | null;
		username: string | null;
		role: Role | null;
	}>({
		authenticated: null,
		username: null,
		role: null
	});

	const login =async (username: string, password: string) => {
        console.log(username, password);
        
		if (username === 'admin' && password === 'admin') {
			setAuthState({
				authenticated: true,
				username: username,
				role: Role.ADMIN
			});
		} else if (username === 'user' && password === 'user') {
			setAuthState({
				authenticated: true,
				username: username,
				role: Role.USER
			});
		} else {
			alert('Invalid username or password!');
		}
	};

	const logout = async () => {
		setAuthState({
			authenticated: false,
			username: null,
			role: null
		});
	};
	return <AuthContext.Provider value={{
		onLogin: login,
		onLogout: logout,
		authState
	}}>{props.children}</AuthContext.Provider>;
};