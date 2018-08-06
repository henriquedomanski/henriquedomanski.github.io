<?php
/////////////////////////////////////////////////////
// READ SONG INFORMATION
// SHOUTCAST 1 & 2
// ICECAST 1 & 2
// own songtitleURL
// http://native.flashradio.info
//
// Copyright (C) SODAH | JOERG KRUEGER 
// http://www.sodah.de
/////////////////////////////////////////////////////
error_reporting(0);
header('Content-type: text/plain');
header('Pragma: public'); 
header('Expires: Sat, 26 Jul 1997 05:00:00 GMT');                  
header('Last-Modified: '.gmdate('D, d M Y H:i:s') . ' GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: pre-check=0, post-check=0, max-age=0');
header('Pragma: no-cache'); 
header('Expires: 0'); 


echo utf8_encode(htmlentities(html_entity_decode(readmeta($_POST['url']), ENT_QUOTES | ENT_HTML5,"ISO-8859-1")));


function readmeta($sURL){
	$aPathInfo = parse_url($sURL);
	$sHost = $aPathInfo['host'];
	$sPort = empty($aPathInfo['port']) ? 80 : $sPort = $aPathInfo['port'];
	$sPath = empty($aPathInfo['path']) ? '/' : $sPath = $aPathInfo['path'];
	$fp = fsockopen($sHost, $sPort, $errno, $errstr);
	if (!$fp):
		return "";
	else: 
		fputs($fp, "GET $sPath HTTP/1.0\r\n");
	fputs($fp, "Host: $sHost\r\n");
	fputs($fp, "Accept: */*\r\n");
	fputs($fp, "Icy-MetaData:1\r\n");
	fputs($fp, "Connection: close\r\n\r\n");
	$char = "";
	$info = "";
	while ($char != Chr(255)){	//END OF MPEG-HEADER
		if (@feof($fp) || @ftell($fp)>14096){ 
			exit;
		}
		$char = @fread($fp,1);
		$info .= $char;
	}
	fclose($fp);
	$info = str_replace("\n", "",$info);
	$info = str_replace("\r", "",$info);
	$info = str_replace("\n\r", "",$info);
	$info = str_replace("<BR>", "",$info);
	$info = str_replace(":", "=",$info);
	$info = str_replace("icy", "&icy",$info);
	$info = strtolower($info);
	parse_str($info, $output);
	if ($output['icy-br']!=""){
		$streambitrate = intval($output['icy-br']);
	}
	if ($output['icy-name']==""){
		return "";	
	} else {
		return utf8_encode($output['icy-name']);
	}
	endif;
}
?>