<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boards', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)               # 外部キー（ユーザー）
                  ->constrained()                           # 外部キー制約
                  ->onUpdate('cascade')
                  ->onDelete('cascade');                    # 外部キー削除時、該当レコード削除
            $table->string('title', 500);                   # タイトル
            $table->string('caption', 1000)->nullable();    # キャプション（説明書き）
            $table->json('looked_user_ids');                # 閲覧したユーザーのid集
            $table->timestamps();                           # 更新日/作成日
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('boards');
    }
};
