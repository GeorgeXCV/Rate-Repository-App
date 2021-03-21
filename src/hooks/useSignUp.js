import { useMutation } from '@apollo/client';
import { CREATE_USER } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(CREATE_USER);
  
    const signUp = async ({ username, password }) => {
        return await mutate({ variables: { username, password } });
    };
  
    return [signUp, result];
  };

export default useSignIn