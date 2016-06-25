<?php

namespace App\Model;

use App\Lists\Fixture as FixtureList;
use Micmania1\UltimatePrediction\Model\Fixture as FixtureInterface;
use Micmania1\UltimatePrediction\Model\Team as TeamInterface;
use Micmania1\UltimatePrediction\Lists\Prediction as PredictionList;
use Carbon\Carbon;

class Fixture extends Model implements FixtureInterface
{
	/**
	 * @var PredictionList
	 */
	protected $predictions;

	public function __construct()
	{
		$this->predictions = Prediction::all();
	}

	public function getHomeTeam()
	{
		return $this->hasOne(Team::class, 'hometeam_id');
	}

	public function setHomeTeam(TeamInterface $team)
	{
		$this->hometeam_id = $team->getSignature();
		return $this;
	}

	public function getAwayTeam()
	{
		return $this->hasOne(Team::class, 'awayteam_id');
	}

	public function setAwayTeam(TeamInterface $team)
	{
		$this->awayteam_id = $team->getSignature();
		return $this;
	}

	public function getKickoff()
	{
		return new Carbon($this->kickoff);
	}

	public function setKickoff(Carbon $kickoff)
	{
		$this->kickoff = $kickoff->toDateTimeString();
		return $this;
	}

	public function getHomeScore()
	{
		return $this->homesscore;
	}

	public function setHomeScore($score)
	{
		$this->homescore = (int) $score;
		return $this;
	}

	public function getAwayScore()
	{
		return $this->awayscore;
	}

	public function setAwayScore($score)
	{
		$this->awayscore = (int) $score;
		return $this;
	}

	public function getComplete()
	{
		return $this->complete;
	}

	public function setComplete($complete)
	{
		$this->complete = (bool) $complete;
		return $this;
	}

	public function getPredictions()
	{
		return $this->predictions->filterByFixture($this);
	}

	public function setPredctions(PredictionList $predictions)
	{
		foreach($predictions as $prediction)
		{
			$prediction->setFixture($this);
			$prediction->save();
		}
		return $this;
	}

	public function setSeason(Season $season)
	{
		$this->season_id = $season->id;
		return $this;
	}

	public function getSeason()
	{
		return $this->hasOne(Season::class, 'season_id')
			->getRelated();
	}

	public function getCompetition()
	{
		return $this->hasOne(Competition::class, 'competition_id')
			->getRelated();
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new FixtureList($conn, $grammar, $postProcessor);
	}
}
