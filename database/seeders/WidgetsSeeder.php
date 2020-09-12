<?php

namespace Database\Seeders;

use App\Models\Widgets;
use Illuminate\Database\Seeder;

class WidgetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 9;$i++){
            Widgets::create([
                'position' => $i,
                'title' => 'Title #'. $i,
                'url' => '/',
                'color' => 'red'
            ]);
        }
    }
}
