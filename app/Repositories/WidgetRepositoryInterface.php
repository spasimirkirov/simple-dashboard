<?php

namespace App\Repositories;

use App\Http\Requests\WidgetUpdateRequest;

interface WidgetRepositoryInterface
{
    public function findOne(int $position_id);

    public function update(WidgetUpdateRequest $request, int $position_id);

    public function delete(int $position_id);
}
