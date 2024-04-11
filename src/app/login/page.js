"use client";

import React from "react";
import Login from "./Login";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

const Page = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        
        {/* Wrap your entire application with QueryClientProvider */}
        <Login />
      </QueryClientProvider>
    </div>
  );
};

export default Page;
