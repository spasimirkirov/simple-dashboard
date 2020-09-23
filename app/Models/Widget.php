<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Widget extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'url', 'color', 'position',
    ];

    public $rules = [
        'title' => 'required|max:255',
        'url' => 'required|url',
        'color' => 'required|in:red,blue,green',
        'position' => 'required|between:1,9'
    ];
}
