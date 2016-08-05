<?php
function ds_skeleton_content() {
  return array(
    'label' => t('Skeleton Content'),
    'regions' => array(
      'intro' => t('Intro'),
      'skelcontent' => t('Content'),
      'bottom' => t('Bottom') 
    ),
    // Add this line if there is a default css file.
    'css' => FALSE,
    // Add this line if you're using DS 2.x for icon preview
    'image' => TRUE,
  );
}
?>