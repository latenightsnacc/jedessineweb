import { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({component: Component, ...rest})