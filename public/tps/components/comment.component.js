const myTemplate=`
<h1>WHOOO HOOOO funkopop</h1>


`;

function CommentController() {

};


angular.module('forum')
.component('comment',{
    template : myTemplate,
    controller : CommentController


});