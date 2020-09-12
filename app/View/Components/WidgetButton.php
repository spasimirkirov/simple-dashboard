<?php

namespace App\View\Components;

use App\Models\Widgets;
use Illuminate\Http\Request;
use Illuminate\View\Component;

class WidgetButton extends Component
{
    private $edit_mode;
    private $position;

    /**
     * Create a new component instance.
     *
     * @param Request $request
     * @param int $position
     */
    public function __construct(Request $request, int $position)
    {
        $this->edit_mode = $request->has('edit_mode');
        $this->position = $position;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        /** @var Widgets $widget */
        $widget = \App\Models\Widgets::where('position', $this->position)
            ->first();
        return view('components.widget-button')->with([
            'position' => $this->position,
            'widget' => $widget,
            'edit_mode' => $this->edit_mode
        ]);
    }
}
