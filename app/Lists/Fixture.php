<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\Fixture as FixtureList;

class Fixture extends BaseList implements FixtureList
{
	public function filterBySeason(SeasonModel $season)
	{
		return (clone $this)
			->where('season_id', $season->getSignature());
	}

	public function filterByCompetition(CompetitionModel $competition)
	{
		return (clone $this)
			->where('competition_id', $competition->getSignature());
	}

	public function filterByHomeTeam(TeamModel $team)
	{
		return (clone $this)
			->where('hometeam_id', $team->getSignature());
	}

	public function filterByAwayTeam(TeamModel $team)
	{
		return (clone $this)
			->where('awayteam_id', $team->getSignature());
	}

	public function filterByTeam(TeamModel $team)
	{
		return (clone $this)
			->where('hometeam_id', $team->getSignature())
			->orWhere('awayteam_id', $team->getSignature());
	}

	public function filterByKickoff(Carbon $start, Carbon $end = null)
	{
		$query = (clone $this)->where('kickoff', '>=', $start);
		if(!is_null($end)) {
			$query = $query->where('kickoff', '<=', $end);
		}
		return $query;
	}

	public function filterByFixture(FixtureModel $fixture)
	{
		return (clone $this)
			->where('id', $fixture->getSignature());
	}

	public function filterByComplete($bool)
	{
		return (clone $this)
			->where('complete', (bool) $bool);
	}
}
