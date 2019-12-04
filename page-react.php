<?php
/**
 * Template Name: React Template
 */
get_header();
?>

<main id="site-content" role="main">
	<article class="post-2 page type-page status-publish hentry">
		<?php get_template_part( 'template-parts/entry-header' ); ?>
		<div class="post-inner thin">
			<div class="entry-content">				

				<div id="react-app"></div><!-- #react-app -->

			</div><!-- .entry-content -->
		</div><!-- .post-inner -->
	</article><!-- .post -->
</main><!-- #site-content -->

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>
<?php get_footer(); ?>