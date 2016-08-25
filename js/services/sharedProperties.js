
app.service('sharedProperties', function () {

    this.searchedUser = '';
    return {
        getSearchedUser: function () {
            return searchedUser;
        },
        setSearchedUser: function(userId) {
            searchedUser = userId;
        }
    };
});