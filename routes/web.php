<?php

use App\Http\Controllers\BookingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', action: fn() => Inertia::render('welcome'));
Route::resource('bookings', BookingController::class)->except('index');
Route::get('/view-bookings', [BookingController::class, 'index'])->name('view.bookings');
Route::put('/bookings/{booking}/status', [BookingController::class, 'updateStatus'])->name('booking.update.status');
Route::get('/home', fn() => Inertia::render('Mainpages/home'))->middleware('auth');

require __DIR__.'/settings.php';
