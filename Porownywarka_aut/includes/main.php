<?php
add_shortcode('carPairing', 'show_mainPage');

function show_mainPage() {
    include PLUGIN_PATH . '/includes/template/comparison.php';
}