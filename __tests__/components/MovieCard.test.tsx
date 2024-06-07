import { render, screen } from "@testing-library/react";
import MovieCard from "@/components/MovieCard";
import { IMovie } from "@/app/getData/page";

const movie: IMovie = {
  id: 1175156,
  backdrop_path: "/4So4aDgPRkspivwd0WEZu9x1GVH.jpg",
  poster_path: "/w4wRjLvRhQ3RZtY2YPYs1IrJbX1.jpg",
  release_date: "2024-06-04",
  original_title: "Ricchi a tutti i costi",
  overview:
    "When a grandmother falls for a cheeky suitor with dubious intentions, her family devises a secret plan to protect her life — and their inheritance.",
  trending_time: ["day"],
};

jest.mock("next/image", () => {
  const MockedImage = ({ src, alt, fetchPriority, ...props }: any) => {
    return (
      <img src={src} alt={alt} data-fetch-priority={fetchPriority} {...props} />
    );
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});

test("Should render correctly", () => {
  render(<MovieCard movie={movie} />);
  const container = screen.queryByTestId<HTMLLinkElement>("movieCardLink");
  const image = screen.queryByTestId<HTMLImageElement>("movieCardImage");
  expect(container?.href).toBe("http://localhost/movie?id=1175156");
  expect(image?.src).toBe(
    "https://image.tmdb.org/t/p/w300/w4wRjLvRhQ3RZtY2YPYs1IrJbX1.jpg"
  );
  expect(image?.alt).toBe("Ricchi a tutti i costi");
  expect(screen.getByText("Ricchi a tutti i costi")).toBeInTheDocument();
  expect(screen.getByText("2024-06-04")).toBeInTheDocument();
});
