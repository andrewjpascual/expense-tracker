import React from "react";
import { FaGithub } from "react-icons/fa";

// Maybe need a styling change in future
export const Header = () => {
  return (
    <div className="top-wrap">
      <h2>Expense Tracker</h2>

      <div class="text-end">
        <a
          href="http://github.com/andrewjpascual"
          target="_blank"
          rel="noopener noreferrer"
          class="icon brands fa-github"
        >
          <h2>
            <FaGithub />
          </h2>
        </a>
      </div>
    </div>
  );
};
