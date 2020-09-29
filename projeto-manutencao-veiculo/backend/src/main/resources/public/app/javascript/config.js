app.factory('BearerAuthInterceptor', function ($window, $q) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            var token = $window.localStorage.getItem('ngStorage-token');
            
            if (token) {
            	token = token.split('\"').join('');
              // may also use sessionStorage
                 config.headers.Authorization = 'Bearer ' + token;
//                config.headers.Authorization = 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYwMTk0OTEwNX0.jLtooYm61PWQDRf56QXR0SCzumrgKOass90FmWVwaz4h9yDDeYUCa5QL2439dRyrHUUs7lmaT2bVjWGc9_rqYw';
            }
            return config || $q.when(config);
        },
        response: function(response) {
            if (response.status === 401) {
                //  Redirect user to login page / signup Page.
            }
            return response || $q.when(response);
        }
    };
});

// Register the previously created AuthInterceptor.
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('BearerAuthInterceptor');
});