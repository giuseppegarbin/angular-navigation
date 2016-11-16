'use strict';

var meetAngularBlog = angular.module('meetAngularBlog', []);

meetAngularBlog.component('blogIndex', {
    templateUrl: 'app/blog/blog.template.html',
    controller: function meetAngularBlogController() {
        this.posts = [
            {
                id: '1',
                title: 'Nexus S',
                subtitle: 'Fast just got faster with Nexus S.',
                url: 'post1'
            }, {
                id: '2',
                title: 'Motorola XOOM™ with Wi-Fi',
                subtitle: 'The Next, Next Generation tablet.',
                url: 'post2'
            }, {
                id: '3',
                title: 'MOTOROLA XOOM™',
                subtitle: 'The Next, Next Generation tablet.',
                url: 'post3'
            }
        ];
    }
});