// app.directive('counter', function counter() {
//     return {
//         scope: {},
//         bindToController: {
//             count: '='
//         },
//         controller: function () {
//             function increment() {
//                 this.count++;
//             }
//             function decrement() {
//                 this.count--;
//             }
//             this.increment = increment;
//             this.decrement = decrement;
//         },
//         controllerAs: 'ctrl',
//         template: `
//             <div class="todo">
//                 <input type="text" ng-model="ctrl.count">
//                 <button type="button" ng-click="ctrl.decrement();">-</button>
//                 <button type="button" ng-click="ctrl.increment();">+</button>
//             </div>
//     `
//     };
// });

app.component('counter', {
    require: {
        // parent
    },
    bindings: {
        count: "="
    },
    controller: function () {
        this.$onInit = function () {
            console.log('$onInit counter');
        }
        this.$postLink = function () {
            console.log('$postLink counter');
        }
        this.$onChanges = function (changesObj) {
            console.log(changesObj)
        }
        this.foo = 'this is foo';
        function increment() {
            this.count++;
        }
        function decrement() {
            this.count--;
        }
        this.increment = increment;
        this.decrement = decrement;
    },
    template: function ($element, $attrs) {
        return ['<div class="todo">',
            '<input type="text" ng-model="$ctrl.count">',
            '<button type="button" ng-click="$ctrl.decrement();">-</button>',
            '<button type="button" ng-click="$ctrl.increment();">+</button>',
            '</div>'
        ].join('');
    }
});


var tab = {
    bindings: {
        label: '@'
    },
    require: {
        tabs: '^^tabs'
    },
    transclude: true,
    template: `
    <div class="tabs__content" ng-if="$ctrl.tab.selected">
      <div ng-transclude></div>
    </div>
  `,
    controller: function () {
        this.$onInit = function () {
            this.tab = {
                label: this.label,
                selected: false
            };
            this.tabs.addTab(this.tab);
            // console.log('$onInit tab');
        };
        this.$postLink = function () {
            // console.log('$postLink tab');
        }
    }
};

var tabs = {
    transclude: true,
    bindings: {
        selected: '@'
    },
    controller: function () {
        this.$onInit = function () {
            // console.log('$onInit tabs');
            this.tabs = [];
        };
        this.addTab = function addTab(tab) {
            this.tabs.push(tab);
        };
        this.selectTab = function selectTab(index) {
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].selected = false;
            }
            this.tabs[index].selected = true;
        };
        this.$postLink = function () {
            // console.log('$postLink tabs')
            // use `this.selected` passed down from bindings: {}
            // a safer option would be to parseInt(this.selected, 10)
            // to coerce to a Number to lookup the Array index, however
            // this works just fine for the demo :)
            this.selectTab(parseInt(this.selected) || 0);
        };

    },
    template: `
    <div class="tabs">
      <ul class="tabs__list">
        <li ng-repeat="tab in $ctrl.tabs">
          <a href="" 
            ng-bind="tab.label" 
            ng-click="$ctrl.selectTab($index);"></a>
        </li>
      </ul>
      <div class="tabs__content" ng-transclude></div>
    </div>
  `
};

app.component('tab', tab)
    .component('tabs', tabs);



var parentComponent = {
    template: `
  	<div>
    	<pre>Parent Object: {{ $ctrl.user | json }}</pre>
    	<a href="" ng-click="$ctrl.changeUser();">
      	Change user (this will call $onChanges in child)
      </a>
    	<child-component user="$ctrl.user">
      </child-component>
    </div>
  `,
    controller: function () {
        this.$onInit = function () {
            this.user = {
                name: 'Todd Motto',
                location: 'England, UK'
            };
        };
        this.changeUser = function () {
            this.user = {
                name: 'Tom Delonge',
                location: 'California, USA'
            };
        };
    }
};

var childComponent = {
    bindings: {
        user: '<'
    },
    template: `
  	<div>
      <input type="text" ng-model="$ctrl.user.name">
    </div>
  `,
    controller: function () {
        this.$onChanges = function (changes) {
            console.log('$onChanges')
            this.user = changes.user.currentValue;
        };
    }
};

app.component('parentComponent', parentComponent)
    .component('childComponent', childComponent);