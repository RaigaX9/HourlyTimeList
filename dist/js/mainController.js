(function () {
    'use strict';

    var myapp = angular.module('myapp', ['ui.bootstrap']);

    myapp.controller('TimeModalInstanceCtrl', function ($scope, $modalInstance, time)
    {
        var timeClone = JSON.parse(JSON.stringify(time));
        $scope.time = time;
        $scope.cancel = function () {
            $scope.time.name = timeClone.name;
            $scope.time.phone = timeClone.phone;
            $modalInstance.close();
        };

        $scope.save = function() {
            if(time.name == '' || time.phone == ''){
                alert("Both name and phone cannot be blank!");
            }
            else {
                $scope.jsonString = angular.toJson($scope.time.name, $scope.time.phone, true);
                this.time.state = 'btn-danger';

                $modalInstance.dismiss('save');
            }
        };

    });
    myapp.controller('HourListController', function($scope, $modal) {

        $scope.timelist = [
            {
                slot: '9AM - 10AM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '10AM - 11AM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '11AM - 12PM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '12PM - 1PM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '1PM - 2PM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '2PM - 3PM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '3PM - 4PM',
                name: '',
                phone: '',
                state: 'btn-primary'
            },
            {
                slot: '4PM - 5PM',
                name: '',
                phone: '',
                state: 'btn-primary'
            }
        ];

        // MODAL WINDOW
        $scope.open = function (_time) {

            var modalInstance = $modal.open({
                controller: "TimeModalInstanceCtrl",
                templateUrl: 'userinputModal.html',
                resolve: {
                    time: function()
                    {
                        return _time;
                    }
                }
            });

        };

    });

})();