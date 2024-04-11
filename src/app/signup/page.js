"use client";

import React from "react";
import Signup  from "./Signup";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import RegisterForm from "./Signup";

const queryClient = new QueryClient();

const Page = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        
        {/* Wrap your entire application with QueryClientProvider */}
        <RegisterForm />
      </QueryClientProvider>
    </div>
  );
};

export default Page;
