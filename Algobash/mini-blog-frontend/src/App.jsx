import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  // console.log('render');
  const [posts, setPosts] = useState([{
    title: 'Hello Friends',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis accusamus qui voluptate voluptas aspernatur maxime velit dolorum veritatis debitis, aliquam explicabo delectus rem. Unde repellat culpa tenetur quam rem.'
  }])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [form, setForm] = useState('add')
  const [indexEdit, setIndexEdit] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title !== '' && content !== ''){
      setPosts([...posts, {title:title, content:content}])
      setTitle('')
      setContent('')
    }
    else {
      alert('title and content required')
    }
  }

  const handleEdit = (e) => {
    e.preventDefault()

    if (form !== 'edit') {
      return false
    }

    const newPosts = posts.map((v, i) => {
      if (i === indexEdit) {
        v.title = title
        v.content = content
      }
      return v
    })

    setPosts(newPosts)
    cancel()
  }

  const hapus = (i) => {
    const newPosts = posts.filter((v, idx) => idx !== i)
    setPosts(newPosts)
  }

  const edit = (i) => {
    const {title, content} = posts[i]
    setIndexEdit(i)
    setForm('edit')
    setTitle(title)
    setContent(content)
  }

  const cancel = () => {
    setTitle('')
    setContent('')
    setForm('add')
  }

  const EditButtons = () =>  (
    <div className="row">
      <div className='col-6'>
        <button className='btn btn-block btn-success'>
          Save
        </button>
      </div>
      <div className='col-6'>
        <button className='btn btn-block btn-danger' onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  )

  const SubmitButton = () => (
    <button className='btn btn-block btn-primary'>
      Submit
    </button>
  )

  return (
    <div className="container mt-5">
      <h1 className='text-center'>Mini Blog</h1>
      <form onSubmit={form === 'edit' ? handleEdit : handleSubmit}>
        <div className="form-group">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Insert blog title ..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="form-group">
          <label for="content">Content</label>
          <textarea
            id="content"
            className="form-control"
            rows="5"
            placeholder="Insert blog content ..."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
        {form == 'edit' ? <EditButtons/> : <SubmitButton/>}
      </form>
      <br />
      <div className="row">
        {posts && posts.map((p, i) => {
          return (
            <Post key={i} title={p.title} content={p.content}
              editPost={() => edit(i)} 
              delPost={() => hapus(i)} 
            />
          )
        })}
      </div>
    </div>
  );
};

const Content = styled.p`
  height: 150px;
  overflow: hidden;
`;

const Post = ({title, content, editPost, delPost}) => {
  return (
    <div className="col-4 mt-3">
      <h4>{title}</h4>
      <Content>
        {content}
      </Content>
      <div className="d-flex">
        <button className="w-50 mx-2 btn btn-outline-success" onClick={editPost}>Edit</button>
        <button className="w-50 mx-2 btn btn-outline-danger" onClick={delPost}>Delete</button>
      </div>
    </div>
  );
};

export default App;