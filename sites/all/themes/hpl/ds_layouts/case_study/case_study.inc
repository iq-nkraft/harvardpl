<?php
function ds_case_study() {
  return array(
    'label' => t('Case Study'),
    'regions' => array(
      'titlearea' => t('Title Area'),
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