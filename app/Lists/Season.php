<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\SeasonList;
use Micmania1\UltimatePrediction\Model\Competition as CompetitionModel;
use Micmania1\UltimatePrediction\Model\Season as SeasonModel;

class Season extends BaseList implements SeasonList
{
	public function filterByCompetition(CompetitionModel $competition)
	{
		return (clone $this)
			->where('competition_id', $competition_id);
	}

	public function filterBySeason(SeasonModel $season)
	{
		return (clone $this)
			->where('season_id', $season);
	}
}
