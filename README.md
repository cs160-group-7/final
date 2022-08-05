# final

Our Figma Link: https://www.figma.com/file/9ctDTnQVBvxtzeEopxtGxp/Final-Project-Figma?node-id=2%3A2

Try npm start in your repo to test.
Make sure that react is installed.

npm install react
npm install firebase
npm install reactstrap
npm install react-router-dom

Note:
please use your own dev branch and make a pull request when your part is done.

Documentation

Post Object
 * createdAt: represents when the post was created
 * title: title of the post
 * topic: worry OR gratitude
 * likes: number of likes
 * author: author of the post
 * id : id of the post 

 Comment Object
 * represents the comment of the post
 * author : Author of the comment
 * content : content of the comment
 * createAt : represents when the post was created
 * belogsTo : represents which post the comment belongs to
 * id : id of the comment


Questions:
1. How To Route?
Please edit javascript/Router.js to add your HTML or component to the react router.
For example, if you want to add myPage,
add this following line.
<Route exact path = "myPage" element={<myPage />} />


