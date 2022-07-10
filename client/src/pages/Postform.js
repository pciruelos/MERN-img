import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {usePosts} from '../context/postContext'
import {useNavigate} from 'react-router-dom'

export function Postform() {
  const {createPost} = usePosts()
  const navigate = useNavigate()
  return (
    <div>
      <Formik
      initialValues={{
        title:'',
        description:''
      }}
      validationSchema={Yup.object({
        title: Yup.string().required("Please fill the input correcly").max(10),
        description: Yup.string().required("Please fill the input correcly")
      })}
      onSubmit={ async (values,actions) => {
        await createPost(values)
        navigate('/')
      }} 
      >
        {({handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
<div className='row p-2'>

          <Field name='title' placeholder="Title" className='p-3' />
          <ErrorMessage component="p" className='text-red-600 font-bold' name='title'/>
</div>
<div className='row p-2'>
  
          <Field name='description' placeholder="Description" className='p-3' />
          <ErrorMessage component="p" className='text-red-600 font-bold' name='description'/>
</div>
<div className='row p-2'>

          <button type='submit' className='rounded bg-green-600 p-4'>
            Save
          </button>
</div>
        </Form>
        )}
      </Formik>
    </div>
  )
}
