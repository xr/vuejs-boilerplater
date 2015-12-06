define(['text!views/site_layout.html', 'Vue'], function (site_layout_v, Vue) {
	var Layout = Vue.extend({
		template: site_layout_v,
		data: function () {
			return {
				message: 'hello world'
			};
		}
	});

	return Layout;
});