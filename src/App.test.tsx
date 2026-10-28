import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("portfolio", () => {
  it("renders the verified identity, section destinations, and direct email contact", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /make the work clear/i })).toBeInTheDocument();

    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });
    for (const section of ["about", "skills", "work", "automation", "experience", "contact"]) {
      expect(within(navigation).getByRole("link", { name: new RegExp(section, "i") })).toHaveAttribute("href", `#${section}`);
      expect(document.getElementById(section)).toBeInTheDocument();
    }

    expect(screen.getByRole("link", { name: /snyandikasamson@gmail\.com/i })).toHaveAttribute(
      "href",
      "mailto:snyandikasamson@gmail.com?subject=Portfolio%20enquiry",
    );
    expect(screen.getByText(/concept · not deployed/i)).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation, including with Escape", async () => {
    const user = userEvent.setup();
    render(<App />);

    const toggle = screen.getByRole("button", { name: "Open navigation" });
    const navigation = screen.getByRole("navigation", { name: "Primary navigation" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
    expect(navigation).toHaveClass("is-open");

    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
    expect(navigation).not.toHaveClass("is-open");
  });

  it("expands project details when requested", async () => {
    const user = userEvent.setup();
    render(<App />);

    const disclosure = screen.getAllByText("How it works")[0].closest("details");
    expect(disclosure).not.toHaveAttribute("open");

    await user.click(screen.getAllByText("How it works")[0]);
    expect(disclosure).toHaveAttribute("open");
  });
});
