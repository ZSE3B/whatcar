<?php

function showBlocks() {
    wp_enqueue_script('custom-comparison-block', PLUGIN_URL . 'includes/js/comparison_block.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false);
    wp_enqueue_script('custom-add-block', PLUGIN_URL . 'includes/js/add_block.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false);
}
add_action('init', 'showBlocks');