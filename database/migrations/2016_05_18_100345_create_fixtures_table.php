<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFixturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fixtures', function (Blueprint $table) {
            $table->increments('id');
			$table->dateTime('kickoff');
			$table->integer('home_score')->unsigned();
			$table->integer('away_score')->unsigned();
			$table->boolean('complete');
			$table->integer('hometeam_id')->unsigned();
			$table->integer('awayteam_id')->unsigned();
			$table->integer('season_id')->unsigned();
            $table->timestamps();

			$table->foreign('hometeam_id')->references('id')->on('teams');
			$table->foreign('awayteam_id')->references('id')->on('teams');
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
        Schema::drop('fixtures');
    }
}
