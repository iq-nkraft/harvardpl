<?php
function ds_authors() {
  return array(
    'label' => t('Authors'),
    'regions' => array(
      'titlearea' => t('Title Area'),
      'photocolumn' => t('Photo Column'),
      'authorcontent' => t('Author Content'),
      'bottom' => t('Bottom') 
    ),
    // Add this line if there is a default css file.
    'css' => TRUE,
    // Add this line if you're using DS 2.x for icon preview
    'image' => TRUE,
  );
}
?>