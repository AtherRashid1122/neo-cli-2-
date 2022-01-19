import {Blog_Fetch_FAILED,Blog_Fetch_SUCCESS,Blog_LOADING} from './blog_type';

const State = {
    blog_loading: true,
    Blog_info: [],
    finish:""
  };
export default Blog_Reducer = (state = State, action) => {

    switch (action.type) {

             case Blog_LOADING:
            return {
                ...state,
                blog_loading: true,
            }

        case Blog_Fetch_SUCCESS:
            let arr=[...state.Blog_info,...action.payload.data]
          let  isFinish=action.payload.finish;
            // console.log(action.payload)
            return {
                ...state,
                Blog_info:arr,
                finish:isFinish,
                blog_loading: false

            }
        case Blog_Fetch_FAILED:
            return {
                ...state,
                blog_loading: false,
            }
     
        default:
            return {
                ...state,
            }
    }
}