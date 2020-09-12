<?php


namespace App\Repositories;


use App\Http\Requests\WidgetUpdateRequest;
use App\Models\Widgets;

class WidgetRepository implements WidgetRepositoryInterface
{
    /**
     * @var Widgets $model
     */
    private $model;

    /**
     * WidgetRepository constructor.
     * @param $model
     */
    public function __construct(Widgets $model)
    {
        $this->model = $model;
    }

    /**
     * Find model record in database by position id
     * @param int $position_id
     * @return mixed
     */
    public function findOne(int $position_id)
    {
        return $this->model->where('position', $position_id)->first();
    }

    /**
     * Update model record in database
     * @param WidgetUpdateRequest $request
     * @param int $position_id
     */
    public function update(WidgetUpdateRequest $request, int $position_id)
    {
        /** @var Widgets $widget */
        $widget = $this->model->where('position', $position_id)->first();

        if (!$widget) {
            $this->model->create($request->all());
            return;
        }

        $widget->update($request->all());
    }

    /**
     * Delete model record in database
     * @param int $position_id
     * @throws \Exception
     */
    public function delete(int $position_id)
    {
        /** @var Widgets $widget */
        $widget = Widgets::where('position', $position_id)->first();
        $widget->delete();
    }
}
