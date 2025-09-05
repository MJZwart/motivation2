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
        Schema::create('villages', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->constrained();
            $table->string('name');
            $table->integer('villagers')->default(2);
            $table->integer('progress')->default(0);
            
            $table->integer('coins')->default(0);
            $table->integer('food')->default(100);
            $table->integer('material')->default(50);

            $table->integer('happiness')->default(50);
            $table->integer('farmer')->default(1);
            $table->integer('labourer')->default(1);
            $table->integer('toolsmith')->default(0);
            $table->integer('artist')->default(0);
            $table->integer('researcher')->default(0);
            $table->integer('merchant')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('village');
    }
};
