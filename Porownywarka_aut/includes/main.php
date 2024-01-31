<?php
add_shortcode('contact', 'show_mainPage');

function show_mainPage() {
    return PLUGIN_PATH . '/includes/template/';
}