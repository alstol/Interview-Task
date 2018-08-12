var angularApp = angular.module("angularApp", []);

angularApp.controller("cvController", ($scope) => {
    $scope.location = new Location("Horsens", "8700", "Denmark", "Kamtjatka 14, 1, 194");
    $scope.name = new Name("Alin Stefan", "Olaru");
    $scope.person = new Person("xshteff", $scope.name, "alinstefanolaru@gmail.com", "+45 60 90 47 95", $scope.location, "https://avatars1.githubusercontent.com/u/9394141?s=460&v=4", "RO");
    $scope.education = [new Education("VIA University College", "Horsens, Denmark", "Bachelor ICT Engineering", "Aug 2014", "Feb 2018", "https://alinstefanola.ru/files/images/companies/VIA.png")];
    $scope.experience = experience;
    $scope.progressBars = progressBars;

    //An easy way of displaying my age, calculating the amount of years between my birthday and today.
    $scope.getAge = () => {
        var now = new Date();
        var bday = new Date(1995, 2, 19);
        var diff = now.getTime() - bday.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
});

angularApp.controller("randomUserController", ($scope, $http) => {
    $scope.formData = {
        amount: 1,
        nationalities: []
    }

    $scope.data = [];

    $scope.loadUsers = (amount, nationalities) => {
        if (nationalities.length > 0 && $scope.getRandomUserForm.$valid) {
            $('#random-no-nationality').hide();
            var nationalitiesString = nationalities.join(',');

            $http.get(`/api/RandomUser/${amount}/${nationalitiesString.toLowerCase()}`)
                .then((result) => {
                    $scope.data = result.data.map(obj => Object.assign(new Person, obj));
                    console.log($scope.data);
                });
        }
        if (nationalities.length === 0)
            $('#random-no-nationality').show();

    }

    $scope.toggleJson = (id) => {
        $(`.random-user-card[data-userid="${id}"] .avatar`).toggle();
        $(`.random-user-card[data-userid="${id}"] .data`).toggle();
        $(`.random-user-card[data-userid="${id}"] .jsonData`).toggle();
        $(`.random-user-card[data-userid="${id}"]`).toggleClass('fullGrid');
    }

});