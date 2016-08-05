<?php
function ds_landing_page() {
  return array(
    'label' => t('Landing Page'),
    'regions' => array(
      'titlearea' => t('Title Area'),
      'intro' => t('Intro'),
      'landingfree' => t('Landing Free Code'),
      'bottom' => t('Bottom') 
    ),
    // Add this line if there is a default css file.
    'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    'image' => TRUE,
  );
}
?>