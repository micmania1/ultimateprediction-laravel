<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\Gamescore as GamescoreList;
use Micmania1\UltimatePrediction\Model\Prediction as PredictionModel;
use Micmania1\UltimatePrediction\Model\Fixture as FixtureModel;
use Micmania1\UltimatePrediction\Model\User as UserModel;

class Gamescore extends BaseList implements GamescoreList
{
	public function filterByStatus($status)
	{
		return (clone $this)
			->where('status', $status);
	}

	public function filterByPrediction(PredictionModel $prediction)
	{
		return (clone $this)
			->where('prediction_id', $prediction->getSignature());
	}

	public function filterByFixture(FixtureModel $fixture)
	{
		return (clone $this)
			->where('fixture_id', $fixture->getSignature());
	}

	public function filterByUser(UserModel $user)
	{
		return (clone $this)
			->where('user_id', $user->getSignature());
	}
}
