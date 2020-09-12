@extends('layouts.app')

@section('content')
    <div class="row">
        @if (\Session::has('success'))
            <div class="col-12">
                <div class="alert alert-success">
                    <ul>
                        <li>{!! \Session::get('success') !!}</li>
                    </ul>
                </div>
            </div>
        @endif
        <x-switch-mode-button/>
    </div>
    <div class="row row-cols-1 row-cols-md-3">
        @for($i = 0; $i < 9; $i++)
                <x-widget-button position="{{ $i }}"/>
        @endfor
    </div>
@endsection
