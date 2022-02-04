import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React from "react";
import Search from "./Search";

describe("<Seach />", () => {
  const stories = {
    data: {
      hits: [
        {
          id: "1",
          title: "title",
          author: "author",
          created_at: "created_at data",
          url: "url",
        },
      ],
    },
  };
  const keyword = "React";

  axios.get = jest.fn().mockResolvedValue(stories);

  beforeEach(() => {
    render(<Search />);
  });

  it("rendered search component", () => {
    expect(screen.getByText("Search Wrapper")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByTestId("keyword")).toBeInTheDocument();
    expect(screen.getByText("No stories")).toBeInTheDocument();
  });

  it("set state of search input", async () => {
    await userEvent.type(screen.getByTestId("keyword"), "React");
    expect(screen.getByTestId("keyword")).toHaveValue("React");
  });

  it("request with keywork when click search button", async () => {
    await userEvent.type(screen.getByTestId("keyword"), "React");
    await userEvent.click(screen.getByText("Search"), { bubbles: true });
    await waitFor(() => {
      expect(axios.get).toBeCalledWith(
        `http://hn.algolia.com/api/v1/search?query=${keyword}`
      );

      expect(screen.getByText("created_at data")).toBeInTheDocument();
    });
  });
});
