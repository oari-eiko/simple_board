<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    /**
     * 全掲示板を取得
     */
    public function index()
    {
        return response()->json(Board::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // public function create()
    // {
    //     //
    // }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function store(Request $request)
    // {
    //     //
    // }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  \App\Models\Board  $board
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(Board $board)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  *
    //  * @param  \App\Models\Board  $board
    //  * @return \Illuminate\Http\Response
    //  */
    // public function edit(Board $board)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @param  \App\Models\Board  $board
    //  * @return \Illuminate\Http\Response
    //  */
    // public function update(Request $request, Board $board)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  \App\Models\Board  $board
    //  * @return \Illuminate\Http\Response
    //  */
    // public function destroy(Board $board)
    // {
    //     //
    // }
}
