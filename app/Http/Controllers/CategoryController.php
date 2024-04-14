<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;

class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();
        return response()->json([
            "message"=>"success",
            "category"=>$categories,
        ]);
    }
    public function createCategory(CategoryRequest $request){
        $category = $request->validated();
        Category::create([
            'name'=>$category['name'],
        ]);
        return response()->json([
            'message' => 'inserted successfully',       
        ]);
    }

    public function updateCategory(CategoryRequest $request,$id){
        $category = $request->validated();
        Category::where('id',$id)->update([
            'name'=>$category['name'],
        ]);
        return response()->json([
            'message' => 'updated successfully',       
        ]);
    }

    public function deleteCategory($id){
        Category::where('id',$id)->delete();
        return response()->json([
            'message'=>"deleted successfully",
        ]);
    }
}
