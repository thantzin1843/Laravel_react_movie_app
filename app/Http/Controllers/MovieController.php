<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\MovieRequest;

class MovieController extends Controller
{
    public function createMovie(MovieRequest $request){
        $movie = $request->validated();
        if($movie->hasfile('image')){
            $imageName = uniqid().'.'.$movie->file('image')->getClientOriginalExtension();
        }
        Movie::create([
            'title'=>$movie->title,
            'rating'=>$movie->rating,
            'description'=>$movie->description,
            'trailor'=>$movie->trailor,
            'time'=>$movie->time,
            'year'=>$movie->year,
            'production'=>$movie->production,
            'image'=>$imageName,
        ]);
        Storage::disk('public')->put($imageName,file_get_contents($movie->file('image')));

        return response()->json([
            'message'=>'inserted successfully',
        ]);
    }
}
