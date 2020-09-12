<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WidgetUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:255',
            'url' => 'required|max:255',
            'color' => 'required|in:#ff0000,#00ff00,#0000ff',
        ];
    }
}
