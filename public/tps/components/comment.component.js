const myTemplate=`

        <li ng-if="!$ctrl.comment.anonymous" ng-class="$ctrl.getScoreClass()">
        {{$ctrl.comment.content}} : {{$ctrl.comment.user.name}}
        </li>
        
        <li ng-if="$ctrl.comment.anonymous" ng-class="$ctrl.getScoreClass()">
        {{$ctrl.comment.content}} : Anonymous
        </li>
<button ng-click="$ctrl.up()">+</button>
<button ng-click="$ctrl.down()">-</button>
{{$ctrl.comment.score}}



`;



function CommentController() {
    this.comment.score = 0;

};


CommentController.prototype = {

    up(){
        this.comment.score++;
    },
    down(){
        this.comment.score--;
    },

    getScoreClass(){
        if(this.comment.score ===0){
            return'';
        }
        if(this.comment.score>0){
            return 'like';
        }
        return 'dislike'
    }
};

angular.module('forum')
.component('showcomment',{
    template : myTemplate,
    controller : CommentController,
    bindings:{
        comment:'='
    }

});