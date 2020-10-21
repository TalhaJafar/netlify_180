import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const isBrowser = typeof window !== 'undefined';

const httpLink = createHttpLink({
    uri: 'https://180smokejsproxy.sprintech.digital/180_proxy'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
        }
    }
});

const headers = authLink.concat(httpLink);

export default headers;
