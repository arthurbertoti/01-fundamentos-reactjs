import { Post } from './Post'

export
 function App() {
  return (
    <>
    <h1>Hello World!</h1>
    <Post
      author="Arthur Bertoti"
      date="2023-05-04"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."
    />
    <Post
      author="Gabriel"
      date="2023-05-04"
      content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor."

    />
    </>
  )
}