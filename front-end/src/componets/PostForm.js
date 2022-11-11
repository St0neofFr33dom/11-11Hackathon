import {useState} from 'react'
import "../style/postForm.css"

const PostForm = ({post, setPost}) => {

    const [form,setForm] = useState(
        {
            name: "",
            title: "",
            description: "",
            link: "",
            imageURL: "",
            imageALT: ""
        }
    )

        function handleChange(e) {
            let value = e.target.value
            let name = e.target.name
            setForm({...form, [name]:value})
        }

        function handleSubmit() {
            setPost([...post, form])
            setForm(
                {
                    name: "",
                    title: "",
                    description: "",
                    link: "",
                    imageURL: "",
                    imageALT: ""
                })
        }

    return (
        <div className="postForm">
        <h2>Submit a Resource</h2>
            <div className="postFormInput">
                <label forhtml="name">Name:</label>
                <input type="text" id="name" name="name" placeholder='Name...' value={form.name} onChange={handleChange}></input>
            </div>
            <div className="postFormInput">
                <label forhtml="title">Title:</label>
                <input type="text" id="title" name="title" placeholder='Title of Post' value={form.title} onChange={handleChange}></input>
            </div>
            <div className="postFormInput">
            <label forhtml="description">Description:</label>
            <input type="text" id="description" name="description" placeholder='Brief summary' value={form.description} onChange={handleChange}></input>
            </div>
            <div className="postFormInput">
            <label forhtml="link">Link:</label>
            <input type="text" id="link" name="link" placeholder='URL of resource' value={form.link} onChange={handleChange}></input>
            </div>
            <div className="postFormInput">
            <label forhtml="imageURL">ImageURL:</label>
            <input type="text" id="imageURL" name="imageURL" placeholder='URL of a preview image' value={form.imageURL} onChange={handleChange}></input>
            </div>
            <div className="postFormInput">
            <label forhtml="imageALT">ImageTitle:</label>
            <input type="text" id="imageALT" name="imageALT" placeholder='Brief description of image' value={form.imageALT} onChange={handleChange}></input>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default PostForm