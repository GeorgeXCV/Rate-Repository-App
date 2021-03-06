import { useContext } from 'react';
import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from "../graphql/mutations";
import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
        const { data } = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(data.authorize.accessToken)
        apolloClient.resetStore()
    };
  
    return [signIn, result];
  };

export default useSignIn