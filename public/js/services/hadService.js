// MEAL SERVICE
function menuService($http) {
    return {
        get : function() {
            return $http.get('/menus');
        },
        update : function(id, data){
            return $http.put('/menus/' + id, data);
        },
        create : function(data) {
            return $http.post('/menus', data);
        },
        delete : function(id) {
            return $http.delete('/menus/' + id);
        }
    }
};
