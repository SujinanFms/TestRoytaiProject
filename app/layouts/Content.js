"use client";
import React from "react";

const Content = ({ children }) => {
  return (
    <div className="content">
      <>{children}</>
      <p>This is the content area.</p>
    </div>
  );
};

export default Content;
