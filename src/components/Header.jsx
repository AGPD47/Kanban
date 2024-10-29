import React, { useState } from "react";
import displayImg from "../assets/Display.svg";

const Header = ({ setGrouping, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGroupingChange = (e) => {
    const selectedGrouping = e.target.value;
    setGrouping(selectedGrouping);
    localStorage.setItem("grouping", selectedGrouping);
  };

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);
    localStorage.setItem("sortOption", selectedSort);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
            color: "black",
            border: "none",
            borderRadius: "5px",
            gap: "5px",
            padding: "10px 15px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src={displayImg}
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
          Display {isOpen ? "▲" : "▼"}
        </button>
        {isOpen && (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              position: "absolute",
              backgroundColor: "white",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
              zIndex: 1,
              marginTop: "5px",
              animation: "fadeIn 0.3s ease-in-out",
              width: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Grouping
              </label>
              <select
                onChange={handleGroupingChange}
                defaultValue={localStorage.getItem("grouping") || "status"}
                style={{
                  padding: "5px",
                  borderRadius: "3px",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Added box shadow
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s", // Added transition for box shadow
                  width: "130px",
                  flex: 1,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#007BFF";
                  e.currentTarget.style.boxShadow =
                    "0 0 4px rgba(0, 123, 255, 0.5)"; // Focus box shadow
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#ccc";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)"; // Reset box shadow
                }}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginRight: "10px",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Sorting
              </label>
              <select
                onChange={handleSortChange}
                defaultValue={localStorage.getItem("sortOption") || "priority"}
                style={{
                  padding: "5px",
                  borderRadius: "3px",
                  border: "1px solid #ccc",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Added box shadow
                  outline: "none",
                  transition: "border-color 0.2s, box-shadow 0.2s", // Added transition for box shadow
                  width: "150px",
                  flex: 1,
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#007BFF";
                  e.currentTarget.style.boxShadow =
                    "0 0 4px rgba(0, 123, 255, 0.5)"; // Focus box shadow
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#ccc";
                  e.currentTarget.style.boxShadow =
                    "0 2px 4px rgba(0, 0, 0, 0.1)"; // Reset box shadow
                }}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
