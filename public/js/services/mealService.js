// MEAL SERVICE
function mealService($http) {
    return {
        get : function() {
            return $http.get('/meals');
        },
        update : function(id, data){
            return $http.put('/meals/' + id, data);
        },
        create : function(data) {
            return $http.post('/meals', data);
        },
        delete : function(id) {
            return $http.delete('/meals/' + id);
        }
    }
};
