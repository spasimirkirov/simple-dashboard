<?php


namespace App\Repositories;


use App\Http\Requests\WidgetUpdateRequest;
use App\Models\Widget;

class WidgetRepository implements WidgetRepositoryInterface
{
    /**
     * @var Widget $model
     */
    private $model;

    /**
     * WidgetRepository constructor.
     * @param $model
     */
    public function __construct(Widget $model)
    {
        $this->model = $model;
    }

    public function findAll()
    {
        return $this->model->all();
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
     * @return Widget
     */
    public function create(WidgetUpdateRequest $request, int $position_id)
    {
        return $this->model->create($request->all());
    }

    /**
     * Update model record in database
     * @param WidgetUpdateRequest $request
     * @param int $position_id
     * @return bool|void
     */
    public function update(WidgetUpdateRequest $request, int $position_id)
    {
        /** @var Widget $widget */
        $widget = $this->model->where('position', $position_id)->first();
        return $widget->update($request->all());
    }

    /**
     * Delete model record in database
     * @param int $position_id
     * @throws \Exception
     */
    public function delete(int $position_id)
    {
        /** @var Widget $widget */
        $widget = Widget::where('position', $position_id)->first();
        $widget->delete();
    }
}
