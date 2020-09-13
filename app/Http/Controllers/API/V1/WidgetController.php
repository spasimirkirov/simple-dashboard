<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\WidgetUpdateRequest;
use App\Repositories\WidgetRepositoryInterface;
use Illuminate\Http\Request;

class WidgetController extends Controller
{
    /**
     * @var WidgetRepositoryInterface
     */
    private $repository;

    /**
     * WidgetController constructor.
     * @param WidgetRepositoryInterface $repository
     */
    public function __construct(WidgetRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $widgets = $this->repository->findAll();
        return response()->json($widgets, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $widgets = $this->repository->update($request);
        return response()->json($widgets, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param WidgetUpdateRequest $request
     * @param int $position_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(WidgetUpdateRequest $request, int $position_id)
    {
        $widget = $this->repository->update($request, $position_id);
        return response()->json($widget);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $position_id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(int $position_id)
    {
        $this->widgetRepository->delete($position_id);
        return response()->json(['message' => 'success'], 204);
    }
}
