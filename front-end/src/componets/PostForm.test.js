import PostForm from "./PostForm";
import { useState } from "react";
import {render,screen,fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import "@jest/globals"
import userEvent from "@testing-library/user-event"

it ("checks that the form renders",() =>{
    render(<PostForm />)
    let elements = screen.getAllByRole("textbox")
    expect(elements.length).toEqual(6)
})

it("check that the submit button carries out a function", async ()=>{
    const user = userEvent.setup()
    const [state,setState] = useState([])
    render(<PostForm post={state} setPost={setState}/>)
    const button = screen.getByRole("button")
    await user.click(button)
    expect(state).toStrictEqual([{name: "",
    title: "",
    description: "",
    link: "",
    imageURL: "",
    imageALT: ""}])
})