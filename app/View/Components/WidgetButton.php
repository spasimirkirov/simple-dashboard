<?php

namespace App\View\Components;

use App\Models\Widgets;
use Illuminate\View\Component;

class WidgetButton extends Component
{
    private $position;

    /**
     * Create a new component instance.
     *
     * @param int $position
     */
    public function __construct(int $position)
    {
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
        return view('components.widget-button')
            ->with(['position' => $this->position, 'widget' => $widget]);
    }
}
