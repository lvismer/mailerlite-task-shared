<?php

namespace App\Actions;

use App\Models\Field;
use Illuminate\Support\Facades\DB;

class FieldDeleteAction
{
    public function __invoke(Field $field)
    {
        $field->delete();

        // @todo - is there a more elegant way todo this, altough this might be the most performant.
        DB::delete('DELETE FROM field_subscriber WHERE field_id=?', [$field->id]);
    }
}
