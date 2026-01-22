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

        // $currentPath = $request->route()->getName();
        $validated = $request->validate([
            'booking_title' => 'required|max:255',
            'booking_date' => 'required|date',
            'booking_time' =>'required|date_format:H:i',
            'notes' => 'required|string|max:1000',
        ]);

        $exists = Booking::where('booking_date', $validated['booking_date'])
            ->where('booking_time', $validated['booking_time'])
            ->whereIn('status', ['pending', 'completed'])
            ->exists();

        if($exists) {
            return back()->withErrors([
                'booking_date' => 'Sorry, this date is already booked choose another date.',
                'booking_time' => 'Sorry, this time is already booked choose another time'
            ]);
        }

        Booking::create([
            'user_id' => Auth::id(),
            'booking_title' => $validated['booking_title'],
            'booking_date' => $validated['booking_date'],
            'booking_time' => $validated['booking_time'],
            'notes' => $validated['notes'],
            'status' => 'pending'
        ]);

        return redirect('/view-bookings');
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

        $exists = Booking::where('booking_date', $validated['booking_date'])
            ->where('booking_time', $validated['booking_time'])
            ->whereIn('status', ['pending', 'completed'])
            ->where('id', '!=', $booking->id)
            ->exists();

        if($exists) {
            return back()->withErrors([
                'booking_date' => 'Sorry, this date is already booked choose another date.',
                'booking_time' => 'Sorry, this time is already booked choose another time'
            ]);
        }

        $booking->update($validated);

        return redirect('/view-bookings');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Booking $booking)
    {
        $booking->delete();

        return redirect('/view-bookings');
    }

    public function updateStatus(Request $request, Booking $booking) {
        $validated = $request->validate([
            'status' => 'required|in:pending,completed,cancelled'
        ]);

        $booking->update($validated);

        return redirect('/view-bookings');
    }
}
