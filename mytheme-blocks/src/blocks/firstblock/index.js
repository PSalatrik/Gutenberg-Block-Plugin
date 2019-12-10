var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType('mytheme-blocks/firstblock', { //prefix with unique prefix
	title: __('First Block', 'mytheme-blocks'), // use translation functions just like in PHP **internationalization module wp.i18n.__;(name, domain)
	description: __('Our First Block', 'mytheme-blocks'),
	category: 'layout',
	icon: {
		background: '#8E998F',
		foreground: '#fff',
		src: 'admin-site-alt'
	},
	keywords: [__('photo', 'mytheme-blocks' ), __('world', 'mytheme-blocks' )],
	edit: function(){
		return el('p', null, 'Editor'); 
	},
	save: function() {
		return el('p', null, 'Saved'); 
	}	
});