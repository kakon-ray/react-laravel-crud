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


Route::post('sendproduct', 'App\Http\Controllers\ReactDataReciver@submit_data');
Route::get('getproduct', 'App\Http\Controllers\ReactDataReciver@get_data');
Route::get('deleteProduct/{id}', 'App\Http\Controllers\ReactDataReciver@delete_data');

Route::get('getupateDatatoProduct/{id}', 'App\Http\Controllers\ReactDataReciver@get_update_data');
Route::post('updateProduct', 'App\Http\Controllers\ReactDataReciver@update_product');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
