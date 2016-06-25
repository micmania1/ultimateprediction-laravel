<?php

namespace App\Model;

use App\Lists\Season as SeasonList;
use Micmania1\UltimatePrediction\Model\Season as SeasonInterface;
use Micmania1\UltimatePrediction\Model\Competition as CompetitionInterface;

class Season extends Model implements SeasonInterface
{
	public function setName($name)
	{
		$this->name = $name;
		return $this;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setCompetition(CompetitionInterface $competition)
	{
		$this->competition_id = $competition->getSignature();
		return $this;
	}

	public function getCompetition()
	{
		return $this->hasOne(Competition::class, 'competition_id')
			->getRelated();
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new SeasonList($conn, $grammar, $postProcessor);
	}
}
