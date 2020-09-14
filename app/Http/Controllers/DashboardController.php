<?php

namespace App\Http\Controllers;

use App\Models\Widget;
use App\Repositories\WidgetRepositoryInterface;
use Illuminate\Support\Facades\Session;

class DashboardController extends Controller
{
    private $widgetRepository;

    /**
     * DashboardController constructor.
     * @param $widgetRepository
     */
    public function __construct(WidgetRepositoryInterface $widgetRepository)
    {
        $this->widgetRepository = $widgetRepository;
    }

    /**
     * Grab widgets from database and return them with a view
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('dashboard.home');
    }

    /**
     * Show widget edit page
     * @param int $position
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(int $position)
    {
        /** @var Widget $widget */
        $widget = $this->widgetRepository->findOne($position);
        return view('widgets.edit')->with(['position' => $position, 'widget' => $widget]);
    }

    /**
     * Toggle editor's mode on and off
     * @return \Illuminate\Http\RedirectResponse
     */
    public function toggle_edit_mode()
    {
        Session::has('edit_mode') ? Session::forget('edit_mode') : Session::put('edit_mode', true);
        return redirect()->back();
    }

}
