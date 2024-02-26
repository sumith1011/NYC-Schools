import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SchoolList from "./SchoolList";
import axios from "axios";
jest.mock('axios')

const mockSchools = [
  {
    school_name: "School 1",
    overview_paragraph: " This isa brief overview",
    neighbourhood: "Some neighbourhood",
    location: "Some location",
  },
  {
    school_name: "School 2",
    overview_paragraph: " This isa brief overview",
    neighbourhood: "Some neighbourhood",
    location: "Some location",
  },
  {
    school_name: "School 3",
    overview_paragraph: " This isa brief overview",
    neighbourhood: "Some neighbourhood",
    location: "Some location",
  },
];

describe("School List Component", () => {
  it("render school list correctly ", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockSchools });
    render(<SchoolList />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.getByText("NYC High Schools")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(mockSchools.length);
    for (let i = 0; i < mockSchools.length; i++) {
      expect(screen.getByText(mockSchools[i]?.school_name)).toBeInTheDocument();
    }
  });

  it("", async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockSchools });

    const { rerender } = render(<SchoolList />);

    await new Promise((resolve) => setTimeout(resolve, 0));

    const firstSchoolButton = screen.getByRole("button", {
      name: mockSchools[0].school_name,
    });
    fireEvent.click(firstSchoolButton);

    expect(screen.getByText(mockSchools[0].school_name)).toBeInTheDocument(); // In SchoolDetails
    expect(
      screen.getByText(mockSchools[0].overview_paragraph)
    ).toBeInTheDocument(); // Verify details
  });

  it("renders error message on API failure", async () => {
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error("API error"));

    render(<SchoolList />);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(screen.getByText(/Error fetching schools/i)).toBeInTheDocument();
  });
});
