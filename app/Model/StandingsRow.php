<?php

namespace App\Model;

use App\Lists\Standings as StandingsList;
use Micmania1\UltimatePrediction\Model\StandingsRow as StandingsRowInterface;
use Micmania1\UltimatePrediction\Model\User as UserInterface;
use Micmania1\UltimatePrediction\Model\Season as SeasonInterface;

class StandingsRow extends Model as StandingsRowInterface
{
	public function setUser(UserInterface $user)
	{
		$this->user_id = $user->getSignature();
		return $this;
	}

	public function getUser()
	{
		return $this->hasOne(User::class, 'user_id')->getRelated();
	}

	public function setPoints($points)
	{
		$this->points = $points;
		return $this;
	}

	public function getPoints()
	{
		return $this->points;
	}

	public function setWon($won)
	{
		$this->won = (int) $won;
		return $this;
	}

	public function getWon()
	{
		return (int) $this->won;
	}

	public function setDrew($drew)
	{
		$this->drew = (int) $drew;
		return $this;
	}

	public function getDrew()
	{
		return (int) $this->drew;
	}

	public function setLost($lost)
	{
		$this->lost = (int) $lost;
	}

	public function getLost()
	{
		return (int) $this->lost;
	}

	public function setSeason(SeasonInterface $season)
	{
		$this->season_id = $season->getSignature();
		return $this;
	}

	public function getSeason()
	{
		return $this->hasOne(Season::class, 'season_id')->getRelated();
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new StandingsList($conn, $grammar, $postProcessor);
	}
}
