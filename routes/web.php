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

Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/switch_mode', [DashboardController::class, 'toggle_edit_mode'])->name('toggle_edit_mode');

Route::name('widget.')->group(function(){

    Route::get('/edit/{location_id}', [DashboardController::class, 'edit'])
        ->name('edit');

    Route::put('/update/{location_id}', [DashboardController::class, 'update'])
        ->name('update');

    Route::delete('/delete/{location_id}', [DashboardController::class, 'delete'])
        ->name('delete');
});


