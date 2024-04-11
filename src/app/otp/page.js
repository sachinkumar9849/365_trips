"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

import Otp from "./Otp";

const queryClient = new QueryClient();

const Page = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {/* Wrap your entire application with QueryClientProvider */}
        <Otp />
      </QueryClientProvider>
    </div>
  );
};

export default Page;
