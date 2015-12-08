define(['jquery','vm/site_layout'], function ($, main) {
	describe('layout test', function () {
		describe('header part test', function () {
			it('should return the save text', function () {
				// arrange&act
				new main().$mount('#app-area');
				// assert
				expect($('header').text()).toEqual('this is header part');
			})
		})
	})
})