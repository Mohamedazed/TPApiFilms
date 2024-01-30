<?php

use App\Http\Controllers\noteControlleur;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/calculer', function(){
    return view('calculer');
})->name('hom');
Route::post("/calculer", function (Request $request){
    $n1 = $request->input('n1');
    $n2 = $request->input('n2');
    $opt = $request->input('opt');
    $res = '';
    switch($opt){
        case '+':
            $res = $n1 + $n2;
            break;
        case '-':
            $res = $n1 - $n2;
            break;
        case '*':
            $res = $n1 * $n2;
            break;
        case '/':
            if ($n2 != 0) {
                $res = $n1 / $n2;
            } else {
                $res = "Division par zéro non autorisée";
            }
            break;
    }
    return view('calculer', ['res' => $res]);
});

