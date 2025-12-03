<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $table = 'products';

     /** The attributes that are mass assignable. */
    protected $fillable = [
        'name',
        'description',
        'price',
        'category',
    ];
}
