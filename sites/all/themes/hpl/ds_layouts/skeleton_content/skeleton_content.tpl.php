<div class="<?php print $classes; ?> clearfix">

  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

  
    <div class="ds-intro container center-content">
      <div class="row">

        <?php

        if (isset($node->field_exclude_from_public_lists['und'][0]['value']) && $node->field_exclude_from_public_lists['und'][0]['value'] == 1 ) {
            print $intro;
        } else {
            echo '<div class="comment-jump icon-square"><a href="#comments">Jump to comments</a></div>';
            print $intro;
            echo '<div class="sharing-trigger icon-square">Share</div>';
        }
        ?>

        
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