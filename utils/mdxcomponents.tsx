"use client"

import { Snippet } from "@geist-ui/core";
import React, { PropsWithChildren } from "react";

const Button = (props: PropsWithChildren) => (
 <button {...props} style={{backgroundColor:"blue",borderRadius:"5px",color:"white",padding:"2px 10px"}}  >{props.children}</button>
);

const CodeSnippet = (props: any) => (
    <Snippet {...props} text={props.text} />
   );

const MDXComponents = {
  Button,
  CodeSnippet,
};

export default MDXComponents;