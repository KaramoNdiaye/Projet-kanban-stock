<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FournisseurController;
use App\Http\Controllers\ModeleController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\MagasinController;
use App\Http\Controllers\RapportController;

// Auth routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Dashboard routes
Route::get('/dashboard', [DashboardController::class, 'index']);

// Fournisseur routes
Route::apiResource('fournisseurs', FournisseurController::class);

// Modele routes
Route::apiResource('modeles', ModeleController::class);

// Commande routes
Route::apiResource('commandes', CommandeController::class);

// Magasin routes
Route::apiResource('magasins', MagasinController::class);

// Rapport routes
Route::get('/rapports', [RapportController::class, 'index']);

// Vendor route
Route::get('/vendor/nom-du-projet', function () {
    // Your code here
});