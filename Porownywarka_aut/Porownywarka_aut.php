<?php

/**
 * 
 * Plugin Name: Porównywarka aut
 * Author: Leon P. Wojtek Sz.
 * Description: Plugin który pozwala porównać ceny eksploatacyjne samochodów
 * Version: 0.1.0
 * Text Domain: Porownywarka aut
 */

 if( !defined('ABSPATH')) die('NUHHH UHHH');


 if(!class_exists('PorownaniePlugin')) {
    class PorownaniePlugin {

        public function __construct() {
            define('PLUGIN_PATH', plugin_dir_path( __FILE__ ));
        }

        public function init() {
            include_once PLUGIN_PATH . 'includes/main.php'
        }
    }

    $porownaniePlugin = new PorownaniePlugin;

    $porownaniePlugin->init();
}