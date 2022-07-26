<?php

namespace App\Http\Controllers\Api;

use App\Actions\SubscriberCreateAction;
use App\Actions\SubscriberDeleteAction;
use App\Actions\SubscriberUpdateAction;
use App\Http\Controllers\Controller;
use App\Http\Requests\SubscriberRequest;
use App\Http\Resources\SubscriberResource;
use App\Models\Subscriber;

class SubscriberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return SubscriberResource::collection(Subscriber::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  SubscriberRequest  $request
     * @param  SubscriberCreateAction  $subscriberCreateAction
     * @return SubscriberResource
     */
    public function store(SubscriberRequest $request, SubscriberCreateAction $subscriberCreateAction)
    {
        $subscriber = $subscriberCreateAction(
            $request->only('name', 'email', 'password', 'status')
        );

        return new SubscriberResource($subscriber);
    }

    /**
     * Edit the specified resource.
     *
     * @param  int  $id
     * @return SubscriberResource
     */
    public function edit($id)
    {
        $subscriber = Subscriber::with('fields')->find($id);

        return new SubscriberResource($subscriber);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  SubscriberRequest  $request
     * @param  SubscriberUpdateAction  $subscriberUpdateAction
     * @param  int  $id
     * @return SubscriberResource
     */
    public function update(SubscriberRequest $request, SubscriberUpdateAction $subscriberUpdateAction, $id)
    {
        $subscriber = Subscriber::findOrFail($id);

        $subscriberUpdateAction(
            Subscriber::findOrFail($id),
            $request->only('name', 'email', 'status', 'fields')
        );

        return new SubscriberResource($subscriber->load('fields'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  SubscriberDeleteAction  $subscriberDeleteAction
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(SubscriberDeleteAction $subscriberDeleteAction, $id)
    {
        $subscriberDeleteAction(Subscriber::findOrFail($id));

        return response()->json(['success' => true]);
    }
}
