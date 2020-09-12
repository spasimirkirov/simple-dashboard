<?php

namespace App\View\Components;

use Illuminate\Support\Facades\Session;
use Illuminate\View\Component;
use Illuminate\View\View;

class SwitchModeButton extends Component
{
    /**
     * Get the view / contents that represent the component.
     *
     * @return View|string
     */
    public function render()
    {
        return view('components.switch-mode-button');
    }
}
