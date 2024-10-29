import React from "react";

const Card = ({ ticket, priorityImg, statusImg, grouping, userImg }) => {
  return (
    <div
      style={{
        width: "210px",
        height: "100px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            fontSize: "11px",
            margin: "0",
            color: "rgba(141, 142, 143, 0.8)",
          }}
        >
          {ticket.id}
        </p>

        {userImg && grouping !== "userId" && (
          <img
            src={userImg}
            alt="User"
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "10px",
            }}
          />
        )}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        {statusImg && (
          <img
            src={statusImg}
            alt="Status"
            style={{
              width: "15px",
              height: "15px",
              marginRight: "5px",
              alignSelf: "flex-start",
              marginTop: "5px",
            }}
          />
        )}
        <h3 style={{ fontSize: "11px", margin: "5px 0" }}>{ticket.title}</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {priorityImg && (
          <img
            src={priorityImg}
            alt="Priority"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "1px solid rgba(228, 229, 230, 0.8)",
              padding: "5px",
              borderRadius: "6px",
            }}
          />
        )}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            border: "1px solid rgba(228, 229, 230, 0.8)",
            padding: "5px",
            borderRadius: "6px",
            width: "100px",
            marginLeft: grouping === "priority" ? "0px" : "10px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "rgba(228, 229, 230, 0.8)",
              borderRadius: "50%",
            }}
          ></div>
          <p
            style={{
              fontSize: "11px",
              margin: "0",
              color: "rgba(141, 142, 143, 0.8)",
            }}
          >
            {ticket.tag.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
