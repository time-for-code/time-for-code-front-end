import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { routeTree } from "../routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { UserProvider } from "../contexts/UserContext";
import "primeicons/primeicons.css";

const router = createRouter({ routeTree })
const queryClient = new QueryClient();

const App = () => {
    return (
        <UserProvider>
            <StrictMode>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </StrictMode>
        </UserProvider>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);