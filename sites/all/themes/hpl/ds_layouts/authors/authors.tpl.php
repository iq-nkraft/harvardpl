<div class="<?php print $classes; ?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>


    <div class="inset dark page-title-container">
      <div class="grey-box">
        <?php print $titlearea; ?>    
      </div> <!-- /.grey-box -->
    </div> <!-- /.inset -->



    <div class="container author-content-wrapper">
      <div class="row">
      
        <?php if ($photocolumn): ?>
          <div class="four columns photo-column center-content">
          <?php print $photocolumn; ?>
          </div>
        <?php endif; ?>

        <?php if ($authorcontent): ?>
          <div class="seven offset-by-one columns author-content">
          <?php print $authorcontent; ?>
          </div>
        <?php endif; ?>
        
      </div>
        
      <div class="row iq-margin-top">
        <h2 class="section-heading">My Thoughts</h2>   
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