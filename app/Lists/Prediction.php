<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\Prediction as PredictionList;
use Micmania1\UltimatePrediction\Model\User as UserModel;
use Micmania1\UltimatePrediction\Model\Fixture as FixtureModel;
use Micmania1\UltimatePrediction\Model\Prediction as PredictionModel;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

class Prediction extends BaseList implements PredictionList
{

	public function filterByUser(UserModel $user)
	{
		return (clone $this)
			->where('user_id', $user->id);
	}

	public function filterByFixture(FixtureModel $fixture)
	{
		return (clone $this)
			->where('fixture_id', $fixture->id);
	}

	public function filterByPrediction(PredictionModel $prediction)
	{
		return (clone $this)
			->where('prediction_id', $prediction->id);
	}

	public function filterByDate(Carbon $start, Carbon $end = null)
	{
		if(is_null($end)) {
			$end = $start;
		}

		return (clone $this)
			->whereBetween($start, $end);
	}
}
