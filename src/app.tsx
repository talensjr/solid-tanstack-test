import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { QueryClientProvider } from "@tanstack/solid-query";
import { queryClient } from "./lib/queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router
        root={(props) => (
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <a href="/">createAsync</a>
            <a href="/tanstack">Tanstack</a>
            <Suspense fallback={<div>loading from app.tsx</div>}>
              {props.children}
            </Suspense>
          </MetaProvider>
        )}
      >
        <FileRoutes />
      </Router>
    </QueryClientProvider>
  );
}
