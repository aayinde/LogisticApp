<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user/{email}', [App\Http\Controllers\UsersController::class, 'UsersDetail']);
Route::post('/user/signup', [App\Http\Controllers\UsersController::class, 'UsersSignUp']);
Route::post('/user/signin', [App\Http\Controllers\UsersController::class, 'UsersLogin']);

Route::get('/products', [App\Http\Controllers\Api\ProductController::class, 'index']);
Route::post('/products', [App\Http\Controllers\Api\ProductController::class, 'store']);

Route::get('/suppliers', [App\Http\Controllers\Api\SupplierController::class, 'index']);
Route::post('/suppliers', [App\Http\Controllers\Api\SupplierController::class, 'store']);

Route::get('/warehouses', [App\Http\Controllers\Api\WarehouseController::class, 'index']);
Route::post('/warehouses', [App\Http\Controllers\Api\WarehouseController::class, 'store']);
