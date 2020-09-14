<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Widget;
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
        $widgets = $this->repository->create($request);
        return response()->json($widgets, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Widget $widget
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Widget $widget)
    {
        $input = [
            'title' => $request->input('title'),
            'url' => $request->input('url'),
            'color' => $request->input('color'),
            'position' => $request->input('position'),
        ];
        $widget = $this->repository->update($widget, $input);
        return response()->json($widget);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Widget $widget
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Widget $widget)
    {
        $this->repository->delete($widget);
        return response()->json(['message' => 'success'], 204);
    }
}
