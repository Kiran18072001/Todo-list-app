"use client";
import { list } from 'postcss';
import React, { useState } from 'react'

const Todo = () => {

    // Write the data into the input field via virtual dom(2-way binding)✅
    // initially no details added should be displayed on the screen (done)
    // if user enters the data and when user presses the add button, then the task should be added
    // if user presses the delete button then the task should be deleted
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [data, setdata] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault();
        setdata([...data, { title, desc }])
        settitle("")
        setdesc("")
    }

    let renderTask = <h1 className='text-center'>No Task Assigned</h1>
    let deleteHandler = (i) => {
        let copyTask = [...data]
        copyTask.splice(i, 1) // Delete that specific value where you press the delete button 
        setdata(copyTask)
    }

    if(data.length > 0){
        renderTask = data.map((t, i) => {
            return (
                <li key={i}>
                    <div className='flex justify-between gap-80'>
                        <h4 className='bg-pink-100 border-black border-2 rounded p-1 mb-4'>{t.title}</h4>
                        <h4 className='bg-pink-100 border-black border-2 rounded p-1 mb-4'>{t.desc}</h4>
                        <button onClick={() =>{
                            deleteHandler(i)
                        }} className='py-1 px-4 bg-red-400 rounded border-black border-2 mb-4'>Remove</button>
                    </div>
                </li>
            )
        })
    }

    return (
        <>
            <h1 className='bg-black h-20 text-white flex items-center
             justify-center text-2xl font-bold'>My Todo List</h1>
            <form onSubmit={submitHandler} className='flex justify-between p-8 items-center bg-slate-400'>
                <input className='w-80 px-1 border-black border-2 outline-none rounded font-bold' type="text"
                    value={title}
                    onChange={(e) => {
                        settitle(e.target.value)
                    }} //For 2-way binding
                    placeholder='Enter your Task' />

                <input className='w-80 px-1 border-black border-2 outline-none rounded font-bold' type="text"
                    value={desc}
                    onChange={(e) => {
                        setdesc(e.target.value)
                    }}
                    placeholder='Enter your Description' />

                <button className='bg-blue-400 py-0.5 
                font-bold text-white px-6 border-2 border-black rounded'>Add</button>
            </form>
            <hr />
            <div className='bg-blue-100 p-5 font-bold'>
                <ul className='list-none mb-4'>{renderTask}</ul>
            </div>
        </>
    )
}

export default Todo