<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Board;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Board>
 */
class BoardFactory extends Factory
{
    // 紐づくモデル
    protected $model = Board::class;
    
    /**
     * ファクトリー関数
     */
    public function definition()
    {
        return [
            'user_id' => fake()->numberBetween(1,2),
            'title' => fake()->sentence(),
            'caption' => fake()->text(200),
            'looked_user_ids' => '[{}]',
        ];
    }
}
