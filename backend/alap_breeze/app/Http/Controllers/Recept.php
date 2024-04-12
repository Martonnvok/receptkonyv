<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Recept extends Controller
{
    public function show(){
        $recept = DB::table("recepts")
        ->select("recepts.nev","recepts.kep_eleresi_ut","recepts.leiras")
        ->get();
        return $recept;
    }
}
