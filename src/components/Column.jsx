import React from "react";
import Card from "./Card";
import noPriorityImg from "../assets/no.svg";
import lowPriorityImg from "../assets/low.svg";
import mediumPriorityImg from "../assets/medium.svg";
import highPriorityImg from "../assets/high.svg";
import urgentPriorityImg from "../assets/orange.svg";
import todoImg from "../assets/todo.svg";
import inProgressImg from "../assets/progress.svg";
import backlogImg from "../assets/backlog.svg";
import userImg from "../assets/user.png";
import addImg from "../assets/add.svg"; // Add image import
import dotImg from "../assets/dot.svg"; // Dot image import

const Column = ({ tickets, grouping, sortOption, users }) => {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = ticket[grouping] || "Unassigned";
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  Object.keys(groupedTickets).forEach((key) => {
    groupedTickets[key].sort((a, b) => {
      if (sortOption === "priority") return b.priority - a.priority;
      if (sortOption === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  });

  const getGroupTitle = (key) => {
    let groupTitle = key;
    let imgSrc = null;

    if (grouping === "userId") {
      const user = users.find((user) => user.id === key);
      groupTitle = user ? user.name : "Unassigned";
      imgSrc = userImg;
    } else if (grouping === "priority") {
      const priorityLabels = ["No priority", "Low", "Medium", "High", "Urgent"];
      groupTitle = priorityLabels[key] || "No priority";

      switch (key) {
        case "0":
          imgSrc = noPriorityImg;
          break;
        case "1":
          imgSrc = lowPriorityImg;
          break;
        case "2":
          imgSrc = mediumPriorityImg;
          break;
        case "3":
          imgSrc = highPriorityImg;
          break;
        case "4":
          imgSrc = urgentPriorityImg;
          break;
        default:
          imgSrc = noPriorityImg;
          break;
      }
    } else if (grouping === "status") {
      switch (key) {
        case "Todo":
          imgSrc = todoImg;
          break;
        case "In progress":
          imgSrc = inProgressImg;
          break;
        case "Backlog":
          imgSrc = backlogImg;
          break;
        default:
          imgSrc = null;
          break;
      }
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt={groupTitle}
              style={{ width: "20px", height: "20px", marginRight: "5px" }}
            />
          )}
          <span>{groupTitle}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={addImg}
            alt="Add"
            style={{ width: "15px", height: "15px", marginLeft: "10px" }}
          />
          <img
            src={dotImg}
            alt="Dot"
            style={{ width: "15px", height: "15px", marginLeft: "3px" }}
          />
        </div>
      </div>
    );
  };

  const getPriorityImage = (priority) => {
    switch (priority) {
      case 0:
        return noPriorityImg;
      case 1:
        return lowPriorityImg;
      case 2:
        return mediumPriorityImg;
      case 3:
        return highPriorityImg;
      case 4:
        return urgentPriorityImg;
      default:
        return noPriorityImg;
    }
  };

  const getStatusImage = (status) => {
    switch (status) {
      case "Todo":
        return todoImg;
      case "In progress":
        return inProgressImg;
      case "Backlog":
        return backlogImg;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(235, 244, 253, 0.8)",
        minHeight: "100vh",
        minWidth: "100%",
        padding: "10px 10px",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(groupedTickets).map((group) => (
        <div
          key={group}
          style={{
            margin: "15px",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>{getGroupTitle(group)}</h2>
          {groupedTickets[group].map((ticket) => (
            <Card
              key={ticket.id}
              ticket={ticket}
              priorityImg={
                grouping === "status" || grouping === "userId"
                  ? getPriorityImage(ticket.priority)
                  : null
              }
              statusImg={
                grouping === "priority" ? getStatusImage(ticket.status) : null
              }
              grouping={grouping}
              userImg={userImg}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Column;
