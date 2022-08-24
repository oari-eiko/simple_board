<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Models\Board;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    // 紐づけるテーブル
    protected $table = 'users';

    /**
     * 代入可能カラム（createやupdateなどで）
     * ブラックリスト形式のguardedでも代用可
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * 取得対象外カラム
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * 取得時に型キャストするカラム
     */
    // protected $casts = [
    //     'email_verified_at' => 'datetime',
    // ];

    // 一対多のリレーション（ User <=> Board ）
    public function boards()
    {
        return $this->hasMany(Board::class);
    }
}
