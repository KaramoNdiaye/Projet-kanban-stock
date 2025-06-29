<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Magasin extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'adresse',
        'telephone',
    ];

    public function commandes()
    {
        return $this->hasMany(Commande::class);
    }

    public function produits()
    {
        return $this->belongsToMany(Modele::class, 'magasin_modele');
    }
}