<?php

namespace App\Model;

use App\Lists\Competition as CompetitionList;
use Micmania1\UltimatePrediction\Model\Competition as CompetitionInterface;
use Micmania1\UltimatePrediction\Lists\Season as SeasonList;

class Competition extends Model implements CompetitionInterface
{
	/**
	 * @var SeasonList
	 */
	protected $seasons;

	public function __construct()
	{
		$this->seasons = Season::all();
	}

	public function getName()
	{
		return $this->name;
	}

	public function setName($name)
	{
		$this->name = $name;
		return $this;
	}

	public function getSeasons()
	{
		return $this->seasons->filterByCompetition($this);
	}

	public function setSeasons(SeasonList $seasons)
	{
		foreach($seasons as $season) {
			$season->setCompetition($this->getCompetition());
			$season->save();
		}
		return $this;
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new CompetitionList($conn, $grammar, $postProcessor);
	}
}
