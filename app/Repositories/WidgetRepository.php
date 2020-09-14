<?php


namespace App\Repositories;


use App\Models\Widget;
use Illuminate\Http\Request;

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
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Widget $widget
     */
    public function create(Request $request)
    {
        return $this->model->create($request->all());
    }

    /**
     * Update model record in database
     * @param array $input
     * @param \App\Models\Widget $widget
     * @return bool|void
     */
    public function update(Widget $widget, array $input)
    {
        return $widget->update($input);
    }

    /**
     * Delete model record in database
     * @param \App\Models\Widget $widget
     * @throws \Exception
     */
    public function delete(Widget $widget)
    {
        $widget->delete();
    }
}
