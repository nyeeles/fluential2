var app = angular.module("fluential",['ngTagsInput','ui.bootstrap']);


app.controller('FluentialCtrl', ['$scope', function ($scope) {
	
}]);

var ModalInstanceCtrl = function ($scope, $modalInstance, profiles) {

  $scope.profiles = profiles;
  $scope.selected = {
    profile: $scope.profiles[0]
  };

  console.log($scope.selected);

  $scope.ok = function () {
  	console.log('Yo')
    $modalInstance.close($scope.selected.profile);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}

// app.controller('ModalInstanceCtrl',['$scope','$modalInstance','items', ModalInstanceCtrl]);




app.controller('TagsCtrl', ['$scope','$modal','$log','$http', function ($scope,$modal,$log,$http) {

	// $scope.items = ['item1', 'item2', 'item3'];


	$scope.filterProfiles = function() {
		var tags = this.tags.map(function(tag) { return tag.text });

		if(tags.length == 0) {
			$scope.filteredProfiles = $scope.profiles
			return; 
		}

		$scope.filteredProfiles = $scope.profiles.filter(function(profile) {
			var keywords = profile.keywords.split(', ')

			return keywords.some(function(keyword) {
				return (tags.indexOf(keyword) > -1);
			})
		})
	}


  $scope.open = function (size,index) {
  	console.log(index);
    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        profiles: function () {
          return $scope.filteredProfiles[index];
        }
      }
    });

    modalInstance.result.then(function (selectedProfile) {
      $scope.selected = selectedProfile;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  }


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.


  $scope.tags = [];

  $scope.loadTags = function(query) {
    return $http.get('superheroes.json');
  };


	$scope.profiles = [
	{
		name: 'zoella',
		thumbnail: 'zoella.jpg',
		subscribers: 12435,
		total_views: 6543,
		average_views: 933,
		growth_rate: 56,
		keywords: 'girl, uk, cats',
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repudiandae itaque, voluptatum sed magnam quaerat beatae animi voluptate eligendi quo velit quisquam ex necessitatibus, quibusdam, sit ullam ipsum. Dolores, ad!",
		video: '//www.youtube.com/embed/h5Wg6VN1K_U'
	},
	{
		name: 'joanan',
		thumbnail: 'zoella.jpg',
		subscribers: 12435,
		total_views: 6543,
		average_views: 933,
		growth_rate: 56,
		keywords: 'house, car, bicycle',
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repudiandae itaque, voluptatum sed magnam quaerat beatae animi voluptate eligendi quo velit quisquam ex necessitatibus, quibusdam, sit ullam ipsum. Dolores, ad!",
		video: '//www.youtube.com/embed/h5Wg6VN1K_U'
	},
	{
		name: 'peter',
		thumbnail: 'zoella.jpg',
		subscribers: 12435,
		total_views: 543,
		average_views: 933,
		growth_rate: 56,
		keywords: 'dog, usa, running, crazy',
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repudiandae itaque, voluptatum sed magnam quaerat beatae animi voluptate eligendi quo velit quisquam ex necessitatibus, quibusdam, sit ullam ipsum. Dolores, ad!",
		video: "//www.youtube.com/embed/h5Wg6VN1K_U"
	}
	// ,
	// {
	// 	name: 'gabriel',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 12435,
	// 	total_views: 6543,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'nic',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 12435,
	// 	total_views: 653,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'margherita',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 12435,
	// 	total_views: 6543,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'kaboom',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 1235,
	// 	total_views: 6543,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'mohamed',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 1243,
	// 	total_views: 6543,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'fitsum',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 2435,
	// 	total_views: 6543,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'johanna',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 1235,
	// 	total_views: 653,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'kate',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 1235,
	// 	total_views: 654,
	// 	average_views: 933,
	// 	growth_rate: 56
	// },
	// {
	// 	name: 'will',
	// 	thumbnail: 'zoella.jpg',
	// 	subscribers: 1435,
	// 	total_views: 43,
	// 	average_views: 933,
	// 	growth_rate: 56
	// }
	];
	$scope.filteredProfiles = $scope.profiles;
	
}]);


