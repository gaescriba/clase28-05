//creamos la variable que contiene el boton para agregar tareaa
let btn = document.querySelector("#btnAddTask");

//funcion encargada de crear una nueva tarea
const addTask = () => {

  //recibimos el elemento de la caja de texto, y en la siguiente linea su valor 
  let inputTask = document.querySelector("#todo");
  let todoText = inputTask.value;

  //validamos que exista algo escrito en esa caja
  if(todoText){

    //creamos la variable que contiene la lista donde mostraremos las tareas
    const taskList = document.querySelector("#todos");
    //creamos un elemento li para la nueva tarea
    const newTask = document.createElement("li");

    //creamos un elemento span para el texto de nuestra tarea
    const taskText = document.createElement("span");
    taskText.textContent = todoText; 

    //creamos el boton para modificar y eliminar la tarea 

    //elemento
    const updateBtn = document.createElement('button');
    //texto
    updateBtn.textContent = "Update";
    //comportamiento
    updateBtn.addEventListener('click', updateTask);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', deleteTask);

    //agregamos lo creado a nuestro elemento que representa a la nueva tarea
    newTask.appendChild(taskText);
    newTask.appendChild(updateBtn);
    newTask.appendChild(deleteBtn);

    //agregamos el elemento tarea a la lista
    taskList.appendChild(newTask);

    //limpiamos la caja de texto
    inputTask.value = "";

  };

};

//funcion para actualizar la tarea 
const updateTask = event => {

  //obtenemos el contexto del boton que presionamos
  const updateBtn = event.target;
  //obtenemos el elemento span disponible en el elemento padre del boton (subimos un nivel)
  const taskText = updateBtn.parentNode.querySelector('span');
  //obtenemos el nombre nuevo por el usuario
  const newText = prompt(`Enter the new task name`);

  //validamos que el usuarion haya escrito algo
  if(newText){

    //reemplazamos el texto del elemento span por el nuevo texto ingresado por el usuario
    taskText.textContent = newText;

  };

};


//funcion para eliminar la tarea
const deleteTask = event => {

  //obtenemos el contexto del boton que presionamos
  const deleteBtn = event.target;
  //nos situamos sobre su elemento padre (el elemento li) y lo eliminamos, al eliminar el padre, los hijos se eliminaran por efecto cascada
  deleteBtn.parentNode.remove();

};

//anexamos la funcion para agregar tarea al click del boton
btn.addEventListener("click", addTask);


