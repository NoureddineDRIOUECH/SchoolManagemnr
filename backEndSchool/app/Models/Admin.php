<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User;
use Laravel\Sanctum\HasApiTokens;

class Admin extends User
{
    use HasFactory, SoftDeletes,HasApiTokens;

    protected $appends = ['role'];
    public function getRoleAttribute(){
        return 'admin';
    }
}
