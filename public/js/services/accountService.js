//ACCOUNT SERVICE
function accountService($http) {
    return {
        get : function() {
            return $http.get('/accounts');
        },
        update : function(id, data){
            return $http.put('/accounts/' + id, data);
        },
        create : function(data) {
            return $http.post('/accounts', data);
        },
        delete : function(id) {
            return $http.delete('/accounts/' + id);
        }
    }
};
