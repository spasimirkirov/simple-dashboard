<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel/React Dashboard</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
<nav class="navbar navbar-expand-sm navbar-light bg-blue">
    <a class="navbar-brand" href="/"><img src="{{ asset('images/shkolo-logo.png') }}" alt="shkolo logo" width="150"></a>
</nav>
<div class="container-fluid mt-3">
    @yield('content')
</div>
</body>
<script src="https://kit.fontawesome.com/428dc76d73.js" crossorigin="anonymous"></script>
<script src="{{ asset('js/app.js') }}" ></script>
</html>
