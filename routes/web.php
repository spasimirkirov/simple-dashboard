<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'index']);

Route::name('widget.')->group(function(){

    Route::get('/edit/{location_id}', [DashboardController::class, 'edit'])
        ->name('edit');
    Route::put('/update/{location_id}', [DashboardController::class, 'update'])
        ->name('update');

    Route::get('/remove/{location_id}', [DashboardController::class, 'remove'])
        ->name('remove');
    Route::delete('/delete/location_id', [DashboardController::class, 'delete'])
        ->name('delete');
});
