<?php

namespace App\Model;

use App\Lists\Team as TeamList;
use Micmania1\UltimatePrediction\Model\Team as TeamInterface;
use Micmania1\UltimatePrediction\Lists\Fixture as FixtureList;

class Team extends Model implements TeamInterface
{
	/**
	 * @var FixtureList
	 */
	protected $fixtures;

	public function __construct()
	{
		$this->fixtures = Fixture::all();
	}

	public function setName($name)
	{
		$this->name = $name;
		return $this;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setFixtures(FixtureList $fixtures)
	{
		// We don't know whether this is home or away, so we don't do anything
		// @todo refactor api to allow home/away fixture granularity
		return $this;
	}

	public function getFixtures()
	{
		return $this->fixtures->filterByTeam($this);
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new TeamList($conn, $grammar, $postProcessor);
	}
}
