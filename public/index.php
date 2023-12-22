<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <style>
    .loader {
        height: 3000px;
      }
      .loader img {
        width: 100%;
        height: 3000px;
      }
      </style>
      <link rel="preconnect" href="https://connect.facebook.net">
      <link rel="preconnect" href="https://www.google-analytics.com">
      <link rel="preconnect" href="https://www.googletagmanager.com">
      <link rel="dns-prefetch" href="https://connect.facebook.net">
      <link rel="dns-prefetch" href="https://www.google-analytics.com">
      <link rel="dns-prefetch" href="https://www.googletagmanager.com">
	  
      <link href="/css/app.b1a9a82077.css" rel="preload" as="style">
      <link href="/css/chunk-vendors.1a06b43d77.css" rel="preload" as="style">
	  
      <link href="/js/app.9f163af677.js" rel="preload" as="script">
      <link href="/js/chunk-vendors.fc1c89fd77.js" rel="preload" as="script">
	  
      <link href="/css/chunk-vendors.1a06b43d77.css" rel="stylesheet">
      <link href="/css/app.b1a9a82077.css" rel="stylesheet">
	  
      <link rel="manifest" href="/manifest.json"><meta name="theme-color" content="#4DBA87">
      <meta name="apple-mobile-web-app-capable" content="no">
      <meta name="apple-mobile-web-app-status-bar-style" content="default">

      <?php
      $curl = curl_init();
      
      $web = 'https://www.erescambio.com/wp-json/wp/v2/ztudio_webs_metas2/?web=' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];//produccion

      //$web = 'https://erescambio.kiwop.es/wp-json/wp/v2/ztudio_webs_metas2/?web=' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];//desarrollo

      curl_setopt_array($curl, array(
        CURLOPT_URL => $web,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array(
          'Cookie: PHPSESSID=vmc76acilqu3r71kjgffk2tmm6; tk_ai=woo%3AwPk8AKTc56%2BKp7aBHeazifWs'
        ),
      ));
      
      $metas = curl_exec($curl);
      
      $metas = json_decode($metas,true);
      
      curl_close($curl);
      ?>

      <meta name="meta-web" content="<?php echo $web;?>">

      <!-- Primary Meta Tags -->
      <title><?php echo stripslashes($metas['google_title']);?></title>
      <meta name="title" content='<?php echo stripslashes($metas['google_title']);?>'>
      <meta name="description" content='<?php echo stripslashes($metas['google_description']);?>'>
      <link rel="canonical" href="<?php echo $metas['canonical'];?>" /> 
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="<?php echo $metas['url'];?>">
      <meta property="og:title" content='<?php echo stripslashes($metas['google_title']);?>'>
      <meta property="og:description" content='<?php echo stripslashes($metas['google_description']);?>'> 
      <meta property="og:image" content="<?php echo $metas['imagen'];?>">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="<?php echo $metas['url'];?>"> 
      <meta property="twitter:title" content='<?php echo stripslashes($metas['google_title']);?>'>
      <meta property="twitter:description" content='<?php echo stripslashes($metas['google_description']);?>'>
      <meta property="twitter:image" content="<?php echo $metas['imagen'];?>">
      
      <link rel="icon" type="image/png" sizes="32x32" href="<?php echo $metas['favicon'];?>">
      <link rel="icon" type="image/png" sizes="16x16" href="<?php echo $metas['favicon'];?>"> 
      
      <meta name="robots" content="<?php echo $metas['index'];?>,<?php echo $metas['follow'];?>"> 
      
      <?php
      if( !empty($metas['header_scripts'])) {
        echo $metas['header_scripts'];
      }
      ?> 
    </head>
    <body>
      <?php
      if( !empty($metas['body_scripts'])) {
        echo $metas['body_scripts'];
      }
      ?>
      <div class="loader">
        <img src="/img/loader.svg" width="100%" height="3000">
      </div>
      <div id="app"></div>
      
      <script src="/js/chunk-vendors.fc1c89fd77.js"></script>

      <script src="/js/app.9f163af677.js"></script>
      
      <?php

      if( !empty($metas['footer_scripts'])) {  
        echo $metas['footer_scripts'];
      }
      
      ?>     
    </body>
</html>