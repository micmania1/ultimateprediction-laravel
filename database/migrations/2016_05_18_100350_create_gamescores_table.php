<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamescoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gamescores', function (Blueprint $table) {
            $table->increments('id');
			$table->integer('points');
			$table->string('status');
			$table->integer('prediction_id')->unsigned();
			$table->integer('user_id')->unsigned();
			$table->integer('season_id')->unsigned();
			$table->integer('fixture_id')->unsigned();
            $table->timestamps();

			$table->foreign('prediction_id')->references('id')->on('predictions');
			$table->foreign('user_id')->references('id')->on('users');
			$table->foreign('season_id')->references('id')->on('seasons');
			$table->foreign('fixture_id')->references('id')->on('fixtures');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('gamescores');
    }
}
