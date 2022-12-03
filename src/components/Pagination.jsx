import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <>
     
  <div className="d-flex justify-content-center">
    
    <nav aria-label="Page navigation example">
      <ul className="pagination">
      <li className="d-flex justify-content-Left">
          <a
            className="btn btn-danger "
            //href="!#"
            onClick={() => onButtonClick("delete")}
          >
            delete
          </a>
        </li>

      
        <li className="page-item">
          <a
            className="page-link"
            //href="!#"
            onClick={() => onButtonClick("prev")}
          >
            Previous
          </a>
        </li>

        {new Array(numberOfButtons).fill("").map((el, index) => (
          <li className={`page-item key={index} ${index + 1 === counter ? "active" : null}`} scope="row">
            <a  
              className="page-link"
              // href="!#"
              onClick={() => setCounter(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            // href="!#"
            onClick={() => onButtonClick("next")}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>

    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
    </>
  );
};

export default Pagination;