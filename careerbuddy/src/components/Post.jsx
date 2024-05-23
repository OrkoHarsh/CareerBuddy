import React from 'react'
import './Swayamcourses.css'
const Post = ({post}) => {
  return (
    // <div>
    <div className="main_container">
      <div class="section_our_solution">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="our_solution_category">
              {/* {filtered.slice(pagesVisited, pagesVisited + coursesPerPage).map(c => ( */}
              <div class="solution_cards_box">
                <div class="solution_card" key={post.id}>
                  <div class="hover_color_bubble"></div>
                  {/* <div class="so_top_icon"></div> */}
                  <div class="solu_title">
                    <h3>{post.title}</h3>
                  </div>
                  <div class="solu_description">
                    <p>{post.professor}</p>
                    <button type="button" class="read_more_btn">
                      Go to course
                    </button>
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Post
