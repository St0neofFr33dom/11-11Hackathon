import {useState} from 'react'

const PostForm = () => {

    const [form,setForm] = useState(
        {
            name: "",
            title: "",
            description: "",
            link: "",
            imageURL: "",
            imageAlt: ""
        }
    )

        function handleChange(e) {
            let value = e.target.value
            let name = e.target.name
            setForm({...form, [name]:value})
        }

    return (
        <div>
            <label forhtml="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Name...' value={form.name} onChange={handleChange}></input>
            <label forhtml="title">Title:</label>
            <input type="text" id="title" name="title" placeholder='Title of Post' value={form.title} onChange={handleChange}></input>
        </div>
    )
}

export default PostForm