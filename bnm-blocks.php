<?php
/**
 * Plugin Name:       BNM Blocks
 * Description:       A Collection of Blocks for Blogs, Newspapers and Magazine websites.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           1.0.3
 * Author:            ThemezHut
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bnm-blocks
 *
 * @package           bnm-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'BNMBT_URL', plugins_url( '/', __FILE__ ) );
define( 'BNMBT__PLUGIN_FILE', __FILE__ );
define( 'BNMBT__BLOCKS_DIRECTORY', 'build/' );
define( 'BNMBT__ADMIN_DIRECTORY', 'admin/' );
define( 'BNMBT__PLUGIN_DIR', plugin_dir_path( BNMBT__PLUGIN_FILE ) );
define( 'BNMBT__VERSION', '1.0.3' );

$src_directory = BNMBT__PLUGIN_DIR . 'src/blocks/';
$inc_directory = BNMBT__PLUGIN_DIR . 'inc/';

require_once $inc_directory . 'class-main.php';
require_once $inc_directory . 'css/class-css-utility.php';
require_once $inc_directory . 'css/blocks/class-post-block-1-css.php';
require_once $inc_directory . 'css/blocks/class-post-block-2-css.php';
require_once $inc_directory . 'css/blocks/class-post-block-sp-css.php';
require_once $inc_directory . 'css/blocks/class-post-slider-1-css.php';

include_once $inc_directory . 'template-functions.php';
include_once $src_directory . 'slider/view.php';
include_once $src_directory . 'posts/post-block-1/view.php';
include_once $src_directory . 'posts/post-block-2/view.php';
include_once $src_directory . 'posts/posts-ultra/view.php';
include_once $src_directory . 'posts/featured-posts-1/view.php';
include_once $src_directory . 'posts/featured-posts-2/view.php';