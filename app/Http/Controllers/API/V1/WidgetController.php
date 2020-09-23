<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\Widget;
use App\Repositories\WidgetRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class WidgetController extends Controller
{
    /**
     * @var WidgetRepositoryInterface
     */
    private $repository;
    private $rules;

    /**
     * WidgetController constructor.
     * @param WidgetRepositoryInterface $repository
     */
    public function __construct(WidgetRepositoryInterface $repository)
    {
        $this->repository = $repository;
        $this->rules = [
            'title' => 'required|max:255',
            'url' => 'required|url',
            'color' => 'required|in:red,blue,green',
            'position' => 'required|between:1,9'
        ];
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
        try {
            $request->validate($this->rules);

            $this->repository->create($request);
            return response()->json([
                'status' => 'success',
                'msg' => 'Okay',
            ], 201);

        } catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        }
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
        try {
            $request->validate($this->rules);
            $this->repository->update($widget, [
                'title' => $request->input('title'),
                'url' => $request->input('url'),
                'color' => $request->input('color'),
                'position' => $request->input('position'),
            ]);
            return response()->json([
                'status' => 'success',
                'msg' => 'Okay',
            ], 201);
        } catch (ValidationException $exception) {
            return response()->json([
                'status' => 'error',
                'msg' => 'Error',
                'errors' => $exception->errors(),
            ], 422);
        }
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
