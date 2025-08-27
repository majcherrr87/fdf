"use client";

import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

interface Props {
  children: React.ReactElement<{
    elevation?: number;
    style?: React.CSSProperties;
  }>;
}

export function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true, // natychmiastowa reakcja na scroll
    threshold: 0, // próg, od którego następuje podniesienie
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? "#9fff80" : "transparent",
      transition: "background-color 0.3s ease",
      ...children.props.style,
    },
  });
}
