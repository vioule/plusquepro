import { z } from "zod";

const EditMovieSchema = z.object({
  title: z.string().min(1, { message: "Title required" }),
  overview: z.string().min(1, { message: "Overview required" }),
  date: z.coerce.date({ message: "Invalid date" }),
});

export default EditMovieSchema;
