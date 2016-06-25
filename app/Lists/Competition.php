<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\Competition as CompetitionList;
use Micmania1\UltimatePrediction\Model\Competition as CompetitionModel;

class Competition extends BaseList implements CompetitionList
{
	public function filterByCompetition(CompetitionModel $competition)
	{
		return (clone $this)->where('id', $competition->id);
	}
}
