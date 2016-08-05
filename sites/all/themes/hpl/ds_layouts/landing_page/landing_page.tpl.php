<div class="<?php print $classes; ?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>


    <?php if ($titlearea): ?>
    <div class="ds-landing-titlearea center-content hero iq-margin-bottom">
      
        <?php print $titlearea; ?>
        
    </div>  
    <?php endif; ?>

    <?php if ($intro): ?>
    <div class="ds-landing-intro container center-content">
      <div class="row">
      
        <?php print $intro; ?>

      </div>
    </div>
    <?php endif; ?>
  

  <?php if ($landingfree): ?>
    <div class="ds-landing-free">
      
      <?php print $landingfree; ?>

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