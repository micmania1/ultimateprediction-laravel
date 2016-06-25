<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStandingsRowsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('standings_rows', function (Blueprint $table) {
            $table->increments('id');
			$table->integer('points');
			$table->integer('won')->unsigned();
			$table->integer('drew')->unsigned();
			$table->integer('lost')->unsigned();
			$table->integer('season_id')->unsigned();
			$table->integer('user_id')->unsigned();
            $table->timestamps();

			$table->foreign('season_id')->references('id')->on('seasons');
			$table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('standings_rows');
    }
}
