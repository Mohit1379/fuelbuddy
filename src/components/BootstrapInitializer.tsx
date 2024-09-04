"use client"
import React, { useEffect } from "react";

export default function BootstrapInitializer() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; 
}