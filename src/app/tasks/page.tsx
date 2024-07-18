"use client";

import { useMutation, useQuery } from "convex/react";
import React from "react";
import { api } from "../../../convex/_generated/api";

export default function page() {
  const tasks = useQuery(api.tasks.getTask);
  const deleteTask = useMutation(api.tasks.deleteTask)

  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-5xl">All tasks are here in real-time</h1>
      {tasks?.map((task) => (
        <div key={task._id} className="flex gap-2">
          <span>{task.text}</span>
          <button
            onClick={async () => {
              await deleteTask({ id: task._id });
            }}
          >
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
}
