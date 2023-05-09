import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "./redux/actions";

const List = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(actions.fetchProductsReq());
  }, []);
  return (
    <div>
      {loading ? (
        <>Loading....</>
      ) : (
        <>
          <ul>
            {list?.map((product, id) => {
              return (
                <>
                  <li key={id}> {product?.title}</li>
                  <hr />
                </>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default List;
