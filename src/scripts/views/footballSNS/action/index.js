/*!
 * 足球圈子-首页 view:index
 * 创建时间：2016-03-19
 * 作者：rongtao.lu
 */

var indexTpl = require('../tpl/index.string');

QApp.defineView('index', {
	html: indexTpl,
	plugins: ['delegated'],
	bindActions: {

	},
	bindEvents: {
		'beforeShow': function() {

		}
	}
});
