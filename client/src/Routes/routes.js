import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

function routes() {
  return (
    <Router>
      <Route path="/p1" element={<Project />} />
      <Route path="/project/:projectId"></Route>
    </Router>
  );
}

export default routes;

function Project({ project }) {
  return (
    <div className="project">
      <div className="postInfo">
        <div className="postCats">
          {project.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/project/${project._id}`} className="link">
          <span className="postTitle">{project.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(project.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{project.desc}</p>
    </div>
  );
}
