import React from "react";
import { FaCheck as Check, FaTrash as Delete } from "react-icons/fa";

const iconTypes = {
  check: (color) => <Check className="completedItem checkItem" fill={color} />,
  delete: (color) => <Delete className="eraseItem" fill={color} />,
};

function TaskIcon({ type, color , action }) {
  return <span onClick={action}>{iconTypes[type](color)}</span>;
}

export { TaskIcon };
