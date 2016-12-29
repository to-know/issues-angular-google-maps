class IssueCtrl 
{
	constructor($scope)
	{
		 
		$scope.locationsFiltered = [
			{
				id: 5,
				latitude: 44.4284821,
				longitude: 26.1241451,
				opts: {
					zIndex: 2
				}
			},
			{
				id: 4,
				latitude: 43,
				longitude: 26.1241451,
				opts: {
					zIndex: 1
				}
			}
	];

		$scope.map = {
		  center: {
		    latitude: 32,
		    longitude: 15
		  },
		  zoom: 4,
		  bounds: {},
		  markers: {
		    models: [],
		    type: 'cluster',
		    typeOptions: {
		      minimumClusterSize: 12,
		      gridSize: 60
		    }
		  },
		  markersEvents: {
		    click: function(marker, eventName, model) {

		    	console.log(marker, model);

		      $scope.map.window.model = model;
		      $scope.map.window.marker = {
		        id: model.id,
		        coords: {
		          latitude: model.latitude,
		          longitude: model.longitude
		        },
		        title: model.title,
		        icon: model.icon
		      }
		      $scope.map.window.show = true;
		      $scope.map.center = {
		        latitude: model.latitude,
		        longitude: model.longitude
		      };
		    }
		  },
		  window: {
		    marker: {},
		    show: true,
		    closeClick: function() {
		      this.show = false;
		    },
		    options: {
		      maxWidth: 300
		    }
		  },
		  options: {
		    mapTypeControl: true,
		    zoomControl: true,
		    streetViewControl: true,
		    scrollwheel: true
		  }
		};
	}
}

IssueCtrl.$inject = ['$scope'];
module.exports = IssueCtrl;