import React, { useState, useEffect } from "react";
import Header from "./Header";
import Column from "./Column";

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem("grouping") || "status";
  });
  const [sortOption, setSortOption] = useState(() => {
    return localStorage.getItem("sortOption") || "priority";
  });

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch((error) => console.log("Error in fetching data", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("sortOption", sortOption);
  }, [sortOption]);

  return (
    <div>
      <Header setGrouping={setGrouping} setSortOption={setSortOption} />
      <div style={{ display: "flex" }}>
        <Column
          tickets={tickets}
          grouping={grouping}
          sortOption={sortOption}
          users={users}
        />
      </div>
    </div>
  );
};
export default KanbanBoard;
