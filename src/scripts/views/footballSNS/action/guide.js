/*!
 * 足球圈子-引导页 view:guide
 * 创建时间：2016-03-17
 * 作者：rongtao.lu
 */

var guideTpl = require('../tpl/guide.string');
require('../lib/swiper.js');

QApp.defineView('guide', {
	html: guideTpl,
	plugins: ['delegated'],
	bindActions: {
		'tap.gotoIndex': function(){
			QApp.open('index');
		},
		'tap.alert': function(){
			//alert(0);
		}
	},
	bindEvents: {
		'beforeShow': function() {
			var mySwiper = new Swiper('.swiper-container', {
			    direction: 'horizontal',
			    loop: false
			  });
		}
	}
});
