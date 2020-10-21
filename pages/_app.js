import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AgeVerification from '../Components/AgeVerification'
import Headers from '../GraphQL/Headers';


import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  link: Headers,
  // uri: `https://store.dev.180smoke.ca/graphql`,
  cache: new InMemoryCache()
});

const MyApp = (props) => {
  const { Component, pageProps } = props
  const [isValidCookie, setIsValidCookie] = useState(false);
  const vari = process.env.API_BASE;

  // if (props.cook == null) {
  //   return <AgeVerification route={props.router.route} />
  // }
  // else {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    )
  }

// }

MyApp.getInitialProps = async (context) => {
  const { ctx } = context;

  const getCookie = (name, ctx) => {
    var nameEQ = name + '=';
    const cookies = ctx.req ? ctx.req.headers.cookie : document.cookie;
    if (!cookies) {
      return null;
    }
    var ca = cookies.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
        return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  const cookie = getCookie('age_verified', ctx);
  return {
    cook: cookie
  };
}

export default MyApp
