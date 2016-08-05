<div class="<?php print $classes; ?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>


    <div class="ds-titlearea center-content case-study-titlearea hero">
      
        <?php print $titlearea; ?>
        
    </div>  


    <div class="ds-intro container center-content case-study-intro">
      <div class="row">
      
        <?php print $intro; ?>
        <div class="sharing-trigger icon-square">Share</div>
      </div>
    </div>
  

  <?php if ($skelcontent): ?>
    <div class="ds-content container">
      <div class="row">
        <div class="offset-by-two eight columns">
          <?php print $skelcontent; ?>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <?php if ($bottom): ?>
    <div class="ds-bottom">
      <?php print $bottom; ?>
    </div>
  <?php endif; ?>




</div>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>