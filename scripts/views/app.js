define(['backbone', 'templates'], function (Backbone, Templates) {

    var App = Backbone.View.extend({
        initialize: function () {
            console.log('app view');
            var viewTemplate = Templates.HomeTemplate;
            var html = viewTemplate({
                data: 'test'
            });
            document.getElementById("app-container").innerHTML = html;
        }
    });

    return App;
});