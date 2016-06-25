<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model as BaseModel;

abstract class Model extends BaseModel
{
	abstract protected function modelQueryBuilder(
		$conn, 
		$grammar, 
		$postProcessor
	);

	protected function newBaseQueryBuilder()
	{
		$conn = $this->getConnection();

		return $this->modelQueryBuilder(
			$conn,
			$conn->getQueryGrammar(),
			$conn->getPostProcessor()
		);
	}

	public function getSignature()
	{
		return $this->id;
	}
}
