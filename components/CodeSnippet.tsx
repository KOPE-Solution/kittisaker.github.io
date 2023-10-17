"use client"
import React from 'react'
import { Snippet, PropsWithChildren } from "@geist-ui/core";


function CodeSnippet( props: PropsWithChildren ) {
  return (
    <>
        <Snippet {...props} text={props.text}  />
    </>
  )
}

export default CodeSnippet