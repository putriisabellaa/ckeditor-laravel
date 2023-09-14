<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TryController extends Controller
{
    //
    public function index(Request $request){
        dd($request->all());
        return view('welcome');
    }
}
