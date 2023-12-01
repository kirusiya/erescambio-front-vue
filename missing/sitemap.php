<?php 
header('Content-type: application/xml; charset=utf-8');

$curl = curl_init();

$web = 'https://www.erescambio.com/wp-json/wp/v2/ztudio_webs_sitemap/?web=' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

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

$sitemap = curl_exec($curl);

$sitemap_data = json_decode($sitemap, true);

curl_close($curl);

$urls_array = array();

echo '<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';

echo '<url>
        <loc>https://' . $_SERVER['HTTP_HOST'] . '</loc>
        <priority>1.00</priority>
      </url>';    

/************MENUS**************/

$urls_array[] = "";   
$urls_array[] = "/"; 
foreach ($sitemap_data as $url) {      
      $urltemp = explode("#", $url['menu_slug']);
      $url['menu_slug'] = $urltemp[0];
      
      if( strpos($url['menu_slug'], "http") === false && !in_array($url['menu_slug'], $urls_array) ){ 
        echo '<url>
                <loc>https://' . $_SERVER['HTTP_HOST'] . $url['menu_slug'] . '</loc>
                <priority>0.80</priority>
              </url>';      
        $urls_array[] = $url['menu_slug'];      
      }
      
      if( !empty($url['submenus']) ){
        foreach ($url['submenus'] as $suburl) {      
          $suburltemp = explode("#", $suburl['menu_slug']);
          $suburl['menu_slug'] = $suburltemp[0];
          
          if( strpos($suburl['menu_slug'], "http") === false && !in_array($suburl['menu_slug'], $urls_array) ){ 
              echo '<url>
                      <loc>https://' . $_SERVER['HTTP_HOST'] . $suburl['menu_slug'] . '</loc>
                      <priority>0.60</priority> 
                    </url>';      
              $urls_array[] = $suburl['menu_slug'];
          }
        }        
      }
    }
/************MENUS**************/ 
      

/************BLOG**************/
$urls_array = array("");   
$urls_array[] = "/";

foreach ($sitemap_data as $url) {      
    if ($url['post_status'] === 'publish') {
        echo '<url>
                <loc>https://' . $_SERVER['HTTP_HOST'] ."/". $url['post_name'] . '</loc>
                <priority>0.80</priority>
              </url>';
        $urls_array[] = $url['post_name']; 
    }
    
} 
/************BLOG**************/

echo '</urlset>';
