<?php

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
        Schema::create('movies', function (Blueprint $table) {
            // 'title','rating','description','image','trailor','time','year','production'
            $table->id();
            $table->string('title');
            $table->string('rating');
            $table->string('description');
            $table->string('image');
            $table->string('trailor');
            $table->string('time');
            $table->string('year');
            $table->string('production');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
