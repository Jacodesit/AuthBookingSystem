<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Carbon\Carbon;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bookings = auth()->user()->bookings()->latest()->get();
        return Inertia::render('Mainpages/bookings', [
            'bookings' => $bookings
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'booking_title' => 'required|max:255',
            'booking_date' => 'required|date',
            'booking_time' =>'required|date_format:H:i',
            'notes' => 'required|string|max:1000',
        ]);

        $validated['user_id'] = Auth::id();

        Booking::create($validated);

        return redirect('/home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Booking $booking)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Booking $booking)
    {
        $validated = $request->validate([
            'booking_title' => 'required|max:255',
            'booking_date' => 'required|date',
            'booking_time' =>'required|date_format:H:i',
            'notes' => 'required|string|max:1000',
        ]);

        $validated['booking_time'] = Carbon::createFromFormat(
            'H:i',
            $validated['booking_time']
        )->format('H:i');


        $booking->update($validated);

        return redirect('/view-bookings');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        //
    }

    public function updateStatus(Request $request, Booking $booking) {
        $validated = $request->validate([
            'status' => 'required|in:pending,completed,cancelled'
        ]);

        $booking->update($validated);

        return redirect('/view-bookings');
    }
}
