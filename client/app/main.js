require.config({
	baseUrl: 'app',
	paths: {
		jquery: '../../components/jquery/dist/jquery.min',
		text: '../../components/text/text',
		views: 'views',
		models: 'models',
		vm: 'view_models'
	}
});

require(['jquery', 'vm/site_layout'], function ($, App) {
	$('#status').html('set ok!');
	var app = new App();
});