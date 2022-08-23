<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // ユーザーを生成
        User::create([
            'name' => 'test',
            'password' => Hash::make('testtest'),
        ]);
        User::create([
            'name' => 'my_user',
            'password' => Hash::make('my_pass'),
        ]);
    }
}
