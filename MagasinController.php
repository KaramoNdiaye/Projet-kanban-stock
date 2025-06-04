<?php

namespace App\Http\Controllers;

use App\Models\Magasin;
use Illuminate\Http\Request;

class MagasinController extends Controller
{
    public function index()
    {
        return Magasin::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
        ]);

        $magasin = Magasin::create($request->all());

        return response()->json($magasin, 201);
    }

    public function show($id)
    {
        $magasin = Magasin::findOrFail($id);
        return response()->json($magasin);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'string|max:255',
            'location' => 'string|max:255',
        ]);

        $magasin = Magasin::findOrFail($id);
        $magasin->update($request->all());

        return response()->json($magasin);
    }

    public function destroy($id)
    {
        $magasin = Magasin::findOrFail($id);
        $magasin->delete();

        return response()->json(null, 204);
    }
}