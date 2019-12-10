<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
 
    $parent_style = 'twentytwenty-style'; 
    
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    
    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        time() //wp_get_theme()->get('Version')
    );

	wp_enqueue_script(
        'my-theme-frontend',
        get_stylesheet_directory_uri() . '/build/index.js',
        ['wp-element', 'wp-components'],
        time(), //For production use wp_get_theme()->get('Version')        
        true
      );
  
}

// Add Votes to Custom Meta Fields
add_action( 'graphql_register_types', function() {
    register_graphql_field( 'Post', 'votes', [
       'type' => 'Number',
       'description' => __( 'The number of votes', 'wp-graphql' ),
       'resolve' => function( $post ) {
         $votes = get_post_meta( $post->ID, 'votes', true );
         return ! empty( $votes ) ? $votes : 0;
       }
    ] );
  } );