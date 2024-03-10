import { Title } from "@solidjs/meta";
import { createAsync } from "@solidjs/router";
import { createEffect } from "solid-js";
import { getCreareAsyncNotes } from "~/lib/api";

export default function Home() {
  const notes = createAsync(() => getCreareAsyncNotes());

  createEffect(() => {
    console.log("notes", notes());
  });

  return (
    <main>
      <pre>{JSON.stringify(notes(), null, 2)}</pre>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
    </main>
  );
}
