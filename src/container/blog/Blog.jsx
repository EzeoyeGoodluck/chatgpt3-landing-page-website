import { Article } from '../../components'
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05
} from './import'
import './blog.css'


const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
            We are blogging about it </h1>
      </div>
      <div className='gpt3__blog-conatiner'>
        <div className='gpt3__blog-container__groupA'>
          <Article  imgURL={blog01} title='GPT-3 and Open  AI is the future. Let us exlore how it is?'  date='Sep 26, 2021'/>
        </div>
        <div className='gpt3__blog-container__groupB'>
        <Article imgURL={blog02} title='GPT-3 and Open  AI is the future. Let us exlore how it is?'  date='Sep 26, 2021' />
        <Article imgURL={blog03} title='GPT-3 and Open  AI is the future. Let us exlore how it is?'  date='Sep 26, 2021'/>
        <Article imgURL={blog04} title='GPT-3 and Open  AI is the future. Let us exlore how it is?'  date='Sep 26, 2021'/>
        <Article imgURL={blog05}  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'  date='Sep 26, 2021'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
