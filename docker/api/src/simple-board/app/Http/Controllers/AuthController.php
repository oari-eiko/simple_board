<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * ログイン
     */
    public function login(Request $request)
    {
        // ユーザーを認証（持続ログイン）
        if (Auth::attempt($request->only(['name', 'password']), true)) {
            $request->session()->regenerate();      // セッションを再生成
            return response()->json([
                'status' => 200,
                'message' => '認証に成功しました。',
            ]);
        
        // 認証できなかった場合
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'ユーザーの認証に失敗しました。',
            ]);
        }
    }

    /**
     * ログアウト
     */
    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json([
            'message' => 'ユーザーをログアウトしました。'
        ]);
    }

    /**
     * チェック
     * return -> ログインしている場合はtrue, してない場合はfalseを返す
     */
    public function check()
    {
        $loggedIn = Auth::check();
        return response()->json([
            'loggedIn' => $loggedIn,
        ]);
    }
}
