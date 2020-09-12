@extends('layouts.app')

@section('content')
    <div class="row row-cols-3">
        @for($i = 0; $i < 9; $i++)
            <div class="col p-3">
                <x-widget-button position="{{ $i }}"/>
            </div>
        @endfor
    </div>
@endsection
