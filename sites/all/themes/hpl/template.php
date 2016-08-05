<?php

/**
 * @file
 * template.php
 */


function iqskeleton_form_comment_form_alter(&$form, &$form_state) {

  $form['actions']['submit']['#value'] = t('Post Comment');

} 


function hpl_preprocess_html(&$vars) {
  $path = drupal_get_path_alias();
  $aliases = explode('/', $path);

  foreach($aliases as $alias) {
    $vars['classes_array'][] = drupal_clean_css_identifier($alias);
  } 
}

function hpl_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    // $form['search_block_form']['#title'] = t('Search'); Change the text on the label element
    // $form['search_block_form']['#title_display'] = 'invisible';  Toggle label visibilty
    //$form['search_block_form']['#size'] = 40;  define size of the textfield
    //$form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    //$form['actions']['submit']['#value'] = t('GO!'); Change the text on the submit button

    // Add extra attributes to the text box
    //$form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    //$form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    //$form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('search this website');
  }
} 