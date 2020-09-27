app.factory("ManutencaoService", ManutencaoService);

function ManutencaoService ($q, $window, $http) {
    return {

        getAll: function(){
            return $http({
                method : "GET",
                url : backend + entidade 
            })
        },

        getOne : function (id) {
            return $http({
                method : "GET",
                url : backend + entidade + id
            })
        },

        insert : function (objeto) {
            return $http({
                method : "POST",
                url : backend + entidade,
                data: {
                    "valor": objeto.valor,
                    "nome": objeto.nome,
                    "dia": objeto.dia
                }
            })
        },

        update : function (objeto) {
            return $http({
                method : "PUT",
                url : backend + entidade  + objeto.id,
                data: {
                    "valor": objeto.valor,
                    "nome": objeto.nome,
                    "dia": objeto.dia
                }
            })
        },

        delete : function (id) {
            return $http({
                method : "DELETE",
                url : backend + entidade + id
            })
        },
        
    };
}