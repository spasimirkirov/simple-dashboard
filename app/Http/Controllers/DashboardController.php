<?php

namespace App\Http\Controllers;

use App\Models\Widgets;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Grab widgets from database and return them with a view
     */
    public function index()
    {
        return view('widgets.index');
    }

    /**
     * Show widget add page
     */
    public function add()
    {
    }

    /**
     * Widget create request processing
     * @param Request $request
     */
    public function save(Request $request)
    {
    }

    /**
     * Show widget edit page
     * @param int $position
     */
    public function edit(int $position)
    {
        $widget = Widgets::where('position', $position);
        return view('widgets.edit')->with(['position' => $position, 'widget' => $widget]);
    }


    /**
     * Widget update request processing
     * @param Request $request
     */
    public function update(Request $request)
    {
    }

    /**
     * Show widget remove page
     * @param int $id
     */
    public function remove(int $id)
    {
    }

    /**
     * Widget delete request processing
     * @param int $id
     */
    public function delete(int $id)
    {
    }

}
