const template = `
<h1>test</h1>
    <ul class="collection">
            <showcomment  ng-repeat="c in $ctrl.topic.comments" comment="c"></showcomment>
    </ul>

<form novalidate>

        <select class="collection" ng-model="$ctrl.model.selectUser" ng-options="user.name for user in $ctrl.users">
        
</select>

        <input type="text" ng-model="$ctrl.model.comment.content">
        
        <input type="submit" ng-click="add()" value="Ok" />


    </form>




`;

function ShowTopicController() {


}

//should have : <showtopic topic="t"></showtopic>


angular.module('forum')
.component('showTopic', {

    template,
    controller : ShowTopicController,
    bindings : {
        topic: '=',
        users:"="
    }


});