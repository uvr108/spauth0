export const environment = {
    production: false,
    auth0: {
      domain: 'dev-zvrl72uuxsp8oz01.us.auth0.com',
      clientId: 'N0iDnk762zXUCv1ZNLGyf0yZNCf3ntti',
      authorizationParams: {
        redirect_uri: window.location.origin,
        scope: 'openid profile email',
      },
    },
  };
  