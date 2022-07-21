import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePosts } from "../context/postContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export function Postform() {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState({ title: "", description: "", image: null });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getPost(params.id);
        setPost(data);
      }
    })();
  }, [params.id]);

  return (
    <div className="flex items-center justify-center">
      <div className="p-10 shadow-xl bg-slate-200 shadow-blue-400">
        <div className="flex justify-between items-center py-4">
          <h3 className="text-lg">New Post</h3>
          <Link to="/">Go Back to list</Link>
        </div>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string()
              .required("Please fill the input correcly")
              .max(10),
            description: Yup.string().required(
              "Please fill the input correcly"
            ),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
                await updatePost(params.id, values)
            } else {
              await createPost(values);
            }
            actions.setSubmitting(false)
            navigate("/");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="">
              <div className="row p-2">
                <label htmlFor="title" className="text-sm block font-bold">
                  Title:
                </label>
                <Field name="title" placeholder="Title" className="p-3" />
                <ErrorMessage
                  component="p"
                  className="text-red-600 font-bold"
                  name="title"
                />
              </div>
              <div className="row p-2">
                <label
                  htmlFor="description"
                  className="text-sm block font-bold"
                >
                  Description:
                </label>
                <Field
                  component="textarea"
                  rows={3}
                  name="description"
                  placeholder="Description"
                  className="p-3"
                />
                <ErrorMessage
                  component="p"
                  className="text-red-600 font-bold"
                  name="description"
                />
                <label
                  htmlFor="image"
                  className="text-sm block font-bold"
                >
                  Image:
                </label>

                <input type="file" className="py-2 focus:outline-none rounded bg-grey-600 text-white w-full" name="image" onChange={(e) => setFieldValue('image',(e.target.files[0]))} />

              </div>
              <div className="row p-2">
                <button type="submit"
                 className="rounded bg-green-600 p-4"
                 disabled={isSubmitting}>
                  {isSubmitting ? (
                    <AiOutlineLoading3Quarters className="animate-spin h-5 w-5"/>
                  ) : 'Save'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
