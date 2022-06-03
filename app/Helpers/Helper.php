<?php

if (!function_exists('str_limit')) {
    function str_limit($string)
    {
        preg_match_all('/(?<=\b)[a-z]/i',$string,$matches);
        return strtoupper(implode('.',$matches[0]));
    }
}


if (!function_exists('str_title')) {
    function str_title($string)
    {
        if (strlen($string) >= 20) {
            return substr($string, 0, 23).'...';
        }
        return $string;
    }
}