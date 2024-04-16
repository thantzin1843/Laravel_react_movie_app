<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActorController;
use App\Http\Controllers\CategoryController;

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
//category
Route::get('/category/list',[CategoryController::class,'index']); // get category
Route::post('/create/category',[Categorycontroller::class,'createCategory']);
Route::post('/category/update/{id}',[Categorycontroller::class,'updateCategory']);
Route::get('/category/delete/{id}',[CategoryController::class,'deleteCategory']);

//actor
Route::get('/actor/list',[ActorController::class,'index']);
Route::post('/create/actor',[ActorController::class,'createActor']);
Route::get('/actor/delete/{id}',[ActorController::class,'deleteActor']);