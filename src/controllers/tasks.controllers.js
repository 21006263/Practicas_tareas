import Task from "../models/Tasks"; 
 
 
 
 export const renderTasks = async (req, res) => {

    // todo !devuelve solo listas de odjetos javascript
  const tasks = await Task.find().lean()
  res.render("index", {tasks : tasks});
    //console.log(tasks)
  
    console.log(tasks[0])

};

  export const createTask = async  (req, res) => {
  //console.log(req.body)
  // const task = Task(req.body)
  //  // console.log(task)

  // //  const taskSaved = await task.save()
  // //  console.log(taskSaved)

  // // res.send("saved");
  // await task.save();
  // res.redirect("/");
  try {
    const task = Task(req.body)
  
  await task.save();
  res.redirect("/");
    
  } catch (error) {
    console.log(error)
  }
}


export const renderTaskEdit = async (req, res) => {
  try {
    //console.log(req.params.id)
  const task = await Task.findById(req.params.id).lean()
  res.render("edit", {task});
  } catch (error) {
    console.log(error.message)
  }
}
export const editTask = async (req, res) => {
  const {id} = req.params
  //function dAndUpdate apdate
  await Task.findByIdAndUpdate(id, req.body)
  res.redirect("/")
  //console.log(req.body)
 // console.log(req.params.id)

  //res.send("received")
}
export const deleteTask = async (req, res) => {
  const {id} = req.params;
 
  await Task.findByIdAndDelete(id)
 
  res.redirect("/")

}



export const taskToggleDone = async (req, res) => {
  const {id} = req.params;

  const task  = await Task.findById(id)

  task.done = !task.done;
  await task.save();
  //console.log(task)

  //res.send("toogle")
  res.redirect("/");
}