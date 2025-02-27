import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  teamId: string;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  users: User[];
} 

export interface NavItemProps {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trend: number;
}
