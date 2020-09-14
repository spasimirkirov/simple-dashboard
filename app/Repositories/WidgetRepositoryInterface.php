<?php

namespace App\Repositories;


use App\Models\Widget;
use Illuminate\Http\Request;

interface WidgetRepositoryInterface
{
    public function findOne(int $position_id);

    public function create(Request $request);

    public function update(Widget $widget, array $input);

    public function delete(Widget $widget);
}
