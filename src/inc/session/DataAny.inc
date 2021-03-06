<?php
/*****************************************************************************
 *  Name        : DataAny.inc
 *  function    : 汎用情報
 *
 ****************************************************************************/

class DataAny
{
	// 初期変数
	var $value;

##**************************************************************************
##	コンストラクタ
##**************************************************************************
	function __construct(){
		//初期化
		$this->value = array();
	}

##**************************************************************************
##	初期化
##**************************************************************************
	function initValue(){
		$this->DataAny();
	}

##**************************************************************************
##	GET,SET
##**************************************************************************
	//$keyは名前付配列のkey
	function setValue($key, $val=null){
		if(is_scalar($key)){
			$this->value[$key] = $val;
		}else if(is_array($key)){
			$this->value = $key;
		}
	}

	function getValue($key=null){
		if(is_null($key)){
			return $this->value;
		}else if(is_scalar($key)){
			return $this->value[$key];
		}
	}
}
?>
