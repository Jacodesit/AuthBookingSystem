<?php

namespace App\Providers;

use App\Models\Booking;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'name' => config('app.name'),
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::id(),
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                    ] : null,
                ];
            },
            'counts' => fn () => auth()->check() ? Booking::where('user_id', auth()->id())->selectRaw('
                    SUM(status = "pending") as pending_count,
                    SUM(status = "completed") as completed_count,
                    SUM(status = "cancelled") as cancelled_count
                ')
                ->first()
            : null,
        ]);
    }
}
