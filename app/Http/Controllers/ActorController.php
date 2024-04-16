<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\ActorRequest;
use Illuminate\Support\Facades\Storage;

class ActorController extends Controller
{
    public function index(){
        $actors = Actor::orderBy('name')->paginate(3);
        return response()->json([
            'message'=>'retrieve success',
            'actors'=>$actors,
        ]);
    }

    public function createActor(ActorRequest $request){
        $actor = $request->validated();
        
        $imgName = uniqid().'.'.$request->file('image')->getClientOriginalExtension();
        Actor::create([
            'name'=>$actor['name'],
            'nation'=>$actor['nation'],
            'dob'=>$actor["dob"],
            'image'=>$imgName,
        ]);
        Storage::disk('public')->put($imgName,file_get_contents($request->file('image')));
        return response()->json([
            'message'=>'inserted successfully',
        ]);
    }

    public function deleteActor($id){
            $actor = Actor::findOrFail($id);
            $actor->delete();
            return response()->json([
                'message'=>'deleted successfully',
            ]);
    }
}
