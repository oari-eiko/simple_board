<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Board extends Model
{
    use HasFactory;

    // 紐づけるテーブル
    protected $table = 'boards';

    /**
     * 代入可能カラム（createやupdateなどで）
     * ブラックリスト形式のguardedでも代用可
     */
    protected $fillable = [
        'title',
        'caption',
        'looked_user_ids',
    ];

    /**
     * 取得対象外カラム
     */
    protected $hidden = [];

    // 一対多のリレーション（ User <=> Board ）
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
