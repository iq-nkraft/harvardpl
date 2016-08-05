<?php


if (isset($element['#object'])) {
  $n = $element['#object'];

  //get the URLs
  $url = url('node/' . $n->nid, array('absolute' => TRUE));

  if (!empty($n->field_subtitle['und'][0]['safe_value'])) {
    $title = urlencode($n->field_subtitle['und'][0]['safe_value']);
  }
  else {
    $title = urlencode($n->title);
  }

  $url = urlencode($url);
  $summary = urlencode(strip_tags($n->body['und'][0]['summary']));

  $temp = array();

  $temp['sm']['twitter'] = 'https://twitter.com/home?status=' . $title . '%20' . $url;
  $temp['sm']['facebook'] = 'https://www.facebook.com/sharer/sharer.php?u=' . $url;
  $temp['sm']['linkedin'] = 'https://www.linkedin.com/shareArticle?mini=true&url=' . $url . '&title=' . $title . '&summary=' . $summary;

  $smout = '<div class="dyn-socialmedia">';
  $smout .= '<span class="shareThis">Share this article</span>';

  foreach ($temp['sm'] as $key => $smvar) {
    $smout .= "<a href=\"$smvar\" class=\"sm-share sm-$key\">$key</a>";
  }

  $smout .= '</div>';

  print $smout;
}
