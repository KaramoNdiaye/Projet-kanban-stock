<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function index()
    {
        $commandes = Commande::all();
        return response()->json($commandes);
    }

    public function store(Request $request)
    {
        $request->validate([
            'fournisseur_id' => 'required|exists:fournisseurs,id',
            'magasin_id' => 'required|exists:magasins,id',
            'produit' => 'required|string',
            'quantite' => 'required|integer|min:1',
        ]);

        $commande = Commande::create($request->all());
        return response()->json($commande, 201);
    }
}