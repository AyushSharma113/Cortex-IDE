"use client"

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {

  const tasks = useQuery(api.tasks.get);

  console.log(tasks)

  
  return (

 <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map((task) => <div key={task._id}>{task.text}
        <div>
          {task.isCompleted ? "Completed" : "false"}
          </div>
        </div>)}
    </main>

    
 
  );
}
