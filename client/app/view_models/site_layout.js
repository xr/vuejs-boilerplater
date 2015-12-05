define(['text!views/site_layout.html'], function (site_layout_v) {
	function App() {
		console.log('Hello tpl', site_layout_v);
	}

	return App;
});