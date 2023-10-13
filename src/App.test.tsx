import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import App from "./components/App";

test("App renders", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});

test("App defaults to light mode", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const app = container.querySelector(".App");
  expect(app).toHaveClass("light");
});

test("Darkmode button renders", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const darkmode = container.querySelector("#darkmode");
  if (darkmode) {
    expect(darkmode).toBeInTheDocument();
  }
});

test("Darkmode button toggles correctly", () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const app = container.querySelector(".App");
  const darkmode = container.querySelector("#darkmode");
  if (darkmode) {
    expect(app).toHaveClass("light");
    fireEvent.click(darkmode);
    expect(app).toHaveClass("dark");
    fireEvent.click(darkmode);
    expect(app).toHaveClass("light");
  }
});

import BlogPost from "./components/BlogPost";

test("BlogPost title renders", () => {
  const data = {
    timestamp: { seconds: 1000 },
    title: "test title",
    author: "test author",
    content: ["test content"],
  };
  const { getByText } = render(<BlogPost data={data} />);
  const title = getByText(/test title/i);
  expect(title).toBeInTheDocument();
});

test("BlogPost author renders", () => {
  const data = {
    timestamp: { seconds: 1000 },
    title: "test title",
    author: "test author",
    content: ["test content"],
  };
  const { getByText } = render(<BlogPost data={data} />);
  const author = getByText(/test author/i);
  expect(author).toBeInTheDocument();
});
