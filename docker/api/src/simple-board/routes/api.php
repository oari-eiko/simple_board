<?php

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

// ログイン関連
use App\Http\Controllers\AuthController;
Route::controller(AuthController::class)->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('/login', 'login');             # ログイン
        Route::post('/logout', 'logout');           # ログアウト
        Route::get('/check', 'check');              # ログインしているか確認
    });
});

// ユーザー関連
use App\Http\Controllers\UserController;
Route::controller(UserController::class)->group(function () {
    Route::prefix('users')->group(function () {
        Route::get('/', 'index');                   # 全ユーザー取得
        Route::get('/searchName', 'searchName');    # ユーザー名を検索
        Route::post('/', 'store');                  # ユーザー登録
    });
});

// 掲示板関連
use App\Http\Controllers\BoardController;
Route::controller(BoardController::class)->group(function () {
    Route::prefix('board')->group(function () {
        // ログイン必須のルーティング
        Route::middleware('auth:sanctum')->group(function () {
            Route::get('/', 'index');         # 全掲示板取得
        });
    });
});


// sample
// use Illuminate\Http\Request;
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
