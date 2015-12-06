require.config({
	baseUrl: 'app',
	paths: {
		jquery: '../../components/jquery/dist/jquery.min',
		text: '../../components/text/text',
		Vue: '../../components/vue/dist/vue.min',
		views: 'views',
		models: 'models',
		vm: 'view_models'
	}
});

require(['jquery', 'vm/site_layout'], function ($, SiteLayout) {
	var layout = new SiteLayout().$mount('#app-area');
});