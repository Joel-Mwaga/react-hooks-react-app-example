import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(screen.queryByText(/Now/g)).toBeInTheDocument();
  expect(
    screen.queryByText(/April 10th 2025, 12:23:49 PM/)
  ).not.toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  render(<App />);
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  render(<App />);
  expect(screen.queryByTitle("time video")).toBeInTheDocument();
});
