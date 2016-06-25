<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\User as UserList;

class User extends BaseList implements UserList
{
	public function filterByUsername($username)
	{
		return (clone $this)
			->where('username', $username);
	}
}
