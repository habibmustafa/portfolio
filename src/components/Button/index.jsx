import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Button = ({ to, title }) => {
   const navigate = useNavigate();

   return (
      <button
         className="get"
         onClick={() => {
            navigate(`${to}`);
         }}
      >
         {title}
      </button>
   );
};

export default Button;
