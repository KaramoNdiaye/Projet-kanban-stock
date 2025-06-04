<?php

namespace App\Http\Controllers;

use App\Models\Fournisseur;
use Illuminate\Http\Request;

class FournisseurController extends Controller
{
    public function index()
    {
        return Fournisseur::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'contact' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        return Fournisseur::create($request->all());
    }

    public function show($id)
    {
        return Fournisseur::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $fournisseur = Fournisseur::findOrFail($id);
        $request->validate([
            'name' => 'string|max:255',
            'contact' => 'string|max:255',
            'email' => 'email|max:255',
        ]);

        $fournisseur->update($request->all());
        return $fournisseur;
    }

    public function destroy($id)
    {
        $fournisseur = Fournisseur::findOrFail($id);
        $fournisseur->delete();
        return response()->noContent();
    }
}