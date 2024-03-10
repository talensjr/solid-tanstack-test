import { Title } from "@solidjs/meta";
import { createQuery } from "@tanstack/solid-query";
import { createEffect } from "solid-js";
import { getTanstackNotes } from "~/lib/api";

export default function Tanstack() {
  const notes = createQuery(() => ({
    queryKey: ["notes"],
    queryFn: () => getTanstackNotes(),
  }));

  createEffect(() => {
    console.log("notes", notes.data);
  });

  return (
    <main>
      <pre>{JSON.stringify(notes.data, null, 2)}</pre>

      <Title>Hello World</Title>
      <h1>Hello world!</h1>
    </main>
  );
}
