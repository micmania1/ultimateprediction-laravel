<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$appRoute = function() {
	return view('app');
};

$homeRoute = function() {
	return redirect('');
};

// Frontend app routes
Route::get('/', $appRoute);
Route::get('signup', $appRoute);
Route::get('lostpassword', $appRoute);
Route::get('predictions', $appRoute);

// Authentication routes...
Route::get('login', $homeRoute);
Route::get('logout', $homeRoute);
Route::post('login', 'Auth\AuthController@postLogin');
Route::post('signup', 'Auth\AuthController@postRegister');
