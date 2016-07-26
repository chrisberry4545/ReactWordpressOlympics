<?php
/* Proper way to enqueue scripts and styles */
function mytheme_custom_scripts(){

    // Register and Enqueue a Stylesheet
    // get_template_directory_uri will look up parent theme location
    wp_register_style( 'olympicscss', get_template_directory_uri() . '/OlympicsReact/dist/css/olympics.css');
    wp_enqueue_style( 'olympicscss' );

    // Register and Enqueue a Script
    // get_stylesheet_directory_uri will look up child theme location


    wp_register_script( 'react', get_template_directory_uri() . '/OlympicsReact/node_modules/react/dist/react.js', array(), null, true);
    wp_enqueue_script( 'react' );

    wp_register_script( 'reactdom', get_template_directory_uri() . '/OlympicsReact/node_modules/react-dom/dist/react-dom.js', array(), null, true);
    wp_enqueue_script( 'reactdom' );

    wp_register_script( 'header', get_template_directory_uri() . '/OlympicsReact/dist/components/header.js', array('react', 'reactdom', 'jquery'), null, true);
    wp_enqueue_script( 'header' );

    wp_register_script( 'sportsdetails', get_template_directory_uri() . '/OlympicsReact/dist/components/sport-details.js', array('react', 'reactdom', 'jquery'), null, true);
    wp_enqueue_script( 'sportsdetails' );

    wp_register_script( 'sport', get_template_directory_uri() . '/OlympicsReact/dist/components/sport.js', array('react', 'reactdom', 'jquery'), null, true);
    wp_enqueue_script( 'sport' );

    wp_register_script( 'main', get_template_directory_uri() . '/OlympicsReact/dist/components/app.js', array('jquery'), null, true);
    wp_enqueue_script( 'main' );

}

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

add_action('wp_enqueue_scripts', 'mytheme_custom_scripts');

?>
