require.config({
    paths: {
        "jquery": "vendor/jquery/dist/jquery",
        "backbone": "vendor/backbone-amd/backbone",
        "underscore": "vendor/underscore-amd/underscore",
        "handlebars": "vendor/handlebars/handlebars.amd",
        "templates": "scripts/templates/templates"
    }
});


require(['views/app'], function (AppView) {
    new AppView;
});