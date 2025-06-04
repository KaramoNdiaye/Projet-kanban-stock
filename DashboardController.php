<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commande;
use App\Models\Fournisseur;
use App\Models\Magasin;
use App\Models\Modele;

class DashboardController extends Controller
{
    public function index()
    {
        $totalCommandes = Commande::count();
        $totalFournisseurs = Fournisseur::count();
        $totalMagasins = Magasin::count();
        $totalModeles = Modele::count();

        return response()->json([
            'total_commandes' => $totalCommandes,
            'total_fournisseurs' => $totalFournisseurs,
            'total_magasins' => $totalMagasins,
            'total_modeles' => $totalModeles,
        ]);
    }
}