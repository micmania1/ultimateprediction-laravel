<?php

namespace App\Model;

use App\Lists\User as UserList;
use Micmania1\UltimatePrediction\Model\User as UserInterface;
use Micmania1\UltimatePrediction\Lists\Prediction as PredictionList;
use Micmania1\UltimatePrediction\Lists\Gamescore as GamescoreList;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements 
	UserInterface,
    AuthenticatableContract,
    AuthorizableContract,
    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

	/**
	 * @var Micmania1\UltimatePrediction\Lists\Prediction
	 */
	protected $predictions;

	/**
	 * @var Micmania1\UltimatePrediction\Lists\Gamescore
	 */
	protected $gamescores;

	public function __construct()
	{
		$this->predictions = Prediction::all();
		$this->gamescores = Gamescore::all();
	}

	public function setUsername($name)
	{
		$this->name = $name;
	}

	public function getUsername()
	{
		return $this->name;
	}

	public function getPredictions()
	{
		return $this->predictions->filterByUser($this);
	}

	public function setPredictions(PredictionList $predictions)
	{
		foreach($predictions as $prediction) {
			$prediction->setUser($this);
			$prediction->save();
		}
		return $this;
	}

	public function getGamescores()
	{
		return $this->gamescores->filterByUser($this);
	}

	public function setGamescores(GamescoreList $gamescores)
	{
		foreach($gamescores as $gamescore)
		{
			$gamescore->setUser($this);
			$gamescore->save();
		}
		return $this;
	}

	protected function modelQueryBuilder($conn, $grammar, $postProcessor)
	{
		return new UserList($conn, $grammar, $postProcessor);
	}
}
