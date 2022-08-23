<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * 全ユーザーを取得
     */
    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * 指定ユーザー名のレコードを取得
     */
    public function searchName(Request $request)
    {
        $username = $request->query('name');
        $user = User::where('name', $username)->first();
        return response()->json($user);
    }

    /**
     * ユーザーを登録
     */
    public function store(Request $request)
    {
        // ユーザー名とパスワードを取得
        $username = $request['name'];
        $password = $request['password'];
        // 新規ユーザーを作成
        if (!empty($username) && !empty($password)) {
            $new_user = User::create([
                'name' => $username,
                'password' => Hash::make($password),       // ハッシュ化して登録
            ]);
            return response()->json($new_user);
        } else {
            return response()->json([]);
        }
    }
    /**
     * ユーザー認証
     */
    public function auth(Request $request)
    {
        // ユーザー名とパスワードを取得
        $username = $request->query('name');
        $password = $request->query('pw');
        if (!empty($username) && !empty($password)) {
            // 該当ユーザー名のレコード取得
            $user = User::where('name', $username)->first();
            // パスワードをチェック
            if (Hash::check($password, $user['password'])) {
                return response()->json($user);
            } else {
                return response()->json([]);
            }
        } else {
            return response()->json([]);
        }
    }
}
