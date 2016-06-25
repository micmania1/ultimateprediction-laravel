<?php

namespace App\Lists;

use Micmania1\UltimatePrediction\Lists\ListInterface;
use Micmania1\UltimatePrediction\Model\Model;
use Illuminate\Database\Query\Builder;

class BaseList extends Builder implements ListInterface
{
	/**
	 * @var int
	 */
	protected $position = 0;

	public function current()
	{
		return (clone $this)->offset($this->key(), 1)->limit(1);
	}

	public function key()
	{
		return $this->position;
	}

	public function next()
	{
		$this->position++;
	}	

	public function valid()
	{
		return $this->position < $this->count();
	}

	public function rewind()
	{
		$this->position = 0;
	}

	public function last()
	{
		return $this->offset($this->count() - 1, 1);
	}

	/**
	 * These don't necessarily affect the current result set. The simply
	 * create a new model as defined.
	 *
	 * {@inheritdoc}
	 */
	public function add(Model $model)
	{
		if(method_exists($model, 'save')) {
			$model->save();
		}
		return $this;
	}

	public function remove(Model $model)
	{
		if(method_exists($model, 'delete')) {
			$model->delete();
		}
		return $this;
	}

}
