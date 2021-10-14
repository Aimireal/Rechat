import React, { useContext, useState, useEffect } from 'react';
import { useHistory  } from 'react-router-dom';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    //Handle login for the providers, and navigate to their chats
    useEffect(() => {
        auth.onAuthStateChanged(() => {
            setUser(user);
            setLoading(false);
            history.push('/chats');
        })
    }, [user, history]); //Called when user or history change

    const value = { user };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}