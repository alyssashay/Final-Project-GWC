var contentBoxApp = angular.module('contentBoxApp', []);
var gridCtrl = contentBoxApp.controller('GridCtrl', function($scope) {
  var regex;
  $scope.escapeRegExp = function(string){
      return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");

/* Pet Values */
var values = {jane: shy}
  };
  $scope.gridItems = [
    {
      img: 'jane.jpg',
      headerText: 'Jane',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptatibus aliquam asperiores, cum distinctio aliquid recusandae velit beatae. Reprehenderit in eum, expedita, alias explicabo iure amet. Assumenda consequuntur vitae fugit.'
    },
    {
      img: 'peaches.jpg',
      headerText: 'Peaches',
      blurbText: 'cliff Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda facilis qui minus, consequuntur reiciendis atque fugiat ullam id, placeat nam quas, voluptates ipsum velit voluptatum culpa numquam saepe quos!'
    },
    {
      img: 'ruffino.jpg',
      headerText: 'Ruffino',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vero cum vitae laboriosam nemo quaerat, sapiente harum reiciendis voluptas itaque incidunt molestias, fugiat asperiores dolores officiis architecto nihil assumenda. Fugiat!'
    },
    {
      img: 'elvis.jpg',
      headerText: 'Elvis',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ex minima, fugiat itaque error voluptates inventore sunt sequi possimus tempore odit debitis sint. Repudiandae quia esse totam eum blanditiis sunt?'
    },
    {
      img: 'cocoa.jpg',
      headerText: 'Cocoa',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nisi magnam cum nam iusto fugiat suscipit tempora nostrum autem, quasi, nemo illo sunt vitae id consectetur. Culpa reprehenderit esse sapiente?'
    },
    {
      img: 'guru.jpg',
      headerText: 'Guru',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, blanditiis autem, ex quidem hic unde dolorum deleniti tenetur repellat nesciunt delectus pariatur voluptate corrupti inventore iure, itaque, fuga natus doloribus.'
    },
    {
      img: 'babbette.jpg',
      headerText: 'Babbette',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque et amet aspernatur ullam, accusamus cum. Minima obcaecati voluptate velit cupiditate error ut, suscipit saepe beatae eaque veniam. Maiores, reiciendis quo.'
    },
    {
      img: 'petra.jpg',
      headerText: 'Petra',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus recusandae deleniti nobis unde dolor minus ut corporis saepe tempora architecto, possimus! Obcaecati odit nam vero ipsum odio vel iste.'
    },
    {
      img: 'trooper.jpg',
      headerText: 'Trooper',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, laboriosam impedit expedita alias quod repellendus reiciendis, officiis ullam iste delectus perferendis odio officia, commodi nihil voluptas aliquam. Enim, minus, unde!'
    },
    {
      img: 'luke.jpg',
      headerText: 'Luke',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quidem alias libero vel sunt quod non, aspernatur rerum nisi porro corrupti minus unde hic nemo labore veniam! Ipsa, nam, quas!'
    },
    {
      img: 'elwin.jpg',
      headerText: 'Elwin',
      blurbText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, sequi, cumque temporibus, mollitia obcaecati earum provident labore adipisci repellendus fugiat repellat quas doloribus incidunt ipsum. Tempore delectus quas illum ex!'
    },


  ];
  $scope.search = '';
  $scope.$watch('search', function (value) {
      regex = new RegExp('\\b' + $scope.escapeRegExp(value), 'i');
  });
  $scope.filterBySearch = function(gridItem) {
      if (!$scope.search) return true;
      return regex.test(gridItem.headerText + " " + gridItem.blurbText);
  };
  $scope.toggleBlurb = function($event) {
    console.log($event);
  };
});