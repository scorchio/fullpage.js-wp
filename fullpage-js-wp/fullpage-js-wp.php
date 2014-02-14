<?php
/**
 * Plugin Name:       Fullpage.js
 * Description:       WP immplementation for Alvaro Trigo's Fullpage.js library.
 * Version:           1.0.0
 * GitHub Plugin URI: https://github.com/scorchio/fullpage.js-wp
 * GitHub Branch:     master
 */

add_action('init', 'fullpage_register_ctype');

function fullpage_register_ctype() {
  $labels = array(
    'menu_name' => _x('Fullpage', 'fullpage'),
  );

  $args = array(
    'labels' => $labels,
    'hierarchical' => TRUE,
    'description' => 'Fullpage',
    'supports' => array('title', 'editor'),
    'public' => TRUE,
    'show_ui' => TRUE,
    'show_in_menu' => TRUE,
    'show_in_nav_menus' => TRUE,
    'publicly_queryable' => TRUE,
    'exclude_from_search' => FALSE,
    'has_archive' => TRUE,
    'query_var' => TRUE,
    'can_export' => TRUE,
    'rewrite' => TRUE,
    'capability_type' => 'post'
  );

  register_post_type('fullpage', $args);
}

