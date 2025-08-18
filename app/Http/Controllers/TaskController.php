<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index(): AnonymousResourceCollection {
        $tasks = Task::where('user_id', Auth::user()->id)->get();
        return TaskResource::collection($tasks);
    }

    public function store(StoreTaskRequest $request): TaskResource {
        $task = new Task;

        $task->task = $request->validated('task');
        $task->user_id = Auth::user()->id;

        $task->save();

        return new TaskResource($task);
    }

    public function toggleCompleted(Task $task): TaskResource {
        if ($task->deleted_at !== null) {
            $task->restore();

            return new TaskResource($task);
        }
        $task->delete();

        return new TaskResource($task);
    }

    public function getCompletedTasks(): AnonymousResourceCollection {
        $trashedTasks = Task::onlyTrashed()->where('user_id', Auth::user()->id)->get();

        return TaskResource::collection($trashedTasks);
    }
}
