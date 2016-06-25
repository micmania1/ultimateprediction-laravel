<?php

namespace App\Model;

use App\Lists\Prediction as PredictionList;
use Micmania1\UltimatePrediction\Model\Prediction as PredictionInterface;
use Micmania1\UltimatePrediction\Model\User as UserInterface;
use Micmania1\UltimatePrediction\Model\Fixture as FixtureInterface;
use Carbon\Carbon;

class Prediction extends Model implements PredictionInterface
{
	public function getPredictionTime()
	{
		return new Carbon($this->prediction_time);
	}

	public function setPredictionTime(Carbon $predictionTime)
	{
		$this->prediction_time = $predictionTime;
		return $this;
	}

	public function getHomePrediction()
	{
		return (int) $this->home_prediction;
	}

	public function setHomePrediction($prediction)
	{
		$this->home_prediction = $prediction;
		return $this;	
	}

	public function getAwayPrediction()
	{
		return (int) $this->away_prediction;
	}

	public function setAwayPrediction($prediction)
	{
		$this->away_prediction;
		return $this;
	}

	public function setUser(UserInterface $user)
	{
		$this->user_id = $user->getSignature();
	}

	public function getUser()
	{
		return $this->hasOne(User::class, 'user_id')->getRelated();
	}

	public function setFixture(FixtureInterface $fixture)
	{
		$this->fixture_id = $fixture->getSignature();
		return $this;
	}

	public function getFixture()
	{
		return $this->hasOne(Fixture::class, 'fixture_id')->getRelated();
	}

	public function getSeason()
	{
		return $this->hasOne(Season::class, 'season_id')->getRelated();
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new PredictionList($conn, $grammar, $postProcessor);
	}
}
