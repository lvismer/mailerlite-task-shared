<?php

use App\Http\Controllers\Api\FieldController;
use App\Http\Controllers\Api\SubscriberController;
use App\Http\Controllers\Api\SubscriberFieldController;
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

Route::prefix('v1')->middleware('auth:sanctum')->group(function () {
    Route::resource('subscribers', SubscriberController::class, ['except' => ['create', 'show']]);
    Route::resource('fields', FieldController::class, ['except' => ['create', 'show']]);

    Route::post('subscribers/{subscriber}/field/{field}', [SubscriberFieldController::class, 'store'])->name('subscribers.fields.store');
    Route::delete('subscribers/{subscriber}/field/{field}', [SubscriberFieldController::class, 'destroy'])->name('subscribers.fields.destroy');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
