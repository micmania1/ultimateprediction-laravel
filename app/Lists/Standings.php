<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\Standings as StandingsList;

class Standings extends BaseList
{
	public function filterBySeason(SeasonModel $season)
	{
		return (clone $this)
			->sort()
			->where('season_id', $season->getSignature());
	}

	public function filterByUser(UserModel $user)
	{
		return (clone $this)
			->sort()
			->where('user_id', $user->getSignature());
	}

	public function filterByPosition($min, $count = 1)
	{
		return (clone $this)
			->sort()
			->offset($min - 1)
			->limit($count);
	}

	public function sort()
	{
		return (clone $this)
			->selectRaw('username, SUM(points) AS points, SUM(won) as won')
			->leftJoin('users', 'users.id', '=', 'standings.user_id')
			->groupBy('user_id')
			->orderBy('points', 'desc')
			->orderBy('won', 'desc')
			->orderby('username', 'asc');
	}
}
