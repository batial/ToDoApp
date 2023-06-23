import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        console.log(localStorageItem)
  
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //save tasks in localStorage and update the state
  const saveItem = (newItem) => {
    localStorage.setItem("tasks_v1", JSON.stringify(newItem));
    setItem(newItem);
  };

  //For myself ---> if I have more than 2 dates to return, I have to make an objet rather than an array.
  return { item, saveItem, loading, error };
}

export { useLocalStorage };

/* const defaultToDos = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    completed: true,
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    completed: 1,
  },
  { text: "Cortar cebolla", completed: false },
]; */

/* localStorage.setItem('tasks_v1', defaultToDos);
 */
/* localStorage.removeItem('tasks_v1'); */