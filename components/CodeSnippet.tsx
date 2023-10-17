"use client"
import { Snippet } from "@geist-ui/core";

function CodeSnippet( props: any ) {
  return (
    <>
        <Snippet {...props} text={props.text}  />
    </>
  )
}

export default CodeSnippet