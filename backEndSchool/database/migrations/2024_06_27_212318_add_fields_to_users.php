<?php

use App\Models\StudentParent;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('blood_type', [
                'A+',
                'A-',
                'B+',
                'B-',
                'O+',
                'O-',
                'AB+',
                'AB-'
            ]);
            $table->foreignIdFor(StudentParent::class)->constrained()->nullable()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('blood_type');
            $table->dropForeignIdFor(StudentParent::class);
        });
    }
};