<?php 
/**
*Plugin Name: mytheme-blocks
*Plugin URI: https://oldphilly.com/
*Author: Old Philly
*Author URI: https://oldphilly.com/
*/

if( !defined( 'ABSPATH' ) ) { //avoid accessing this file directly in the browser
	exit;
}

function mytheme_blocks_register_block_type($block, $options = array() ) {
	register_block_type(
		'mytheme-blocks/' .$block,
		array_merge(
			array(
				'editor_script' => 'mytheme-blocks-editor-script', // Only enqueued on the editor page
			)
			$options
		)
	);
}

function mytheme_blocks_register(){

	wp_register_script(
		'mytheme-blocks-editor-script',
		 plugins_url('dist/editor.js', __FILE__),
		 array(
		 	'wp-blocks', 'wp-i18n', 'wp-element')
	);

	mytheme_blocks_register_block_type('firstblock');
	mytheme_blocks_register_block_type('secondblock', array() );


}

add_action('init', 'mytheme_blocks_register');