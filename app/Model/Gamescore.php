<?php

namespace App\Model;

use App\Lists\Gamescore as GamescoreList;
use Micmania1\UltimatePrediction\Model\Gamescore as GamescoreInterface;
use Micmania1\UltimatePrediction\Model\Prediction as PredictionInterface;
use Micmania1\UltimatePrediction\Lists\Prediction as PredictionList;

class Gamescore extends Model implements GamescoreInterface
{
	protected $predictions;

	public function __construct()
	{
		$this->predictions = Prediction::all();
	}

	public function setPrediction(PredictionInterface $prediction)
	{
		$this->prediction_id = $prediction->getSignature();
	}

	public function getPrediction()
	{
		return $this->predictions->filterByGamescore($this);
	}

	public function setPoints($points)
	{
		$this->points = (int) $points;
		return $this;
	}

	public function getPoints()
	{
		return $this->points;
	}

	public function setStatus($status)
	{
		$this->status = $status;
		return $this;
	}

	public function getStatus()
	{
		return $this->status;
	}

	public function getUser()
	{
		return $this->hasOne(User::class, 'user_id')
			->getRelated();
	}

	public function getSeason()
	{
		return $this->hasOne(Season::class, 'season_id')
			->getRelated();
	}

	public function getFixture()
	{
		return $this->hasOne(Fixture::class, 'fixture_id')
			->getRelated();
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new GamescoreList($conn, $grammar, $postProcessor);
	}
}
