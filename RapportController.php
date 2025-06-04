<?php

namespace App\Http\Controllers;

use App\Models\Rapport;
use Illuminate\Http\Request;

class RapportController extends Controller
{
    public function index()
    {
        // Récupérer tous les rapports
        $rapports = Rapport::all();
        return response()->json($rapports);
    }

    public function show($id)
    {
        // Récupérer un rapport spécifique
        $rapport = Rapport::find($id);
        if (!$rapport) {
            return response()->json(['message' => 'Rapport non trouvé'], 404);
        }
        return response()->json($rapport);
    }

    public function generate(Request $request)
    {
        // Logique pour générer un rapport basé sur les données fournies
        // Exemple : $data = $request->input('data');
        // $rapport = Rapport::create($data);
        // return response()->json($rapport, 201);
    }

    public function destroy($id)
    {
        // Supprimer un rapport
        $rapport = Rapport::find($id);
        if (!$rapport) {
            return response()->json(['message' => 'Rapport non trouvé'], 404);
        }
        $rapport->delete();
        return response()->json(['message' => 'Rapport supprimé avec succès']);
    }
}