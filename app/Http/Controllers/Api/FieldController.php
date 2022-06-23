<?php

namespace App\Http\Controllers\Api;

use App\Actions\FieldCreateAction;
use App\Actions\FieldDeleteAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\FieldRequest;
use App\Http\Resources\FieldResource;
use App\Models\Field;

class FieldController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return FieldResource::collection(Field::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  FieldRequest  $request
     * @param  FieldCreateAction  $fieldCreateAction
     * @return FieldResource
     */
    public function store(FieldRequest $request, FieldCreateAction $fieldCreateAction)
    {
        $field = $fieldCreateAction(
            $request->only('title', 'type')
        );

        return new FieldResource($field);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return FieldResource
     */
    public function show($id)
    {
        return new FieldResource(Field::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  FieldRequest  $request
     * @param  int  $id
     * @return FieldResource
     */
    public function update(FieldRequest $request, $id)
    {
        $field = Field::findOrFail($id);

        $field->update(['title' => $request->title, 'type' => $request->type]);

        return new FieldResource($field);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(FieldDeleteAction $fieldDeleteAction, $id)
    {
        $fieldDeleteAction(Field::findOrFail($id));

        return response()->json(['success' => true]);
    }
}
