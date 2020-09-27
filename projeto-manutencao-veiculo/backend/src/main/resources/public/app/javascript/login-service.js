app.factory('LoginService', LoginService);

function LoginService ($q, $window, $http) {
    return {

        getToken : function () {
            return $window.sessionStorage.getItem("token");
        },

        setToken: function (token) {
            $window.sessionStorage.setItem("token", token);
        },

        login : function (form) {
            return $http({
                method : "POST",
                url : backend + "/login",
                data: {
                    'username': form.email,
                    'password': form.password
                }
            })
        },

        // signup : function (form) {
        //     return $http({
        //         method : "POST",
        //         url : backend + "/signup",
        //         params: {
        //             'username': form.name,
        //             'email': form.email,
        //             'password': form.password,
        //             'tipo': 'c'
        //         }
        //     })
        // },

        // validarDisponibilidade : function (form) {
        //     return $http({
        //         method : "POST",
        //         url : backend + "/validarDisponibilidade",
        //         params: {
        //             'email': form.email
        //         }
        //     })
        // },

        logout : function () {
            $window.sessionStorage.setItem("ngStorage-token", "");
            $q.when();
            return $http({
                method : "POST",
                url : backend + "/logout"
            })
        }
    };
}