<div class="<?php print $classes; ?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>


    <div class="inset dark page-title-container">
      <div class="grey-box">
        <?php print $titlearea; ?>    
      </div> <!-- /.grey-box -->
    </div> <!-- /.inset -->



    <div class="ds-intro container center-content case-study-intro">
      <div class="row">
      
        <?php if ($photocolumn): ?>
          <div class="four columns">
          <?php print $photocolumn; ?>
          </div>
        <?php endif; ?>

        <?php if ($authorcontent): ?>
          <div class="eight columns">
          <?php print $authorcontent; ?>
          </div>
        <?php endif; ?>
        
      </div>
    </div>
  

  <?php if ($bottom): ?>
    <div class="ds-bottom">
      <?php print $bottom; ?>
    </div>
  <?php endif; ?>




</div>

<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>