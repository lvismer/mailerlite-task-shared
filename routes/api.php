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
    Route::get('subscribers', [SubscriberController::class, 'index'])->name('subscribers.index');
    Route::get('subscribers/{subscriber}', [SubscriberController::class, 'show'])->name('subscribers.show');
    Route::post('subscribers', [SubscriberController::class, 'store'])->name('subscribers.store');
    Route::put('subscribers/{subscriber}', [SubscriberController::class, 'update'])->name('subscribers.update');
    Route::delete('subscribers/{subscriber}', [SubscriberController::class, 'destroy'])->name('subscribers.destroy');
    Route::post('subscribers/{subscriber}/field/{field}', [SubscriberFieldController::class, 'store'])->name('subscribers.fields.store');
    Route::delete('subscribers/{subscriber}/field/{field}', [SubscriberFieldController::class, 'destroy'])->name('subscribers.fields.destroy');

    Route::get('fields', [FieldController::class, 'index'])->name('fields.index');
    Route::get('fields/{field}', [FieldController::class, 'show'])->name('fields.show');
    Route::post('fields', [FieldController::class, 'store'])->name('fields.store');
    Route::put('fields/{field}', [FieldController::class, 'update'])->name('fields.update');
    Route::delete('fields/{field}', [FieldController::class, 'destroy'])->name('fields.destroy');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});
