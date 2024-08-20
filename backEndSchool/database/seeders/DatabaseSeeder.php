<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Noureddine DRIOUECH',
        //     'email' => 'nourddine@gmail.com',
        //     'password' => bcrypt('password1234'),
        //     'student_parent_id' => 1,
        // ]);
        // Admin::factory()->create([
        //     'firstname' => 'Admin',
        //     'lastname' => 'DRC',
        //     'date_of_birth' => fake()->date(),
        //     'address' => fake()->address(),
        //     'phone' => substr(fake()->phoneNumber(),10),
        //     'email' => 'Admin@gmail.com',
        //     'password' => bcrypt('AdminAdmin'),
        // ]);
        // Teacher::factory()->create([
        //     'firstname' => 'Teacher',
        //     'lastname' => 'DRC',
        //     'date_of_birth' => fake()->date(),
        //     'address' => fake()->address(),
        //     'phone' => substr(fake()->phoneNumber(),10),
        //     'email' => 'Teacher@gmail.com',
        //     'password' => bcrypt('TeacherTeacher'),
        // ]);
    }
}