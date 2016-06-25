<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

	protected $models = [
		'Competition',
		'Fixture',
		'Gamescore',
		'Prediction',
		'Season',
		'StandingsRow',
		'Team',
		'User',
	];

	protected $lists = [
		'Competition',
		'Fixture',
		'Gamescore',
		'Prediction',
		'Season',
		'Standings',
		'User'
	];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
		foreach($this->models as $model) {
			$this->app->bind(
				'Micmania1\UltimatePrediction\Model\\' . $model,
				'App\Model\\' . $model
			);
		}

		foreach($this->lists as $list) {
			$this->app->bind(
				'Micmania1\UltimatePrediction\Lists\\' . $list,
				'App\Lists\\' . $list
			);
		}
    }
}
