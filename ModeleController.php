<?php

namespace App\Http\Controllers;

use App\Models\Modele;
use Illuminate\Http\Request;

class ModeleController extends Controller
{
    public function index()
    {
        return Modele::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|integer|exists:categories,id',
        ]);

        return Modele::create($request->all());
    }

    public function show($id)
    {
        return Modele::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'category_id' => 'sometimes|required|integer|exists:categories,id',
        ]);

        $modele = Modele::findOrFail($id);
        $modele->update($request->all());

        return $modele;
    }

    public function destroy($id)
    {
        $modele = Modele::findOrFail($id);
        $modele->delete();

        return response()->noContent();
    }
}