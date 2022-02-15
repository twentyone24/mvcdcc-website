import MyUnorderListContainer from "./MyUnorderListContainer";

const MyUnorderListWithHeading = ({ heading, list, ...propsForList }) => {
  return (
    <>
      <h4>{heading}</h4>
      <MyUnorderListContainer list={list} {...propsForList} />
    </>
  );
};

export default MyUnorderListWithHeading;
