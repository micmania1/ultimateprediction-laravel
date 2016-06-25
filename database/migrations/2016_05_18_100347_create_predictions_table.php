<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePredictionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('predictions', function (Blueprint $table) {
            $table->increments('id');
			$table->dateTime('prediction_time');
			$table->integer('home_prediction')->unsigned();
			$table->integer('away_prediction')->unsigned();
			$table->integer('user_id')->unsigned();
			$table->integer('fixture_id')->unsigned();
			$table->integer('season_id')->unsigned();
            $table->timestamps();

			$table->foreign('user_id')->references('id')->on('users');
			$table->foreign('fixture_id')->references('id')->on('fixtures');
			$table->foreign('season_id')->references('id')->on('seasons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('predictions');
    }
}
