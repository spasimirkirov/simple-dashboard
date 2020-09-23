<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/widgets', '\App\Http\Controllers\API\V1\WidgetController@index');
Route::post('/widgets', '\App\Http\Controllers\API\V1\WidgetController@store');

Route::put('/widgets/{widget}', '\App\Http\Controllers\API\V1\WidgetController@update');
Route::delete('/widgets/{widget}', '\App\Http\Controllers\API\V1\WidgetController@destroy');
