<div class="<?php print $classes; ?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  
  <?php if ($intro): ?>  
    <div class="ds-intro container center-content">
      <div class="row">
        
        <?php print $intro; ?>
        
      </div>
    </div>
  <?php endif; ?>  
  

  <?php if ($skelcontent): ?>
    <div class="ds-content basic-page-content container">
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