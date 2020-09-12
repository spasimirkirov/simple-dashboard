<?php

namespace App\Providers;

use App\Repositories\WidgetRepository;
use App\Repositories\WidgetRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(WidgetRepositoryInterface::class, WidgetRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
    }
}
