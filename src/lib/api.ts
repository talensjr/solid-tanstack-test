export const getCreareAsyncNotes = async () => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const notes = [
    { id: 1, text: "Hello, createAsync!" },
    { id: 2, text: "Goodbye, createAsync!" },
  ];
  return notes;
};

export const getTanstackNotes = async () => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const notes = [
    { id: 1, text: "Hello, tanstack!" },
    { id: 2, text: "Goodbye, tanstack!" },
  ];
  return notes;
};
